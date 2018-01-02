import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Book {
  title: string;
  author: string;
}

@Injectable()
export class MongooseService {

  constructor(private http: HttpClient) { }

  // GET ALL BOOKS
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('api/book');
  }

  // GET A BOOK
  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`api/book/${id}`);
  }

  // SAVE A BOOK
  insertBook(book: Book): Observable<Book> {
    return this.http.post<Book>('api/book', book);
  }

  // UPDATE A BOOK
  updateBook(id: string, book: Book): Observable<void> {
    return this.http.put<void>(`api/book/${id}`, book);
  }

  // DELETE A BOOK
  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`api/book/${id}`);
  }

}
