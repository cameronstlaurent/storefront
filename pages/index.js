import {useState} from 'react';
import {useEffect} from 'react';
import PageTitle from "../components/PageTitle/PageTitle";
import {User} from '../components/User';
import {Button} from '../components/Button';


function Product({title, ...props}){
  return <li>${title}</li>
}

/*
    CRA version of data loading
    assessment 4
    loading data=====>api Firebase SDK ref, get(ref)
*/

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState([])
    useEffect(()=>{
      console.log("useEffect")
      async function loadExternalDataTheCRAWay(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await res.json()
        setUserData(data)
      }
      loadExternalDataTheCRAWay()
    },[])

  return (
    <>
      <PageTitle title="StoreFront" tagline="featured products"/>
      <div style={{textAlign:"center"}}>
      <Button style={{margin:"2rem 0 0",}} onClick={()=>setIsLoading(!isLoading)}>Get some data</Button>
      {
        isLoading && <p style={{padding:"1rem"}}>This Is My Output</p>  
      }
      </div>
      <main>
          {
            userData.map(({id, name, email, username}) => <User key={id} name={name} email={email} username={username}/>)
          }
      </main>
    </>
    )
}
