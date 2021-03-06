export const authEndpoint = "https://accounts.spotify.com/authorize";

var url = window.location.href;
var arr = url.split("/");
var url_result = arr[0] + "//" + arr[2];

const redirectUri = url_result + "/";

const clientId = "9b34e3f1c3c64ec285095849e5b37244";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
    return window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial, item) => {
                let parts = item.split('=');
                initial[parts[0]] = decodeURIComponent(parts[1]);

                return initial;
            }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;