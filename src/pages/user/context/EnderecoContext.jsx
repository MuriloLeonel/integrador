import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export default function ParceiroContext({ children }) {
  const [endereco, setEndereco] = useState([]);
  const [allendereco, setAllEndereco] = useState([]);
  const [filter, setFilter] = useState([]);

  //CRUD
  const createEndereco = (ende) => {
    fetch("https://businessproject-back.herokuapp.com/parceiro/",{
      method: "POST",
      body: JSON.stringify(ende)
    })
    .then((res) => res.json())
    .then((json) => console.log(json));
  };

  const update = () => {};

  const remove = () => {};

  const list = () => {
    fetch("https://businessproject-back.herokuapp.com/parcerio/")
      .then((res) => res.json())
      .then((json) => setAllEndereco(json));
  };

  useEffect(() => {
    let filtered = allendereco.filter((ende) => {
      if (filter == "") return true;

      return (
        ende.cep.indexOf(filter) > -1 ||
        ende.cnpj.indexOf(filter) > -1 ||
        ende.telefone.indexOf(filter) > -1 ||
        ende.id == filter
      );
    });

    setEndereco(filtered);
  },[allendereco, filter]);

  return (
    <Context.Provider value={{ endereco, createEndereco, update, remove, list, filter, setFilter }}>
      {children}
    </Context.Provider>
  );
}
