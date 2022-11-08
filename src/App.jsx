import React from "react";

import "./App.css";

import Layout from "./Components/Layout";
import HomeScreen from "./Screens/HomeScreen";
import SecondScreen from "./Screens/SecondScreen";
// import NotFoundScreen from './Screens/404Screen'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionForm from "./Components/Transactions/TransactionsForm";
import RequireAuth from "./Components/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
          <Route path={"/news"} element={<SecondScreen />} />¨
          <Route element={<RequireAuth />}>
            <Route path="/transactions" element={<TransactionForm />} />
            <Route path="/deposit" element={<HomeScreen />} />
            <Route path="/pay" element={<HomeScreen />} />

            <Route path="/balance" element={<HomeScreen />} />
            <Route path="/send" element={<HomeScreen />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
