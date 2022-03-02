import {NextApiResponse, NextApiRequest} from 'next';

export default (request:NextApiRequest, response:NextApiResponse) => {
  const users = [
    {id: 1, name: 'wilson'},
    {id: 2, name: 'sara'},
    {id: 3, name: 'manoel'},
  ]
  return response.json(users);
}