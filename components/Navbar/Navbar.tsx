import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { AuthContext } from '../../stores/authContext';

type Props = {};

const Navbar = (props: Props) => {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);

  return (
    <NavbarWrapper>
      <Nav>
        <NavImage src="/rupee.png" />
        <GamingTitle>Gaming Vibes</GamingTitle>
        <UList>
          <List>
            <Link href="/">
              <a>Home</a>
            </Link>
          </List>
          <List>
            <Link href="/guides">
              <a>Guides</a>
            </Link>
          </List>
          <List onClick={login}>Login/Signup</List>
          <List onClick={logout}>Logout</List>
        </UList>
      </Nav>
      <Banner>
        <BannerImage src="/banner.png" />
      </Banner>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  margin: 20px auto 40px;
  display: flex;
  align-items: center;
`;

const GamingTitle = styled.h1`
  margin-left: 10px;
`;

const UList = styled.ul`
  margin-left: auto;
  list-style-type: none;
  padding: 0;
`;

const List = styled.li`
  display: inline-block;
  margin-left: 16px;
`;

const Banner = styled.div`
  border-radius: 6px;
`;

const NavImage = styled.img`
  width: 50px;
  height: 48px;
`;
const BannerImage = styled.img`
  width: 966px;
  height: 276px;
`;

export default Navbar;
