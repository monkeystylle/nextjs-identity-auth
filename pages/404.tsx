import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type Props = {};

const PageNotFound = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <PageWrapper>
      <h1>Oooops....</h1>
      <h2>that page cannot be found</h2>
      <h1>
        Go back to the{' '}
        <Link href="/">
          <HomePageLink>Homepage</HomePageLink>
        </Link>
      </h1>
    </PageWrapper>
  );
};

const HomePageLink = styled.a`
  text-decoration: underline;
  color: #4979ff;
  cursor: pointer;
`;

const PageWrapper = styled.div`
  height: 100%;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default PageNotFound;
