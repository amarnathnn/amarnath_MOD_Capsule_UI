import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSearchTechClick() {
    this.router.navigateByUrl("/searchtechnology");
  }

  getUserName(){
    return localStorage.getItem('username');
  }

}
