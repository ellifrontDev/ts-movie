import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const handleClick = (e: any) => {
        navigate(`/search/:${e}`)
    }
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <NavLink to={'/'}><img src={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`} width="150px" height="95px" alt=""/></NavLink>
                    <input className="header--input" type="text" placeholder="search..."
                           onChange={event => setValue(event.target.value)} onKeyDown={(event) => {
                        if (event.key === 'Enter') handleClick(value)
                    }}  />
                    <div >
                        <button style={{
                             borderRadius: "6px",
                            padding: '5px',
                            cursor: "pointer",
                        }}>dark mode</button>
                    </div>

                    <div className="header--nav">
                        <NavLink to={'/'}>Popular</NavLink>
                        <NavLink to={'/now-playing'}>Now-Playing</NavLink>
                        <NavLink to={'/top-rated'}>Top-Rated</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;