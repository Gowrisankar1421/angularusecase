import { Component } from '@angular/core';
import { UserserviceService } from './account/userservice.service';
import { CurrentuserService } from './currentuser.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gspbanking';
  currentUser;
  isLogin;
  constructor(private us:UserserviceService,private cs:CurrentuserService){
    this.currentUser=this.cs.getUserData();
    console.log(this.cs.getUserData());
    this.isLogin=this.cur();
    console.log(this.isLogin);
  }
  cur(){
    if(this.currentUser===null){
      return true;
    }
    else{
      return false;
    }
  }
}
