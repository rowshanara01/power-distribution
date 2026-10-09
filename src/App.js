import "./App.css";
import BillInfoAdd from "./components/BillInfoAdd/BillInfoAdd";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import SearchField from "./components/SearchField/SearchField";
import { Routes, Route } from "react-router-dom";
import BillInfo from "./components/BillInfo/BillInfo";
import ModalForm from "./Hooks/ModalForm/ModalForm";
import LogIn from "./components/LogIn/LogIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchField />
      {/* <Register /> */}

      <ModalForm />

      <Routes>
        <Route path="/" element={<BillInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
