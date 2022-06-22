import React from 'react';
import styled from 'styled-components';

type Props = {};

const Footer = (props: Props) => {
  return <FooterWrapper>Copyright 2021 NinjaList</FooterWrapper>;
};

const FooterWrapper = styled.footer`
  display: block;
  text-align: center;
  padding: 30px 0;
  border-top: 1px solid #eaeaea;
  font-size: 1.4rem;
`;

export default Footer;
