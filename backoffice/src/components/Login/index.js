//! == Import : npm ==
import React, { useEffect } from 'react';

//! == Import : local ==
import brand from '../../assets/images/logo-brand.png';
import './styles.scss';

//! == Composant ==
const Login = ({ getLogin, errorLog, username, password, setPasswordValue, setUsernameValue }) => {
    useEffect (() => { document.title = "Messieurs Croquent || Back Office - Connexion" }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        getLogin();
    };

    const hangleUsernameOnChange = (e) => {
        setUsernameValue(e.target.value);
    }
    const handlePasswordOnChange = (e) => {
        setPasswordValue(e.target.value);
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
                    placeholder="Utilisateur"
                />
                <input 
                    value={password}
                    onChange={handlePasswordOnChange} 
                    type="password" 
                    className="login__password" 
                    placeholder="Mot de passe"
                />
                <p className={errorLog ? "login__error" : "login__error--none"}>Votre nom d'utilisateur ou votre mot de passe est incorrect</p>
                <button type="submit" className="login__submit" >Se connecter</button>
            </form>
        </div>
    );
};

//! == Export ==
export default Login;
