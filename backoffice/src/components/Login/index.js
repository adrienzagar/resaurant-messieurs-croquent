//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import brand from '../../assets/images/logo-brand.png';
import './styles.scss';
import { setPasswordValue, setUsernameValue } from '../../actions/log';

//! == Composant ==
const Login = ({ getLogin, username, password, setPasswordValue, setUsernameValue }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('cocuou')
        getLogin()
    };

    const hangleUsernameOnChange = (e) => {
        setUsernameValue(e.target.value)
    }
    const handlePasswordOnChange = (e) => {
        setPasswordValue(e.target.value)
    }
    return (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <img src={brand} alt="brand" className="login__brand"/>
                <input 
                    value={username}
                    onChange={hangleUsernameOnChange} 
                    type="text" 
                    className="login__email" 
                    placeholder="User"
                />
                <input 
                    value={password}
                    onChange={handlePasswordOnChange} 
                    type="password" 
                    className="login__password" 
                    placeholder="Password"
                />
                <p className="login__error">Votre nom d'utilisateur ou votre mot de passe est incorrecte</p>
                <button type="submit" className="login__submit" >Se connecter</button>
            </form>
        </div>
    );
};

//! == Export ==
export default Login;
