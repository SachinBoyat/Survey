import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer360 } from '../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  servierUrl = Customer360.serverUrl;
  constructor(private httpClient: HttpClient) { }
  getDropDown(orgid: any): Observable<any> {
    return this.httpClient.get(`${this.servierUrl}/DropDown/GetDropDownByOrgId?organizationId=${orgid}`);
  }
  createDropdown(obj:any): Observable<any> {
    return this.httpClient.post(`${this.servierUrl}/DropDown/PostDropDown`,obj);
  }
}
