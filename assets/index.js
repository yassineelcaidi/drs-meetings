const url = new URL(location.href);

// Extract the room name from the pathname
const roomName = url.pathname.split('/').pop(); // Gets the last segment of the pathname

const roomUrl = new URL("https://datarockstars.whereby.com");
roomUrl.pathname = roomName; // Set the pathname to the room name
roomUrl.search = url.search;

const root = document.getElementById("root");
const whereby = document.createElement("whereby-embed");
whereby.setAttribute("room", roomUrl.href+"/"+roomName);
console.log(roomUrl.href+"/"+roomName)
whereby.setAttribute("minimal", true);
whereby.setAttribute("style", "height: 100%;");
root.appendChild(whereby);
