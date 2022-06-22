import React from 'react';
import Head from 'next/head';

type Props = {};

const about = (props: Props) => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>about</div>
    </>
  );
};

export default about;
