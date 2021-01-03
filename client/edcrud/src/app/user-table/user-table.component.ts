import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  // mesa sthn klash pou eimai user-table.component.ts kalw th methodo pou eftiaksa sto user-service
  
  users: User[];

  // vazw apo katw to UserService gia na mporw na to xrhsimopoihsw meta
  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(){
    // to data apo katw tha mporouse na einai o,ti onoma thelw
    this.userService.findAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(user: User){
    // otan teleiwsei to delete, tha kanei apla redirect
    this.userService.deleteOneUser(user).subscribe(result => this.goToUserList())
  }

  goToUserList() {
    // vanilla JS:
    window.location.reload();
  }

}
