import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from './api.service';


@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router, private zone: NgZone, private apiService : ApiService ) { }

  login(username: string, password: string) {
    return this.apiService.login(username, password);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('claims');
    localStorage.removeItem('privileges');
  }
}