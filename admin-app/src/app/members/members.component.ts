import { Component, OnInit } from '@angular/core';
import { Member } from '../member' //.ts要らない
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  member: Member = {　//MemberプロパティにMemberInterfaceを型として指定

    id: 1,
    name: '佐藤　秋'
  
  };
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
