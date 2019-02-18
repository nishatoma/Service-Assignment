import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private usrService: UserService) {

  }

  ngOnInit() {
    this.activeUsers = this.usrService.activeUsers;
    this.inactiveUsers = this.usrService.inactiveUsers;
  }
}
