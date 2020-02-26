import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  public userData: User;
  constructor(private user: UserService) {    
   }

  ngOnInit() {
    let username = localStorage.getItem('username');  
    this.user.getUserById(username).subscribe((value: User) => {      
      this.userData = value;
      //console.log(this.userData);
    });
  }

}
