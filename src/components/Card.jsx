import React from "react";
import "../index.css";
export default function card({
  ultimoPrecio,
  descripcionTitulo,
  variacion,
  simbolo,
  tipo,
  fecha,
  apertura,
  maximo,
  minimo,
}) {
  const fechita = new Date(fecha);
  const year = fechita.getFullYear();
  const month = String(fechita.getMonth() + 1).padStart(2, "0");
  const day = String(fechita.getDate()).padStart(2, "0");
  const hours = String(fechita.getHours()).padStart(2, "0");
  const minutes = String(fechita.getMinutes()).padStart(2, "0");
  const seconds = String(fechita.getSeconds()).padStart(2, "0");

  const formatFecha = `${year}-${month}-${day} ${hours}:${minutes}`;
  

  return (
    <section className="row px-3">
      <article className="col-12  art">
        <div className="card-stats justify-content-center">
          <div className="cont-datos gren">{descripcionTitulo}</div>
        </div>
      </article>

      <article className="col-6 art">
        <div className="card-stats">
          <div className="cont-incons">
            <i className="fa-solid fa-dollar-sign"></i>
            <b>Precio</b>
          </div>
          <div className="cont-datos">{ultimoPrecio}</div>
        </div>
      </article>

      <article className="col-3 r  art">
        <div className="card-stats justify-content-center">
          <div className="cont-datos gren">{simbolo}</div>
        </div>
      </article>

      <article className="col-3  art">
        <div className="card-stats  justify-content-center">
          <div className="cont-datos gren">{tipo}</div>
        </div>
      </article>

      <article className="col-6   art">
        <div className="card-stats">
          <div className="cont-datos">{maximo}</div>
          <div className="cont-incons">
            <i className="fa-solid fa-arrow-trend-up"></i>
            <b>Max</b>
          </div>
        </div>
      </article>

      <article className="col-6  art">
        <div className="card-stats">
          <div className="cont-incons">
            <i className="fa-solid fa-arrow-trend-down"></i>
            <b>Min</b>
          </div>
          <div className="cont-datos">{minimo}</div>
        </div>
      </article>

      <article className="col-6 art">
        {variacion >= 0 ? (
          <div className="card-stats gren">
          <div className="cont-incons">
            <i className="fa-solid fa-chart-simple gren"></i>
            <b>Variacion</b>
          </div>
          <div className="cont-datos gren">{variacion}</div>
        </div>
        ):(
          <div className="card-stats red">
          <div className="cont-incons">
            <i className="fa-solid fa-chart-simple red"></i>
            <b>Variacion</b>
          </div>
          <div className="cont-datos red">{variacion}</div>
        </div>
        )}
      </article>

      <article className="col-6 art">
        <div className="card-stats">
          <div className="cont-datos">{apertura}</div>
          <div className="cont-incons">
            <i className="fa-solid fa-magnifying-glass-chart"></i>
            <b>Apertura</b>
          </div>
        </div>
      </article>

      <article className="col-12  art">
        <div className="card-stats">
          <div className="cont-incons">
            <i className="fa-regular fa-calendar-days"></i>
            <b>Fecha</b>
          </div>
          <div className="cont-datos">{formatFecha}</div>
        </div>
      </article>
    </section>
  );
}
