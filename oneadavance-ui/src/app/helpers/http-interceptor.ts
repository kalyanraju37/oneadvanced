import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

declare var swal: any;
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.headers.has('Content-Type') && !localStorage.getItem('file')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        localStorage.removeItem('file');
        if (localStorage.getItem('token')) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token')) });
        }
        document.getElementById("spinner").classList.add("show");
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if(event instanceof  HttpResponse) {
                    document.getElementById("spinner").classList.remove("show");
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                document.getElementById("spinner").classList.remove("show");
                if (error.status == 401) {
                    const self = this;
                    swal({
                        title: "Session Expired, Please log in again.",
                        icon: 'error',
                        buttons: {
                            delete: 'Ok'
                        }
                    }).then(function (willDelete) {
                        if (willDelete) {
                            localStorage.clear();
                            self.router.navigate(['/login']);
                        }
                    });
                }
                return throwError(error);
            }));
    }
}