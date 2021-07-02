import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class JwtInterceptorService implements HttpInterceptor{
    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        if(localStorage.getItem('currentUser')){
            let currentUser:any=localStorage.getItem('currentUser');
            currentUser=JSON.parse(currentUser!);
            if(currentUser && currentUser.token){
                request=request.clone({
                    setHeaders:{
                        'x-access-token':`${currentUser.token}`
                    }
                });
            }
        }
        return next.handle(request);
    }
}





