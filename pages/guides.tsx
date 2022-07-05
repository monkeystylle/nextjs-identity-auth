import React, { useContext, useEffect } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { AuthContext } from '../stores/authContext';

const Guides: NextPage = () => {
  const { user, authReady } = useContext(AuthContext);

  console.log('user:', user);
  console.log('authReady:', authReady);

  useEffect(() => {
    if (authReady) {
      fetch(
        '/.netlify/functions/guides',
        user && {
          headers: {
            Authorization: 'Bearer ' + user.token.access_token,
          },
        }
      )
        .then(res => res.json())
        .then(data => console.log(data));
    }
  }, [user, authReady]);

  return <GuidesWrapper>guides</GuidesWrapper>;
};

const GuidesWrapper = styled.div`
  max-width: 960px;
  margin: 40px auto;
  letter-spacing: 1px;
  line-height: 1.6em;
`;

export default Guides;
