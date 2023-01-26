import Link from 'next/link'
import React from 'react'
import styles from '../styles/header.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Not_Found() {
 
  return (
    <div className={styles.error}>
        <div>ooops...</div>
        <h1>Server is Not Found</h1>
        <h3>Goto <button className={styles.button}><Link href="/">Home Page</Link></button></h3>
    </div>
  )
}
