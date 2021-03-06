import React from 'react'
import './Footer.css';
import PlayCircleOutlineOutlined from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousOutlined from "@material-ui/icons/SkipPreviousOutlined";
import SkipNextOutlined from "@material-ui/icons/SkipNextOutlined";
import ShuffleOutlined from "@material-ui/icons/ShuffleOutlined";
import RepeatOutlined from "@material-ui/icons/RepeatOutlined";
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayOutlined from "@material-ui/icons/PlaylistPlayOutlined";
import VolumeDownOutlinedIcon from '@material-ui/icons/VolumeDownOutlined';
function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__AlbumLogo" 
                    src="https://upload.wikimedia.org/wikipedia/en/7/74/Usher_-_Confessions_album_cover.jpg" 
                    alt="Usher"
                />
                <div className="song__info">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleOutlined className="footer__green" />
                <SkipPreviousOutlined className="footer__icon" />
                <PlayCircleOutlineOutlined className="footer__icon" fontSize="large" />
                <SkipNextOutlined className="footer__icon"  />
                <RepeatOutlined className="footer__icon" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayOutlined />
                    </Grid>
                    <Grid item>
                        <VolumeDownOutlinedIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
