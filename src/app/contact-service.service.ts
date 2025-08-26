import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
private apiUrl = 'http://localhost:9090/contactUs';
  
  constructor(private http: HttpClient) {}

  sendContactForm(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
