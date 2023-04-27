/* eslint-disable @angular-eslint/use-lifecycle-interface */
// crud.service.ts
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, Observable, Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class Api implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  get<T>(url: string): Observable<any> {
    return this.http.get<T>(`${API_URL}/${url}`).pipe(
      takeUntil(this.unsubscribe$),
      map((response: any) => response),
      catchError((error: any) => {
        throw new HttpErrorResponse(error);
      })
    );
  }


  post(url: string, data: any): Observable<any> {
    return this.http.post(`${API_URL}/${url}`, data).pipe(
      takeUntil(this.unsubscribe$),
      map((response: any) => response),
      catchError((error: any) => {
        throw new HttpErrorResponse(error);
      })
    );
  }

  update(url: string, data: any): Observable<any> {
    console.log('url', url);
    return this.http.put(`${API_URL}/${url}`, data).pipe(
      takeUntil(this.unsubscribe$),
      map((response: any) => response),
      catchError((error: any) => {
        throw new HttpErrorResponse(error);
      })
    );
  }

  patch(url: string, data: any): Observable<any> {
    return this.http.patch(`${API_URL}/${url}/${data.id}`, data).pipe(
      takeUntil(this.unsubscribe$),
      map((response: any) => response),
      catchError((error: any) => {
        throw new HttpErrorResponse(error);
      })
    );
  }

  delete(url: string, data: any): Observable<any> {
    return this.http.delete(`${API_URL}/${url}/${data.id}`).pipe(
      takeUntil(this.unsubscribe$),
      map((response: any) => response),
      catchError((error: any) => {
        throw new HttpErrorResponse(error);
      })
    );
  }
}
