import React, { useEffect } from "react";
import "./Footer.css";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Slider } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

function Footer(spotify) {
  console.log("This is spotify >>>", spotify);
  const [{ token, item, playing }, dispatch] = useStateValue();
  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://image.shutterstock.com/image-vector/vector-logo-music-260nw-397640164.jpg"
          alt=""
        />
        {item ? (
          <div className="music_detail">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(",")}</p>
          </div>
        ) : (
          <div className="music_detail">
            <h4>No song is playing</h4>
            <p>No singer</p>
          </div>
        )}
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_icon" />
        <SkipPreviousIcon className="footer_icon" onClick={skipPrevious} />
        {playing ? (
          <PlayCircleOutlineIcon
            fontSize="large"
            className="footer_icon"
            onClick={handlePlayPause}
          />
        ) : (
          <PauseCircleOutlineIcon
            fontSize="large"
            className="footer_icon"
            onClick={handlePlayPause}
          />
        )}

        <SkipNextIcon className="footer_icon" onClick={skipNext} />
        <RepeatIcon className="footer_icon" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
