import {NextApiResponse, NextApiRequest} from 'next';

// Possibilidades de autenticação
// JWT (Storage)
// Next Auth (Social)
// Cognito (aws), Auth8 - autenticacao as a service

export default (request:NextApiRequest, response:NextApiResponse) => {
  console.log(request.query)
  const users = [
    {id: 1, name: 'wilson'},
    {id: 2, name: 'sara'},
    {id: 3, name: 'manoel'},
  ]
  return response.json(users);
}

