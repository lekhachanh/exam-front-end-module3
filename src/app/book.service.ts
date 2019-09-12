import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Book} from './Book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Book[]> {
    const url = `${this.apiUrl}/books`;
    return this.http.get<Book[]>(url);
  }

  getDetail(id: number): Observable<Book> {
    const url = `${this.apiUrl}/books/${id}`;
    return this.http.get<Book>(url);
  }

  add(book: Book) {
    const url = this.apiUrl + '/books';
    return this.http.post(url, book);
  }

  delete(id: number) {
    const url = this.apiUrl + '/books/' + id;
    return this.http.delete(url);
  }

  edit(id: number, book: Book): Observable<Book> {
    const url = this.apiUrl + '/books/' + id;
    return this.http.put<Book>(url, book);
  }
}
