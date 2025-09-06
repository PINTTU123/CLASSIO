import { ApiResponse } from './reponse/ApiResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
private apiUrl = 'https://classiointerior.com/arch/classio/api/v1/save/contactUs';
  
  constructor(private http: HttpClient) {}

  sendContactForm(payload: any): Observable<any> {
    return this.http.post<ApiResponse<any>>(this.apiUrl, payload);
  }
}
