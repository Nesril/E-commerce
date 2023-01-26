import React from 'react'
import styles from '../styles/header.module.css'
import Image from "next/image"
export default function header() {
  return (
    <div className={styles.upper}>
       <div> <Image src='/leaf.jpg' alt='loading' height={80} width="100"/></div>  
       <h1>Tour Network</h1>
       <div> <Image src='/dna.jpg' alt='loading' height={80} width="100"/></div>  
    </div>
  )
}
  