import { Injectable } from '@angular/core';
import { Contact } from './contacts';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) { }

  postContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.url, contact);
  }

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }

  deleteContact(contact: Contact): Observable<void> {
    return this.http.delete<void>(`${this.url}/${contact.id}`);
  }

  updateContact(contact: Contact): Observable<void> {
    return this.http.put<void>(`${this.url}/${contact.id}`, contact);
  }


}
