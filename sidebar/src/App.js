import React from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { AppProvider } from "./context";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Home />
        <Modal />
        <Sidebar />
      </div>
    </AppProvider>
  );
};

export default App;
