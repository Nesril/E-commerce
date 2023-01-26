import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div>
    <Head>
       <title>First Next Task | Home</title>
       <meta name='Keywords' content="nextsample"/>
    </Head>
    <div className={styles.container}>
       <div className={styles.welcme}>          
           <h1>Wellcome to</h1>
           <h2>Langano Net</h2>
       </div>
        <div className={styles.image}>
            <Image src="/tree.jpg" alt='loading'
              height={400} width="500"/></div>
          <div >
             <div>
             </div>
          </div>
     </div>
     </div>
  )
}
