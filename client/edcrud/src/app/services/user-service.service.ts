import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private userUrl: string;

  // to http einai to onoma ths metavlhths
  // to : shmainei oti meta apo auto akolouthei o typos tou antikeimenou
  // to HttpClient einai o typos ths metavlhths
  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://192.168.1.3:8080/users';
    this.userUrl = 'http://192.168.1.3:8080/user';
  }

  // oi methodoi pou tha kalesw meta wste na ferw tous xrhstes apo to back end 
  // kai na tous emfanisw sto table

  public findAllUsers(): Observable<User[]> {
    // prepei na ftiaksw mia klash pou na legetai user,
    // epd akrivws apo panw grafei<User[]>
    // to opoio einai array apo user(s)
    return this.http.get<User[]>(this.usersUrl);
    // to .get einai tou HttpClient 
  }

  // To Observable einai san to promise,
  // edw apo katw, orizw th methodo.
  // Afou paw kai thn kalesw sto new-user.components.ts,
  // tha ths valw kai to subscribe (pou einai to antistoixo .then)
  public addNewUser(user: User) {
    return this.http.post<User>(this.usersUrl, user);
    // san deutero orisma to post pairnei o,ti tha graftei sto body tou request,
    // to opoio einai ta stoixeia tou neou xrhsth
  }

  // to Observable, pou einai san promise, to vazoume epd den kseroume pote
  // tha teleiwsei h syndesh me to back, opote theloume auto na ginei asygxrona
  // o,ti tou valw mesa sto subscribe tha perimenei na ektelestei.
  // to subscribe to vazw ekei pou kalw th methodo 
  public findOneUser(user_id: string, user_name: string): Observable<User> {
    // auth h methodos ousiastika kanei ena get sto /user?userId=3&username=dima
  
    return this.http.get<User>(this.userUrl + `?userId=${user_id}&username=${user_name}`
        // sto user service vazw ta panta opws einai grammena sto back
        // otan kanw http get, milaw me to back end
        // mesa sto params mporoume na valoume mono String, opote paw kai metatrepw 
        // to userId se String
      );
  }

  public updateOneUser(user: User) {
    return this.http.put<User>(this.userUrl, user);
  }

  public deleteOneUser(user: User){
    return this.http.delete(this.userUrl + `?userId=${user.userId}&username=${user.username}`);
  }

}
