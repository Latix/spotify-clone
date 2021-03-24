import React from 'react'
import "./Header.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from "./DataLayer";

function Header() {
    const [{ user }] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchOutlinedIcon className="header__searchIcon" />
                <input type="text" placeholder="Search for Artists, Songs, Podcasts" />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="WC"/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
