import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JWTTokenService {

  jwtToken!: string;
  decodedToken!: { [key: string]: string };

  constructor() {
  }

  // setToken(token: string) {
  //   if (token) {
  //     this.jwtToken = token;
  //   }
  // }

  // decodeToken() {
  //   if (this.jwtToken) {
  //     this.decodedToken = jwt_decode(this.jwtToken);
  //   }
  // }

  // getDecodeToken() {
  //   return jwt_decode(this.jwtToken);
  // }

  // getUser() {
  //   this.decodeToken();
  //   return this.decodedToken ? this.decodedToken.DisplayName : null;
  // }

  // getEmailId() {
  //   this.decodeToken();
  //   return this.decodedToken ? this.decodedToken.Email : null;
  // }

  // getExpiryTime() {
  //   this.decodeToken();
  //   return this.decodedToken ? this.decodedToken.exp : null;
  // }

  // isTokenExpired(): boolean {
  //   const expiryTime: string | null = this.getExpiryTime();
  //   if (expiryTime) {
  //     return ((1000 * Number(expiryTime)) - (new Date()).getTime()) < 5000;
  //   } else {
  //     return false;
  //   }
  // }
  // set(key: string, value: string) {
  //   localStorage.setItem(key, value);
  // }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}


