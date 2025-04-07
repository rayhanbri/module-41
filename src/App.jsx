
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'


const bottlesPromise = fetch('./bottle.json')
.then(res => res.json());

function App() {

  // in memory data 
  // const  waterBottle = [
  //   {id:1,name:'new nike bollte',price:250,color:'pink'}
  //   {id:2,name:'new nike bollte',price:250,color:'pink'}
  //   {id:3,name:'new nike bollte',price:250,color:'pink'}
  // ]

  // also fake data from gpt 
 

  return (
    <>
   
      <h1>Buy some awsome water Bottle</h1>
      <Suspense fallback={<h2>Bottles  are loading...</h2>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      
    </>
  )
}

export default App
