import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Samesocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Samesocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password</span>
                    <hr className="loginHr" />
                    <button className="loginRegisterButton">
                        Create a new account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
