import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export default function ParceiroContext({ children }) {
  const [parceiros, setParceiros] = useState([]);
  const [allparceiros, setAllParceiros] = useState([]);
  const [filter, setFilter] = useState([]);

  //CRUD
  const create = (parceiro) => {
    fetch("https://businessproject-back.herokuapp.com/parceiro/",{
      method: "POST",
      body: JSON.stringify(parceiro)
    })
    .then((res) => res.json())
    .then((json) => console.log(json));
  };

  const update = () => {};

  const remove = () => {};

  const list = () => {
    fetch("https://integrador-back.vercel.app/parceiro/")
      .then((res) => res.json())
      .then((json) => setAllParceiros(json));
  };

  useEffect(() => {
    let filtered = allparceiros.filter((parceiro) => {
      if (filter == "") return true;

      return (
        parceiro.nome.indexOf(filter) > -1 ||
        parceiro.cnpj.indexOf(filter) > -1 ||
        parceiro.telefone.indexOf(filter) > -1 ||
        parceiro.proprietario.indexOf(filter) > -1 ||
        parceiro.cpf.indexOf(filter) > -1 ||
        parceiro.id == filter
      );
    });

    setParceiros(filtered);
  },[allparceiros, filter]);

  return (
    <Context.Provider value={{ parceiros, create, update, remove, list, filter, setFilter }}>
      {children}
    </Context.Provider>
  );
}
