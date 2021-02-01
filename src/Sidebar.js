import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SidebarOptions from './SidebarOptions';
import {useStateValue} from './StateProvider';

function Sidebar() {

    const [{ playlists },dispatch] = useStateValue();
    console.log("Here is the playlist=",playlists)

    return (
        <div className="sidebar">
            <img 
            className="sidebar_logo"
            src="https://www.basspromotions.com/wp-content/uploads/2019/05/Spotify_Logo_RGB_White.png" alt="" />

            <div className="sidebar_option">
                <HomeIcon fontSize="large"/>
                <h4>Home</h4>
            </div>
            <div className="sidebar_option">
                <SearchOutlinedIcon fontSize="large"/>
                <h4>Search</h4>
            </div>
            <div className="sidebar_option">
                <LibraryMusicIcon fontSize="large"/>
                <h4>Your Library</h4>
            </div>
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <div className="sidebar_option">
                <AddBoxIcon className="add_box" />
                <h4>Create Playlist</h4>
            </div>
            <div className="sidebar_option">
                <FavoriteIcon className="liked_box"/>
                <h4>Liked Songs</h4>
            </div>
            <hr />
            {playlists.length==0?(
                console.log("wait")
            ):(
                playlists.items.map((playlist)=>(
                    <SidebarOptions title={playlist.name} />
                ))
            )}
        </div>
    )
}

export default Sidebar
