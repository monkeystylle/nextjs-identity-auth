import React, { useContext, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { AuthContext } from '../stores/authContext';

const Guides: NextPage = () => {
  const { user, authReady } = useContext(AuthContext);
  const [guides, setGuides] = useState<any>(null);
  const [error, setError] = useState<any>(null);

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
        .then(res => {
          if (!res.ok) {
            throw Error('You must be logged in to view this content');
          }
          return res.json();
        })
        .then(data => {
          setGuides(data);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setGuides(null);
        });
    }
  }, [user, authReady]);

  return (
    <GuidesWrapper>
      {!authReady && <div>Loading...</div>}
      {error && (
        <div>
          <p>ERROR!!</p>
        </div>
      )}
      {guides &&
        guides.map(guide => (
          <div key={guide.title}>
            <h3>{guide.title}</h3>
            <h4>Written by {guide.author}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores laboriosam, totam illum et quam ex nihil incidunt atque
              obcaecati perferendis.
            </p>
          </div>
        ))}
    </GuidesWrapper>
  );
};

const GuidesWrapper = styled.div`
  max-width: 960px;
  margin: 40px auto;
  letter-spacing: 1px;
  line-height: 1.6em;
`;

export default Guides;
