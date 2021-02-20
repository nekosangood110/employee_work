import { Component, OnInit } from '@angular/core';
import { Member } from '../member'; //.ts要らない
import { MEMBERS } from '../mock-members';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members = MEMBERS;  
  member: Member = {　//このMemberプロパティにMemberInterfaceを型として指定

    id: 1,
    name: '佐藤　秋'
  
  };
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
