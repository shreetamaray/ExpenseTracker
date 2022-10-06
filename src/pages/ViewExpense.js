import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Table from '../components/Table';
import { useSelector, useDispatch } from "react-redux";
import Modal from '../components/Modal';
import AddExpenseForm from '../components/AddExpenseForm';
import { displayModal } from '../redux/slices/modalSlice';
import { addDoc, collection, doc, getDocs, query, setDoc } from 'firebase/firestore';
import { fireDb } from '../configs/firebaseConfig';
import { setType } from "../redux/slices/formTypeSlice";
import Header from "../components/Header";

const Center = styled.div`
  display: flex;
  margin: 2rem auto;
  width: 70%;
  justify-content: space-between;
  @media screen and (max-width:800px) {
    flex-direction: column-reverse;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: #1d96b2;
  @media screen and (max-width:800px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const AddExpenseButton = styled.button`
  margin: 20px 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 13px 30px;
  border-radius: 15px;
  font-size: 0.8rem;
  border: none;
  color: white;
  background: #1d96b2;
  transition: all 0.25s ease;
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -10px rgba(24, 90, 219, 0.6);
  }
`;

const NotFound = styled.div`
  display:flex;
  flex-direction: column;
`;

const user = JSON.parse(localStorage.getItem('user'));

function ViewExpense() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const qry = await query(collection(fireDb, `users/${user.id}/transactions`));
      const resp = await getDocs(qry);
      const expenseData = resp.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      const sortedData = expenseData.sort((a,b)=>{
        return new Date(b.date) - new Date(a.date);
      });
      setData(sortedData);
    } catch (e) {
      alert("error fetching expenses", e);
    }
  }

  const openAddModal = () => {
    dispatch(displayModal(true));
    dispatch(setType('Add'));
  }

  useEffect(() => {
    getData();
  }, []);

  const formType = useSelector((state) => state.formType.value);

  const onSubmit = async (event, expenseId, name, amount, date) => {
    event.preventDefault(event);
    try {
      if (formType === 'Add') {
        await addDoc(collection(fireDb, `users/${user.id}/transactions`), {
          name:  name,
          date: date,
          amount: amount
        });
        alert('expense added successfully');
      } else {
        await setDoc(doc(fireDb, `users/${user.id}/transactions`, expenseId), {
          name:  name,
          date: date,
          amount: amount
        });
        alert('expense added successfully');
      }
      dispatch(displayModal(false));
      getData();
    } catch (error) {
      if (formType === 'Add') {
        alert('fail to add expense');
      } else {
        alert('fail to edit expense');
      } 
    }
  };

  const isShown = useSelector((state) => state.modal.value);

  const editSelectedExpense = (data) => {
    dispatch(displayModal(true));
    dispatch(setType('Edit'));
    setSelectedData(data);
  }

  if (!data || !data.length) {
    return (
      <NotFound>
        <Header />
        <Center>No Records Found</Center>
        <AddExpenseButton onClick={openAddModal}>Add Expense</AddExpenseButton>
      </NotFound>
    )
  }

  return (
    <div>
        <Header />
        <div>
           <Center>
             <Title>My Expenses</Title>
             <AddExpenseButton onClick={openAddModal}>Add Expense</AddExpenseButton>
            </Center>
            <Table data={data} editSelectedExpense={editSelectedExpense} />
        </div>
        {isShown ? (
          <Modal>
            <AddExpenseForm onSubmit={onSubmit} selectedData={selectedData} />
          </Modal>
        ) : null}
    </div>
  )
}

export default ViewExpense