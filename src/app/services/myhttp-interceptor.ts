import {
    HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        const myhttpreq = req.clone({
            headers: req.headers.set('Content-Type', 'application/json;charset=utf-8').
            set('Accept','application/json').
            set('Accept-Language','zh-cn,zh;q=0.5')
        });
        return next.handle(myhttpreq);
    }
}