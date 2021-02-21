import { MEMBERS } from './mock-members';
import { Member } from './member';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  // Observableオブジェクトを返す(rxjs内のライブラリで提供 (ofも)) genericでmemberデータの配列
  // of関数　実行の際に渡した値をobservableに変換して返す
  getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }
}
