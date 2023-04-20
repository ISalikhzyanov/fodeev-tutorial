import React, {useState} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Login from "./pages/login-page/Login";
import Tasks from "./pages/tasks-page/Tasks";
import Error from "./pages/error-page/Error";
import Navbar from "./components/navbar/Navbar";
import BasePopup from "./components/UI/popup/BasePopup";
import AddPopup from "./components/popups/add-popup/AddPopup";
import {useDispatch, useSelector} from "react-redux";
import {hideAddPopup} from "./redux/actions";
import AppRouter from "./components/AppRouter";

function App() {
    const addPopup = useSelector((state: any) => state.app.addPopup)
    const dispatch = useDispatch()

    const popup = () => {
        return <AddPopup />
    }
  return (
    <div className="App">
        {useLocation().pathname === '/tasks' && <Navbar/>}
        { addPopup && <BasePopup component={popup()} showOrHide={() => dispatch(hideAddPopup())}/> }
      <AppRouter/>
    </div>
  );
}

export default App;
