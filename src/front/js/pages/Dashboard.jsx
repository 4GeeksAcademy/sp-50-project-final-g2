import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import logo from "../../img/Logo.png";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="col-6 text-start my-auto">
      <div className="error mx-auto" data-text="Bienvenido">
        Bienvenido,  
        {localStorage.getItem('name')}
      </div>
      <div className= "col-7">
        <img src={logo} />
      </div>
      <p><h3>Warehouse and Operations Planning & Reporting</h3></p>
    </div>
  );
};
