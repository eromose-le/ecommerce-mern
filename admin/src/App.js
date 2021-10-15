import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';

import './app.css';
import './components/sidebar/sidebar.css';

import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

const SidebarFlex = styled.div`
  /* @sidebar.css */
  flex: 1;
`;

function App() {
  return (
    <Router>
      {/* NavBar */}
      <Topbar />
      <div className="container">
        {/* Sidebar */}
        <SidebarFlex>
          <Sidebar />
        </SidebarFlex>
        {/* Body */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
