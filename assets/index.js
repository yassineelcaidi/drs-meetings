const url = new URL(location.href)
console.log(url)
const roomUrl = new URL("https://funtimes.whereby.com")
roomUrl.pathname = url.pathname
roomUrl.search = url.search

const root = document.getElementById("root")
const whereby = document.createElement("whereby-embed")
whereby.setAttribute("room", roomUrl.href)
whereby.setAttribute("minimal", true)
whereby.setAttribute("style", "height: 100%;")
root.appendChild(whereby)
