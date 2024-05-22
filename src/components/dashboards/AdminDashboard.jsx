import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

const SellerDashboard = () => {

  const { userRole } = useAuth();

  // Verifica si el usuario tiene el rol necesario
  if (!["ADMINISTRADOR"].includes(userRole)) {
    return (
      <div className="container">
        <h3>No tienes permisos para acceder a esta página.</h3>
      </div>
    );
  }
  return (
    <div className="container">
      <h1>Tablero del Administrador</h1>

      {/* Clientes para contactar */}
      <section>
        <h2>Clientes para contactar</h2>
        {/* Aquí va la tabla de clientes para contactar */}
      </section>

      {/* Clientes para seguimiento */}
      <section>
        <h2>Clientes para seguimiento</h2>
        {/* Aquí va la tabla de clientes para seguimiento */}
      </section>

      {/* Dar de alta cliente */}
      <section>
        <h2>Dar de alta cliente</h2>
        <Link to="/formclientes" className="btn btn-primary">
          Nuevo Cliente
        </Link>
      </section>
      {/* Listar automotores */}
      <section>
        <h2>Listar automotores</h2>
        <Link to="/vehiclelist" className="btn btn-primary">
          Ver Listado
        </Link>
      </section>
      {/* Dar de alta automotor */}
      <section>
        <h2>Dar de alta automotor</h2>
        <Link to="/newvehicle" className="btn btn-primary">
          Nuevo Automotor
        </Link>
      </section>

      {/* Dar de alta automotores en forma masiva. Importa archivo .csv */}
      <section>
        <h2>Actualizar listado automotores en forma masiva</h2>
        <Link to="/massivevehicleform" className="btn btn-primary">
          Actualización masiva de automotores
        </Link>
      </section>

      <section>
        <h2>Propuestas de crédito</h2>
        <Link to="/creditlist" className="btn btn-primary">
          Ver propuestas de crédito
        </Link>
      </section>


      {/* Mis Ventas */}
      <section>
        <h2>Mis Ventas</h2>
        {/* Aquí va la tabla de mis ventas */}
      </section>
    </div>
  );
};

export default SellerDashboard;