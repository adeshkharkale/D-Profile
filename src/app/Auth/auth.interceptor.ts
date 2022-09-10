// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
// import { Router } from '@angular/router';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(private router: Router) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//      let original_token = localStorage.getItem('token')
//       let token = original_token?.replace(/['"]+/g,'')
//       const clonnedReq = request.clone({
//         headers: request.headers.set("Authorization", "bearer " + token)
//       });
//       return next.handle(clonnedReq).pipe(
//         tap(
//           success => { },
//           err => {
//             if (err.status == 401) {
//               localStorage.removeItem('token');
//               localStorage.removeItem('userRoleId');
//               localStorage.removeItem('regId');
//               localStorage.removeItem('expTime');
//               this.router.navigateByUrl('');
//             }
//           }
//         )
//       );
//   }
// }
