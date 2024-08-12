import React, { useEffect } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Registration from "./Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Auth } from "../../Requests/User";

function App() {
  const auth = useSelector<RootState, boolean>((state) => state.user.auth);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(Auth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {!auth && (
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
