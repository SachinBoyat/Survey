import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer360 } from '../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  servierUrl = Customer360.serverUrl;
  constructor(private httpClient: HttpClient) {}
  getDropDown(orgid: any): Observable<any> {
    return this.httpClient.get(`${this.servierUrl}/DropDown/GetDropDownByOrgId?organizationId=${orgid}`);
  }
  createDropdown(data: any): Observable<any> {
    return this.httpClient.post(`${this.servierUrl}/DropDown/PostDropDown`, data);
  }
  getSurveyByOrgId(orgid: string): Observable<any> {
    return this.httpClient.get(
      `${this.servierUrl}/PreviewSurvey/GetPreviewSurveyByOrganizationId?organizationId=${orgid}`
    );
  }
  postUpdateSurveyData(data: any): Observable<any> {
    return this.httpClient.post(`${this.servierUrl}/PreviewSurvey/createandUpdatePreviewSurvey`, data);
  }
}
