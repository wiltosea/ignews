import Prismic from '@prismicio/client'

export function getPrismicClient(req?:unknown){
  const prismic = Prismic.client(
    process.env.PRISMIC_ENDPOINT,
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    }
    )
    return prismic;
}
  
// MYOLDTODO:
// import * as prismic from '@prismicio/client'

// export const ignews = 'ignews-wil';
// const endpoint = prismic.getEndpoint(ignews)

// export const client = prismic.createClient(endpoint, {
//   accessToken: 'process.env.PRISMIC_ACCESS_TOKEN',
//   routes: [
//     {
//       type: 'page',
//       path: '/:uid',
//     },
//   ],
// });