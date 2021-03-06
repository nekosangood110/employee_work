import { MessageService } from './message.service';
import { MEMBERS } from './mock-members'; //モックデータ
import { Member } from './member'; //interface
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService: MessageService) { }

  // Observableオブジェクトを返す(rxjs内のライブラリで提供 (ofも)) genericでmemberデータの配列
  //サーバーからデータ持ってくるときに使用
  // of関数　実行の際に渡した値をobservableに変換して返す
  //Observableはメソッドの戻り値　genericsにMemberInterfaceの配列指定

  //戻り値であるobservableはreturnでモックデータを持つ　それを取り出すのがsubscribe

  getMembers(): Observable<Member[]> {
    this.messageService.add('MemeberService: 社員一覧データを取得しました') //message.service.tsのmessage[]に追加
    return of(MEMBERS);
  }

  getmember(id: number): Observable<Member> {
    this.messageService.add(`MemberService: 社員データ(id=${id}を取得しました`);
    return of(MEMBERS.find(member => member.id === id))
  }
  //配列に対してのfind ===がマッチするものを一つだけ取得している
}

