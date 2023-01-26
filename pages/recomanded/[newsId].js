import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function DetailedPage({Api}) {
    let router=useRouter()
    let id=router.query.newsId
    console.log(Api)
  return (
    <div>
        <h1>Detailed page</h1>
        <h3>Your in {id}</h3>        
        <h4>Back to <Link href="/recomanded"><button> Home </button></Link></h4>
    </div>
  )
}
