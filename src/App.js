import React, { useEffect } from 'react';
import './App.css';
import Login from './Login.js';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player.js';
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(null);
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token){
      // setToken(_token);
      spotify.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      }); 

      
    }

  }, [dispatch]);

  console.log(token);
  return (
    <div className="App">{token ? 
        <Player spotify={spotify} /> : 
        <Login />
      }
    </div>
  );
}

export default App;
