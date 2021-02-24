import { MemberDetailComponent } from './member-detail/member-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router' //Routesはinterface
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//route情報を定義
const routes: Routes =  [
  { path: '', redirectTo: '/dashborad', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: MemberDetailComponent},
  { path: 'members', component: MembersComponent } //path:urlのパス名 パスにアクセスした時に:後のcomponentを表示
];


@NgModule({
  // declarations: []使うcomponentをかく,
  imports: [
    RouterModule.forRoot(routes) //引数にroutes設定の情報を渡す アプリ全体のroutingを有効にする
  ],
  exports: [
    RouterModule //app.module.tsでroutingの機能を使用できるようにする設定
  ]
})
export class AppRoutingModule { }
