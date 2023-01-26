import react,{useState} from 'react'
import '../styles/globals.css'
import  { AppProps } from 'next/app'
import Footer from '../footerHEader/footer'
import Header from '../footerHEader/header'
import Link from 'next/link'
export default function App({ Component, pageProps, AppProps}) {
  let [routerPage,setrouterPage]=useState([{
    routerName:"Langano Net",
    onclick:true,
    id:1,
  },
  {
    routerName:"Recomanded Net",
    onclick:false,
    id:2,
  },
  {
    routerName:"Favorite Net",
    onclick:false,
    id:3,
  },
  {
    routerName:"Add Your Net",
    onclick:false,
    id:4,
  },
])
function listClicked(id){
  console.log(id)
  setrouterPage(ele=>ele.map(e=>{
    return e.id===id?{...e,onclick:true}:{...e,onclick:false}
  }))
}
console.log(routerPage)
  return (
    <div >
        <Header/>
        <div>    
        <nav>
          {routerPage.map(e=>{
            let name=e.routerName.split(" ")[0]
            let lowerName=name.toLowerCase()
            return <div  key={e.id} 
            style={{border:e.onclick?"2px dashed brown":"none",padding:"5px" }}><Link href={`/${e.id==1?"":lowerName}`} onClick={()=>listClicked(e.id)}>{e.routerName}</Link></div>
          })}  
       </nav>
        </div>
        <Component {...pageProps} />
    { /**   <footer>
           this is a test footer from _app so  as to check global.cs 
        </footer>  */}
        <Footer/>

      
        
    </div>
  )
}
