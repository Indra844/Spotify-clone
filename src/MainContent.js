import React from "react";
import "./MainContent.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function MainContent({ spotify }) {
  const [{ discover_Weekly }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZF1DXdSavJjIP6Fb`,
      })
      .then((response) => {
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
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
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
      });
  };

  return (
    <div className="mainContent">
      <Header spotify={spotify} />
      {discover_Weekly == null ? (
        console.log("wait")
      ) : (
        <div className="body_info">
          <img src={discover_Weekly.images[0].url} alt="" />
          <div className="body_infotext">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_Weekly.description}</p>
          </div>
        </div>
      )}
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon
            className="shuffle_Icon"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_Weekly == null
          ? console.log("wait")
          : discover_Weekly.tracks.items.map((item) => (
              <SongRow track={item.track} playSong={playSong} />
            ))}
      </div>
    </div>
  );
}

export default MainContent;
