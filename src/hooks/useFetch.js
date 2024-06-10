import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log("Cambio realizado");
        })
        .catch(Error);
  };

    fetchData(); // Llama a fetchData inmediatamente


  }, [url]); // Agrega url a las dependencias para que el intervalo se reinicie si la url cambia

  return { data };
}
