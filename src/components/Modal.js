import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { displayModal } from "../redux/slices/modalSlice";

const ModalBg = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const Centered = styled.div`
  position: fixed;
  width: 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width:800px) {
    width:100%;
    height: 100vh;
  }
`;

const ModalBody = styled.div`
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

const ModalContent = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #2c3e50;
  @media screen and (max-width:800px) {
    padding: 30px;
    height: 100vh;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #2c3e50;
  background: white;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;
  :hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translate(-4px, 4px);
  }
`;

export const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(displayModal(false));
  };
  return (
    <>
      <ModalBg onClick={closeModal} />
      <Centered>
        <ModalBody>
          <CloseButton onClick={closeModal}>
            <i className="fa fa-close" />
          </CloseButton>
          <ModalContent>
            {children}
          </ModalContent>
        </ModalBody>
      </Centered>
    </>
  );
};

export default Modal;