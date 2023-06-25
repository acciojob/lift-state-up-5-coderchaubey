import React,{useState} from 'react'
import Child from './Child';

function Parent() {

const [isLoggedIn,setIsLoggedIn] = useState(false);

console.log(isLoggedIn);
  return (
    
    <div>
        <h1>Parent Component</h1>
        {
            isLoggedIn ? <p>You are logged In!</p> : <Child setIsLoggedIn={setIsLoggedIn} />
        }
      
    </div>
  )
}

export default Parent
