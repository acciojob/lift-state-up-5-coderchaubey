import React,{useState} from 'react'
import Child from './Child';

function Parent() {
const [isLoggedIn,setIsLoggedIn] = useState(false);
console.log(isLoggedIn);
  return (
    <div>
        
        {
            isLoggedIn ? <div>You are logged In!</div> : <Child setIsLoggedIn={setIsLoggedIn} />
        }
      
    </div>
  )
}

export default Parent
