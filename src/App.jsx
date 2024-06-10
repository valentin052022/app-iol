import React from "react";
import "./index.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import CardStats from "./components/Card";
import { useFetch } from "./hooks/useFetch";

export default function App() {
  const [id, setId] = useState("aapl");

  const verDatos = () => {
    const id = document.getElementById("input").value.toUpperCase();
    setId(id);
  };

  const modifyUrl = `https://iol-service-app.onrender.com/${id}`;

  // llamamos a data con la url a tomar los datos
  const { data } = useFetch(modifyUrl);
 


  const precio = data?.ultimoPrecio;
  const nombre = data?.descripcionTitulo;
  const simbolo = data?.simbolo;
  const variacion = data?.variacion;
  const tipo = data?.tipo;
  const fecha = data?.fechaHora;
  const minimo = data?.minimo;
  const maximo = data?.maximo;
  const apertura = data?.apertura;


  return (
    <>
      <main className="container py-4">
        <section className="row">
          <article className="col-lg-4">
            <section>
              <h3 className="text-info fs-1 fw-bold">
                Info de mercado con Iol
              </h3>
              <p className="fs-6">
                Coloca en el input de abajo la accion que desees
              </p>
              <div className=" d-flex gap-1 my-3">
                <input  id="input" type="text" placeholder="Coloca el simbolo aqui" />
                <Button
                  onClick={verDatos}
                  variant="info"
                  className="fw-bolder rounded-0"
                >
                  Ver Datos
                </Button>
              </div>
              <b className="text-white-50">
                El Simbolo de una acccion o cedear, son las letras que
                representas a la accion en concreto ej: AAPL (Apple).
              </b>
              <p className="text-white-50">
                La App Cargara por defecto la accion de Apple.
              </p>
            </section>
          </article>
          <article className="col-lg-8">
            <CardStats ultimoPrecio={precio} variacion={variacion} descripcionTitulo={nombre} apertura={apertura} maximo={maximo} minimo={minimo} fecha={fecha} simbolo={simbolo} precio={precio} tipo={tipo}></CardStats>
          </article>
        </section>
      </main>
    </>
  );
}
