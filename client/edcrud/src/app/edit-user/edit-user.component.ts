import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void{
    // apo katw thelw na parw to id kai to username pou einai sto url
    // otan pathsw edit se enan sygkekrimeno xrhsth
    const user_id = this.route.snapshot.queryParams.userId;
    const user_name = this.route.snapshot.queryParams.username;
  
    // to data apo katw tha mporouse na einai o,ti onoma thelw
    this.userService.findOneUser(user_id, user_name).subscribe(data => {
      this.user = data;
    });
  }
  onSubmit(){
    this.userService.updateOneUser(this.user).subscribe(result => this.goToUserList()); 
  }

  goToUserList() {
    // to navigate kanei to redirect
    this.router.navigate(['/users']);
  }
  
  }


