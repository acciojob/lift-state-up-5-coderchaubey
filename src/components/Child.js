import React from 'react'

function Child({setIsLoggedIn}) {

    function setLog(e){
            e.preventDefault();
            setIsLoggedIn(true);
            // console.log(e);
    }
  return (
    <div>
      <form>
        <label htmlFor="username" >Username</label>
        <input type="text" required/>
        <label htmlFor="password">Password</label>
        <input type="password" required/>
        <button onClick={setLog}></button>
      </form>
    </div>
  )
}

export default Child
