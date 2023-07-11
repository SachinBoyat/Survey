import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer360 } from '../constants';
import { Observable, map, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const USER_KEY = 'token';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  refreshToken(): Observable<any> {
    return this.httpClient.get(`${this.servierUrl}/User/GetRefreshToken?Email=${this.getEmailId()}`)
      .pipe(map((data) => {
        this.settoken(data);
        this.isloggedIn = true;
      }))
  }

  private isloggedIn: boolean;

  servierUrl = Customer360.serverUrl;
  constructor(private httpClient: HttpClient) {
    this.isloggedIn = false;
  }

  registerUser(data: any): Observable<any> {
    return this.httpClient.post(`${this.servierUrl}/Organization/CreateOrganizationAndUser`, data);
  }
  forgotPassword(email:string): Observable<any> {
    return this.httpClient.get(`${this.servierUrl}/User/ForgetPassword?email=${email}`);
  }
  loginUser(data: any): Observable<any> {
    return this.httpClient.post(`${this.servierUrl}/User/Login`, data)
      .pipe(tap((data:any) => {
        if (data?.token) {
          this.settoken(data);
          this.isloggedIn = true;
        }
      }))
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  decodeToken() {
    if (this.getoken) {
      return helper.decodeToken(this.getoken());
    }
  }
  public getoken(): any {
    return window.sessionStorage.getItem(USER_KEY);

  }
  getUser() {
    this.decodeToken();
    return this.decodeToken() ? this.decodeToken().DisplayName : null;
  }

  getEmailId() {
    this.decodeToken();
    return this.decodeToken() ? this.decodeToken().Email : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodeToken() ? this.decodeToken().exp : null;
  }
  // isAdminUser():boolean {
  //     if (this.userName=='Admin') {
  //         return true; 
  //     }
  //     return false;
  // }

  isTokenExpired(): boolean {
    const expiryTime: string | null = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * Number(expiryTime)) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }

  public settoken(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user.token));
  }
}
