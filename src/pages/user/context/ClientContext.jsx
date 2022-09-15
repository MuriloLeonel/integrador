import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export default function ClientContext({ children }) {
  const [clients, setClients] = useState([]);
  const [allClients, setAllClients] = useState([]);
  const [filter, setFilter] = useState([]);

  //CRUD
  const create = (client) => {
    fetch("https://fakestoreapi.com/users",{
      method: "POST",
      body: JSON.stringify(client)
    })
    .then((res) => res.json())
    .then((json) => console.log(json));
  };

  const update = () => {};

  const remove = () => {};

  const list = () => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setAllClients(json));
  };

  useEffect(() => {
    let filtered = allClients.filter((client) => {
      if (filter == "") return true;

      return (
        client.nome.indexOf(filter) > -1 ||
        client.datanasc.indexOf(filter) > -1 ||
        client.email.indexOf(filter) > -1 ||
        client.id == filter
      );
    });

    setClients(filtered);
  },[allClients, filter]);

  return (
    <Context.Provider value={{ clients, create, update, remove, list, filter, setFilter }}>
      {children}
    </Context.Provider>
  );
}
