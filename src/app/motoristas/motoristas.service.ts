import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Motoristas } from './motoristas';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  private apiURL = "http://localhost:8000/api/motoristas/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Motoristas[]> {
   return this.httpClient.get<Motoristas[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(person: Motoristas): Observable<Motoristas> {
   return this.httpClient.post<Motoristas>(this.apiURL, JSON.stringify(person), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id: number): Observable<Motoristas> {
   return this.httpClient.get<Motoristas>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:number, person: Motoristas): Observable<Motoristas> {
   return this.httpClient.put<Motoristas>(this.apiURL + id, JSON.stringify(person), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id: number){
   return this.httpClient.delete<Motoristas>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error: any) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}
