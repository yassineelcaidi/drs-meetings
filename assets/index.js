const url = new URL(location.href);

// Get the room name from the URL parameters
const params = new URLSearchParams(url.search);
const roomName = params.get('room'); // Assuming the parameter is named 'room'

const roomUrl = new URL("https://datarockstars.whereby.com");
roomUrl.pathname = roomName ? roomName : ''; // Set the pathname to the room name if it exists
roomUrl.search = url.search;

const root = document.getElementById("root");
const whereby = document.createElement("whereby-embed");
whereby.setAttribute("room", roomUrl.href);
whereby.setAttribute("minimal", true);
whereby.setAttribute("style", "height: 100%;");
root.appendChild(whereby);
