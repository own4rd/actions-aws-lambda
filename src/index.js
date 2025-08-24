import { v4 as uuidv4 } from 'uuid';

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello Lambda!!", id: uuidv4() }),
  };
};
