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
    let userId;
    let username;
    this.route.queryParams.subscribe(params => {
      userId = params.userId;
      username = params.username;
    })
    // to data apo katw tha mporouse na einai o,ti onoma thelw
    this.userService.findOneUser(user).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }
  }

}
