import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  userInfos : any = [];

  constructor(private testService : TestService) {
    
  }
  ngOnInit() : void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.testService.getAllUsers().subscribe((res)=> {
      this.userInfos = res;
      console.log(this.userInfos)
    })  
  }
}
