import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pet } from './pet';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  public petsUrl = 'http://localhost:1970'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor (public http: HttpClient) { }

  handleError (operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.log(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result);
    };
  }

  getPets (): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl)
      .pipe(
        tap(() => console.log('pets fetched')),
        catchError(this.handleError('getPets', []))
      );
  }

  getPet (id: number): Observable<Pet> {
    const url = `${this.petsUrl}/detail?id=${id}`;

    return this.http.get<Pet>(url)
      .pipe(
        tap(() => console.log(`fetched pet ${id}`)),
        catchError(this.handleError(`getPet id=${id}`, []))
      );
  }
}
