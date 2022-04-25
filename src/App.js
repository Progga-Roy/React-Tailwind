
import './App.css';
// import { useEffect, useState } from 'react';

// const singers = [
//   {name : "Sharaya Ghoshal" , profe: "Singer" , gander:"Female"},
//   {name : "Arijit Singh" , profe: "Singer" , gander:"Male"},
  

// ]

// function App() {
//   const nayoks = ["Shah Rukh Khan", "Amir Khan", "Salma Khan" ,"Alamgir" ,"Razzak"]
  
//   return (
//     <div classNameName='App'>
//       {
//        nayoks.map(nayok => <li>Name : {nayok}</li>)
//       }
//       {
//       nayoks.map(nayok => <Person name = {nayok}></Person>)
//       }
//       {
//         singers.map(singer => <Friend name = {singer.name}></Friend>)
//       }
//       {/* <Person name="Sachin tendulkar" profession2="Cricket Player"></Person> */}
//       {/* <Friend naam="ShaH Rukh Khan" profession1="Actor"></Friend> */}
    
//       {/* <Person name="Virat Koholi"  profession2="Cricket Player"></Person> */}
//       {/* <Friend naam ="Juhi Chawla"  profession1="Actress"></Friend> */}

//     </div>
//   )
// }
// function Person(props) {
//   console.log(props)
//   return (
//     <div classNameName='person'>
//       <h1>{props.name}</h1>
//       <p>{props.profession2}</p>
//     </div>
//   )
// }
// function Friend (props){
//   return (
//     <div classNameName='friend'>
//         <h1>{props.naam}</h1>
//       <p> : {props.profession1}</p>
//     </div>
//   )
// }

// second core concept

// function App(){
//   const products = [
//     {name: "Laptop",price: 61000},
//     {name: 'mobile',price: 29500},
//     {name: 'Watch',price: 10200},
//   ]
//   return (
//     <div classNameName='App'>
      
//   {
//     products.map(product => <Product name ={product.name} price={product.price}></Product>)
//   }
      
//     {/* <Product name="Laptop" price="61000"></Product>
//     <Product name="Phone" price="29500"></Product>
//     <Product name="Watch" price="10200"></Product> */}
    
//   </div>
//   )
// }
 
// function Product (props){
//   return (
//     <div classNameName='products'>
//       <h1>Name : {props.name}</h1>
//       <p>Price: {props.price} tk</p>

//     </div>
//   )
// }


// function App(){
//   return (
//     <div classNameName='App'>
//      <Counter></Counter>
//     </div>
//   )
// }
// function Counter (){
//   const [count,setCount] = useState(11)
//   const increaseCount =()=>setCount(count +1)
//   const decreaseCount =()=> setCount(count -1)
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

//    function SimpleUser (props){
//      return (
//        <div style={{border:'2px solid red',margin:'20px'}}>
//          <h3>Name : {props.name} </h3>
//          <p>Email : {props.email}</p>
//        </div>
//      )
//    }
//   function ExternalUsers(){
//     const [click,setClick] = useState(0)
//     const [users,setUsers]= useState([])
//     useEffect(()=>{
//       console.log('i am calling')
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//     },[])
//     console.log(click)
//      return (

//        <div>
          
//          <h2>External Users </h2>
//          <button onClick={()=>setClick(click+1)}>Click</button>
//          <NewUser></NewUser> 
//        <p>{users.length}</p>
//        {
//          users.map(user => <SimpleUser name ={user.name} email ={user.email}></SimpleUser>)
//        }
//        </div>
//      )
//    }
//    function NewUser(){
//      return(
//        <h1>I am new user</h1>
//      )
//    }
// function App () {

//   return (
//     <div classNameName='App'>
      
//      {/* <ExternalUsers></ExternalUsers> */}
  
//     <ExternalUsers></ExternalUsers>
//     <SimpleUser></SimpleUser>
//     </div>
//   )
  


// }

// export default App;
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

const App = () => {
  return (
    <div className='App'>
  <Navbar></Navbar>
    <Header></Header>
  <Pricing></Pricing>
    </div>
  );
};

export default App;