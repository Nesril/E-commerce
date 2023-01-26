import React from 'react'
export const getStaticPaths=async ()=>{
  let url="https://jsonplaceholder.typicode.com/users"
  let res=await fetch(url)
  let data=await res.json()

  const paths=data.map(e=>{
    return {
      params:{id:e.id.toString()}
    }
  })

  return {
    paths,
    fallback:false
  }
}
///////////////////
export const getStaticProps =async (context)=>{
 let id=context.params.id;
  let url="https://jsonplaceholder.typicode.com/users"
  let res=await fetch(url+id)
  let data=await res.json()

 return {
  props:{ Api:data }
 }
}
export default function Each({Api}) {
  console.log(Api)
  return (
    <div>
       details
    </div>
  )
}
