import React from "react";

import UserList from "../src/components/users/";
import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import store from "./store";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  spacing: 4
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <UserList />
          </header>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
