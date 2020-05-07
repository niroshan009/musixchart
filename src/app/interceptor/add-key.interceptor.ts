import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

export class AddKeyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method === 'GET') {
      let apiKey: string = environment.apiKey;
      let clonedReqeust = req.clone({
        params: req.params.set('apikey', apiKey),
      });
      return next.handle(clonedReqeust);
    } else {
      return next.handle(req);
    }
  }
}
