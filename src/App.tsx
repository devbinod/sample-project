import React from "react";
import logo from "./logo.svg";
import "./App.css";

import UserList from "../src/components/users/";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      {" "}
      <div className="App">
        <header className="App-header">
          <UserList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
