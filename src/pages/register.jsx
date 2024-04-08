import React from 'react'

const register = () => {
  return (
    <div style={{padding: '5% 10%', backgroundColor: '#fff7ed'}}>
      <h1 className="explore text-center mb-5">Sign in to your account</h1>

<div className='form'>
      <input className='input-email mt-4' placeholder="Email Address" type="email" name="email" />
      <input className='input-password' placeholder='Password' type="password" name="password" />
      <button className='butt1 mt-5'>Sign in</button>
      </div>

      <div className='text-center mt-5 account'>
        <span>Don't have an account? </span>
        <span className='create'>Create one now</span>
      </div>
    </div>
  )
}

export default register