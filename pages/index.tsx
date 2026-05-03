import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/Main'
import Container from '@material-ui/core/Container'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stardust City</title>
        <meta name="description" content="Stardust City. A Galactic Economic Builder built with tokens and nodes." />
        <link rel="icon" href="/assets/icons/fedora.png" />
      </Head>
      <Main />
        </div>
  )
}

export default Home