import React from 'react'
import './Body.css';
import Header from './Header.js';
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import SongRow from './SongRow.js';

function Body({ spotify }) {
    const [{ discover_weekly }] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img 
                    src={discover_weekly ? discover_weekly?.images[0].url : "https://newjams-images.scdn.co/v2/discover-weekly/zHx1JV1A6D4B206gLp7Vx1D6r-GBWqDvDXjcfAkG-38MpGs7sgVmptm65X6_X2c4GIrtMXp7VZniCc-n0TVE_EeMJ1KEyXALMNp6YFX0gbRiGkgv3LPNOH69sSaqBrCHiCVOwvoyiXWLJJ0VxM2eoXQlGwfFxD5wZHBkOw9PF-ew-UQy6v6nAV8YVZKtRFzeMujteo2ZTavXPO6gaUmhnQ==/NTI6OTQ6NjBUMTMtODAtMA==/default"}
                    alt="" 
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly ? discover_weekly?.description : '...'}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledOutlinedIcon className="body__shuffle" />
                    <FavoriteOutlinedIcon fontSize="large" />
                    <MoreHorizOutlinedIcon />
                </div>
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
