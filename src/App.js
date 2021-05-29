
import {Routes,Route,Link} from "react-router-dom"
import ShoeList from "./components/ShoeList"
import Shoe from "./components/Shoe"
import NotFound from "./components/NotFound"
import React from 'react'
import Navbar from "./components/Navbar"
import {useState} from "react"
import ShoeParent from "./components/ShoeParent"
function App() {
  
  const [backimage,setbackimag] = useState(true)
  return (



<div style={backimage?{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")` ,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',

    }:{backgroundColor:"white"}}>
      <Navbar/>
      <h1 style={{textAlign:"center",marginTop:100, fontWeight:1000,fontSize:50}}>Welcome To Shoe Commerce</h1>
      <br/>
      <br/>

    {backimage?
    <div  style={{textAlign:"center"}}>
      <Link to="shoeparent" style={{fontSize:30}} onClick={()=>setbackimag(!backimage)}>
        Choose Your Shoes</Link></div> 
        :
        <div  style={{textAlign:"center"}}>
        <Link to="/" style={{fontSize:30}} onClick={()=>setbackimag(!backimage)}>
        Home
        </Link>
        </div>
 }



<Routes>
  <Route exact path="/" />
  <Route path="shoeparent" element={<ShoeParent/>}>
<Route path="/" element={<ShoeList/>} />
<Route path=":shoename" element={<Shoe/>} />
</Route>

<Route exact path="*"  element={<NotFound/>}  />
</Routes>

</div>

  );
}

export default App;
