import React, { Component, useState } from 'react'
const [socketConnect, SetWebscoket] = useState( WebSocket);

export default class service extends Component {
    public static async FecthLiveValue() {
        const socketUrl = "wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self";
        // SetWebscoket(new WebSocket(socketUrl))
        

}
}
