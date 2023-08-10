import { Component } from "react";
import { Routes, Route } from "react-router-dom"
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  static displayName = App.name;
  render() {
    return (
      <>
        <Routes>
          {AppRoutes.map(({ element, ...rest }, index) => {
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
        <ToastContainer />
      </>
    );
  }
}