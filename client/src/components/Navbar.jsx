import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/apiCalls';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  margin-left: 25px;
  padding: 5px;

  ${mobile({ marginLeft: '1rem' })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${mobile({ justifyContent: 'center', flex: 1, marginRight: '1rem' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({
    fontSize: '12px',
    marginLeft: '0px',
    width: '3.5rem',
    alignItems: 'end',
    justifyContent: 'end',
    display: 'flex'
  })}
`;

const MenuItemText = styled.p`
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    setCurrentUser(user);
    try {
      console.log('1st user', currentUser);
      console.log('clicked');
      logout(dispatch, { currentUser });
      console.log('LAst user', currentUser);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'grey', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BA.</Logo>
        </Center>
        <Right>
          {!user ? (
            <>
              <Link style={{ textDecoration: 'none' }} to="/register">
                <MenuItem>
                  <MenuItemText>REGISTER</MenuItemText>
                </MenuItem>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/login">
                <MenuItem>
                  <MenuItemText>SIGN IN</MenuItemText>
                </MenuItem>
              </Link>
            </>
          ) : (
            <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
