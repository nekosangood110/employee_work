import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //全てのmessageを持っておくため
  messages: string[] = [];　

  //受け取ったmessageを追加
  add(message: string) {
    this.messages.push(message);
  }
  //自身のmessagesプロパティをリセット
  clear() {
    this.messages = [];
  }
}
