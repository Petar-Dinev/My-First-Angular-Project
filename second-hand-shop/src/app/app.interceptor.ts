import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { UserService } from "./user/user.service";

const {apiUrl} = environment
@Injectable()

class AppInterceptor implements HttpInterceptor {
    constructor(private userService: UserService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.userService.token;
        if(token) {
            if(req.url.startsWith('/api')) {
                req = req.clone({
                    url: req.url.replace('/api', apiUrl),
                    setHeaders: {
                        'X-Authorization': token,
                        'Content-Type': 'application/json'
                    }
                })
            }
        } else {
            if(req.url.startsWith('/api')) {
                req = req.clone({
                    url: req.url.replace('/api', apiUrl),
                })
            }
        }

        return next.handle(req)
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}