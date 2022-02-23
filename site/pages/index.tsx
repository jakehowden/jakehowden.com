import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hex from './hex'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jake Howden</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <Hex></Hex>
      </main>
    </div>
  )
}

export default Home
