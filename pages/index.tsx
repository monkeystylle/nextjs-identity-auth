import styled from 'styled-components';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gaming Vibes | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <HomeWrapper>
        <h2>Welcome to Gaming Vibes</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            deleniti rem aspernatur odit hic autem neque repellat alias? Debitis
            veniam inventore ipsum similique quos animi ipsa asperiores fuga
            dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis deleniti rem aspernatur odit hic autem neque repellat
            alias? Debitis veniam inventore ipsum similique quos animi ipsa
            asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis deleniti rem aspernatur odit hic autem
            neque repellat alias? Debitis veniam inventore ipsum similique quos
            animi ipsa asperiores fuga dolor id.
          </p>
        </div>
      </HomeWrapper>
    </>
  );
};

const HomeWrapper = styled.div`
  max-width: 760px;
  margin: 40px auto;
  letter-spacing: 1px;
  line-height: 1.6em;
`;

export default Home;
