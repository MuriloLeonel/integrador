import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export default function ClientContext({ children }) {
  const [clients, setClients] = useState([]);
  const [allClients, setAllClients] = useState([]);
  const [filter, setFilter] = useState([]);

  //CRUD
  const create = (client) => {
    console.log(JSON.stringify(client));

    fetch("https://businessproject-back.herokuapp.com/register", {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const update = () => {};

  const remove = () => {};

  const list = () => {
    fetch("https://businessproject-back.herokuapp.com/cliente")
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
  }, [allClients, filter]);

  return (
    <Context.Provider
      value={{ clients, create, update, remove, list, filter, setFilter }}
    >
      {children}
    </Context.Provider>
  );
}
