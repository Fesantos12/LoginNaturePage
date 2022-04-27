import React from 'react';

import { Link } from 'react-router-dom'

const HeaderLogin = () => {
    return (
        <div className="HeaderContainer">
            <Link to="/" className="Logo">
                ProNature
            </Link>
        </div>
    )
}

export default HeaderLogin;