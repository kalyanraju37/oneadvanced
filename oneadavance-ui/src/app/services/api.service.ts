import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class ApiService {

    constructor(private httpClient: HttpClient) { }

    login(username: any, password: any) {
        return this.httpClient.post<any>(environment.basepath + '/v1/users/signin', { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                //if (user && user.jwtToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    // localStorage.setItem('loggedInUser', user.userName);

                    // var decoded = jwt_decode(user.jwtToken);
                    // localStorage.setItem('claims', JSON.stringify(decoded));
                    // localStorage.setItem('privileges', JSON.stringify(decoded.scopes));
                //}
                return user;
            }));
    }

   



    

}