import React from 'react'

function Child({setIsLoggedIn}) {

    function setLog(e){
            e.preventDefault();
            setIsLoggedIn(true);
            // console.log(e);
    }
  return (
    <div>
      <form onSubmit={setLog}>
        <label htmlFor="username" >Username</label>
        <input type="text" required/>
        <label htmlFor="password">Password</label>
        <input type="password" required/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default Child
