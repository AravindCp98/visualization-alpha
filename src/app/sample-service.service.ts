import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {
  subscribeFromWss() {
    const wss = 'wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD'
    const subject = webSocket(wss);
    return (subject)
  }

  constructor() { }

}
