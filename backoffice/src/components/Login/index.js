//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import brand from '../../assets/images/logo-brand.png';
import './styles.scss';

//! == Composant ==
const Login = ({ getConnect }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleConnect = () => {
        getConnect();
    }
    return (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <img src={brand} alt="brand" className="login__brand"/>
                <input type="email" className="login__email" placeholder="User"/>
                <input type="password" className="login__password" placeholder="Password"/>
                <button type="submit" className="login__submit" onClick={handleConnect}>Se connecter</button>
            </form>
        </div>
    );
};

//! == Export ==
export default Login;
