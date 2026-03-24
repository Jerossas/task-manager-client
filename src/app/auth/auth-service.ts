import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInRequest } from './models/sign-in-request.model';
import { SignUpRequest } from './models/sign-up-request.model';
import { TokenResponse } from './models/token-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private url: string = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  signUp(request: SignUpRequest): Observable<void> {
      return this.http.post<void>(`${this.url}/sign-up`, request);
  }

  signIn(request: SignInRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.url}/sign-in`, request);
  }

  signOut(): Observable<void> {
    return this.http.post<void>(`${this.url}/sign-out`, {});
  }
}
