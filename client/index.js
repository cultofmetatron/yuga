'use strict'
/**
 * Yuga
 *
 * realtime transport backed by engine.io
 *
 */
import engineIO from 'engine.io-client';
import Rx from 'rx';

export default class Yuga {
  /*
  *  @options { hostname }
  */
  constructor(options) {
    let socket = engineIO(options.hostname)
    this._socket = Rx.Observable.fromEvent(socket, 'open')
      .map(() => socket)
      .publish();
  }
  /*
   * @param {  }
   * @return Observable([socket])
   *
   * attaches to a http server and initiates
   * websocket connectivity
   */
  getConnectionObservable() {
    return this._socket;
  }




}



