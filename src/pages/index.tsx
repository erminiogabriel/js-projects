import Head from 'next/head';
import styles from '@/styles/Home.module.css';
// import About from '@/components/sections/about';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';
import Work from '@/components/sections/work';
import Navbar from '@/components/navbar';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Erminio Digital Footprint</title>
        <meta name="description" content="Gabriel Erminio Machado Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
          <About />

          <Experience />

          <Work />

        <Contact/>
      </main>
    </>
  );
}
