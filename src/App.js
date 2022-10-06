import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ViewExpense from "./pages/ViewExpense";
import Protected from "./Protected";
import Public from './Public';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected><ViewExpense /></Protected>} />
        <Route path="/login" element={<Public><Login /></Public>} />
        <Route path="/register" element={<Public><Register /></Public>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
