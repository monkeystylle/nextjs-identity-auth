import { Handler } from '@netlify/functions';

const handler: Handler = async () => {
  console.log('function ran');

  const data = {
    name: 'mario',
    age: 35,
    job: 'plumber',
  };

  //return response browser
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };
