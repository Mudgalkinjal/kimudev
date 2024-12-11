import React from 'react'

const SignIn: React.FC = () => (
  <div>
    <h1>Sign In</h1>
    <form>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  </div>
)

export default SignIn
