import '../styles/login.css';

export default function LogIn() {
    return(
        <div>
            <div className="containerLogin">
                <h3>LogIn</h3>
                <form className="formLogin">
                    <input className="login-input" type="text" placeholder="User" name="user" value="" />
                    <input className="login-input" type="password" placeholder="Password" name="password" value="" />
                    <div className="login-button-container">
                        <button className="login-button">LogIn</button>
                    </div>
                </form>
            </div>
        </div>
    )
}