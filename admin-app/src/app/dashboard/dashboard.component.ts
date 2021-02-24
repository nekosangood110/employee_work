import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member }from '../member' //interface

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  members: Member[] = [];
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }
  getMembers():void {
    this.memberService.getMembers()
    .subscribe(members => this.members = members.slice(1, 5));
  } //社員一覧を取得
  //constructorで自身の変数定義してるからthis
   //Observable
}
