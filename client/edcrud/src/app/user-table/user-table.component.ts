import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  // mesa sthn klash pou eimai user-table.component.ts kalw th methodo pou eftiaksa sto user-service
  
  users: User[];

  // vazw apo katw to UserService gia na mporw na to xrhsimopoihsw meta
  constructor(private userService: UserService) { }

  ngOnInit(){
    // to data apo katw tha mporouse na einai o,ti onoma thelw
    this.userService.findAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
