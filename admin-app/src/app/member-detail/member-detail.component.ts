import { MemberService } from './../member.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../member';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  @Input() member: Member;

  constructor(
    private router: ActivatedRoute, //urlパラメーターやハッシュフラグメントを取得
    private MemberService: MemberService,
    private location: Location　//ブラウザバックなどのブラウザ機能をangularを通して使う
    ) { }

  ngOnInit(): void {
    this.getMember();
  }

  getMember():void {
    const id = +this.router.snapshot.paramMap.get('id');
     //app.routing.moduleで定義してるurlパスのidをコンポーネントで取得
     //snapshotオブジェクトには直前のルート情報が含まれる
     //パラメーターが格納されているオブジェクトがparamMap
     //その中でidパラメーターを取得
     //+を付けて数字に変換 idを取得

     this.MemberService.getmember(id) //ここでserviceのデータを取りに行く呼び出し
     .subscribe(member => this.member = member);//取得した社員データが渡る
  }
  goBack(): void {
    this.location.back(); //historybackはrouter時は使用しない
  }

}
