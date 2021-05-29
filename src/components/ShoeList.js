import React from 'react'
import shoelist from "./ShoeData"
import {Link} from "react-router-dom"

export default function ShoeList() {



return (
<div>   
   {   Object.entries(shoelist).map(([key,value])=>{

        const {name,img} = value;
            return(
                <div style={{textAlign:"center",marginTop:35}}>
                    <br/>
                    <img src={img} alt={{name}}></img>
                    <br/>
                    <Link to={`/shoeparent/${key}`}>
                    <h1>{name}</h1>
                    </Link>
                    
<hr/>
                </div>
            
        )



    })}  
</div>
        
    )

}
