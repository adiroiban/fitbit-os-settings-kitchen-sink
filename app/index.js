import document from "document";
import { peerSocket } from "messaging";

let log = console.log

//
// ------------- UI handling -------------
//

// Where time is displayed.
let connection_ui = document.getElementById('connection-closed')
let title = document.getElementById("output");
let body = title.getElementById("copy");


// ----------- Companion messaging -------------

// Message is received from the companion
peerSocket.onmessage = event => {
    log(`App received: ${JSON.stringify(event)}`);
    title.text = event.key;
    body.text = JSON.stringify(event.value);
};

let connected = false
// Ready to communicate with the companion.
peerSocket.onopen = () => {
    log("App Socket Open")
    connected = true
    connection_ui.style.display = 'none'
};

// Communication with the companion was closed.
peerSocket.onclose = () => {
    log("App Socket Closed")
    connected = false
    connection_ui.style.display = 'inline'
};

// Failed to send a message to the companion.
peerSocket.onerror = (error) => {
    connected = false
    log("App socket error: " + error.code + " - " + error.message)
}
