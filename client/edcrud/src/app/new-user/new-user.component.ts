import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  // sto new-user.component.html tou exw pei oti tha pairnei auto pou grafei o xrhsths
  // kai tha to vazei sto user.ts sto pedio user.username, firstName kok
  // kai epd to new-user.component.html einai sto idio component, to apo katw user
  // einai to user tou new-user.component.html
  // otan o xrhsths pathsei to submit, ta stoixeia pou exei symplhrwsei sth forma
  // pane kai mpainoune mesa sto user
  user: User;

  // vazw apo katw to UserService gia na mporw na to xrhsimopoihsw meta
  constructor(
    private userService: UserService,
    private router: Router
    ) {
    // gia na gemisw ton user me ta dedomena, prepei prwta na ton axrikopoihsw
    this.user = new User();
   }

  onSubmit() {
    // Prepei na kalesw to service ths angular, gia na kanw ena post request 
    // (to opoio tha exei ta stoixeia tou neou xrhsth) sth Spring.
    // Meta, to Spring tha asxolhthei me th vash.
    // to apo katw user einai to apo panw user, eks ou kai to this
    console.log(this.user);
    this.userService.addNewUser(this.user).subscribe(result => this.goToUserList());
    // edw apo panw, thelw me to pou prostethei o neos xrhsths,
    // na ginei redirect ston pinaka, o opoios tha exei olous tous xrhstes syn ton kainourgio

  }

  goToUserList() {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {

  }
}
