import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

type Props = {};

const Guides: NextPage = (props: Props) => {
  return <GuidesWrapper>guides</GuidesWrapper>;
};

const GuidesWrapper = styled.div`
  max-width: 960px;
  margin: 40px auto;
  letter-spacing: 1px;
  line-height: 1.6em;
`;

export default Guides;
