import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@mui/material'
import { Recomanded } from '../../component/Api/recomendedata'
import styles from "../../styles/recomanded.module.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link' 
export default function about() {
  let [recomandedData,setRecomandedData]=useState(Recomanded)
  function favorited(id){
    setRecomandedData(ele=>ele.map(e=>{
      return e.id===id?{...e,fav:!e.fav}:{...e}
    }))
  }

  
  return (
    <div >
        <Head>
       <title>First Next Task | recomanded</title>
       <meta name='Keywords' content="nextsample"/>
    </Head>
      <div className={styles.container}>
          {recomandedData.map(e=>{
            return (
              <div key={e.id} className={styles.cards} >
               <div  className={styles.card}>
                   <div>
                     <div className={styles.image}>
                      <Image src={e.image}  alt='loading' 
                      width={300} height={300}/></div>
                     <div>{e.name}</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                       <div><Link href={`/recomanded/${e.name}`}><Button >Show Details</Button></Link></div>
                      
                       <FavoriteIcon  onClick={()=>favorited(e.id)} style={{color:e.fav?"red":"white"}}/>
                     </div>
               </div>
             </div>
            )
          })}
      </div>
    </div>
  )
}
