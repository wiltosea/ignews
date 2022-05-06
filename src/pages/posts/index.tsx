import { GetStaticProps } from "next";
import Head from "next/head";
import {getPrismicClient} from '../../services/prismic';
import Prismic from '@prismicio/client'
import {RichText} from 'prismic-dom'

import styles from './styles.module.scss';
import Link from "next/link";

interface Posts {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps{
  posts: Posts[];
}

export default function Posts({posts}:PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          { posts.map(({slug, title, excerpt, updatedAt}) => (
            <Link href={`/posts/${slug}`} key={slug}>
            <a>
              <time>{updatedAt}</time>
              <strong>{title}</strong>
              <p>{excerpt}</p>
            </a>
            </Link>
          ))}
        </div>
      </main>  
    </>
  )
}

export const getStaticProps:GetStaticProps = async () =>{
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'publication')
  ],{
    fetch: ['publication.title','publication.content'],
    pageSize: 10,
  }
  )

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph').text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }
  })
  return {
    props: {posts}
  }

}

