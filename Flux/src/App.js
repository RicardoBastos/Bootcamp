import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Routes from "./routes";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import "./config/ReactotronConfig";
import store from "./store";
import history from "./services/history";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
