import React, { useState, useEffect, useRef } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import { v4 as uuid } from "uuid";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else return [];
};

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value!");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "value edited!");
    } else {
      showAlert(true, "success", "item added!");
      const newItem = { id: uuid(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const editItem = (id) => {
    inputRef.current.focus();
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed!");
    setList(list.filter((item) => item.id !== id));
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list!");
    setList([]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  });
  console.log(alert.show);

  return (
    <div className="App">
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <h1 className="title">Grocery List</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="e.g. eggs"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          {isEditing ? "Edit" : "Submit"}
        </button>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} editItem={editItem} removeItem={removeItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
