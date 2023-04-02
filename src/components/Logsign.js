import React from 'react'
import '../logsign.css'

export const Logsign = (props) => {
    const { email, setEmail, password, setPassword, Login, signup, error, hasAccount, setHasAccount } = props;
    const width = {
        width: "100%",
        height: "35vh"
    }
    const color = {
        backgroundColor: "#212E55",
    }
    const submit = (e) => {
        e.preventDefault();
    }
  return (
    <main>
        <section className="background-image">
            <img src="assests/cycle.svg" style={width} alt="" />
        </section>
        <section className="take-care-form">
            <h1>TAKE CARE</h1>
            <form onSubmit={submit} id="loginForm" action="">
                <p><img src="assests/mail.svg" alt=""/><input type="mail" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="alma.lawson@example.com"/></p>
                <p><img src="assests/password.svg" alt=""/><input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="********"/></p>
                <h4 id="error">{error}</h4>
                <button id="login-button" onClick={Login}>Login</button>
                <button id="signup-button" onClick={signup} style={color}>Signup</button>
            </form>
        </section>
    </main>
  )
}

