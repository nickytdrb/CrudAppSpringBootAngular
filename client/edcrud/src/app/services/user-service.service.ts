import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;

  // to http einai to onoma ths metavlhths
  // to : shmainei oti meta apo auto akolouthei o typos tou antikeimenou
  // to HttpClient einai o typos ths metavlhths
  constructor(private http: HttpClient) { 
    this.userUrl = 'http://192.168.1.3:8080/users';
  }

  // oi methodoi pou tha kalesw meta wste na ferw tous xrhstes apo to back end 
  // kai na tous emfanisw sto table

  public findAllUsers(): Observable<User[]> {
    // prepei na ftiaksw mia klash pou na legetai user,
    // epd akrivws apo panw grafei<User[]>
    // to opoio einai array apo user(s)
    return this.http.get<User[]>(this.userUrl);
    // to .get einai tou HttpClient 
  }

  // To Observable einai san to promise,
  // edw apo katw, orizw th methodo.
  // Afou paw kai thn kalesw sto new-user.components.ts,
  // tha ths valw kai to subscribe (pou einai to antistoixo .then)
  public addNewUser(user: User) {
    return this.http.post<User>(this.userUrl, user);
    // san deutero orisma to post pairnei o,ti tha graftei sto body tou request,
    // to opoio einai ta stoixeia tou neou xrhsth
  }

}
