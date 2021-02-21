import { Component, OnInit } from '@angular/core';
import { Member } from '../member'; //.ts要らない
import { MemberService } from '../member.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members: Member[];
  selectedMember: Member;
  //DI
  constructor(private memberService: MemberService) { }


  //外部から(サーバーなど)取得したものはngOnInitで実行する
  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void  {
    this.selectedMember = member;
  }
  getMembers(): void {
    this.memberService.getMembers()//ngOninit 内で実行 //Obserbleではsubscribeメソッドが使用可
   .subscribe(members => this.members = members); //of関数で渡したmembers配列を受けとれる=> 自身のmembersプロパティにモックデータをセット
  }

}

