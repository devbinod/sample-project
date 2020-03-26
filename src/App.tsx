import React from "react";

import UserList from "../src/components/users/";
import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import store from "./store";
import PostList from "./components/posts";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a6d4fa"
    },
    secondary: {
      main: "#4caf50"
    },
    error: {
      main: "#d32f2f"
    }
  },
  spacing: 4
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <NavBar />
          <PostList />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
