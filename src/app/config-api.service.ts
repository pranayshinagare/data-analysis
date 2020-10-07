import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// const stats = 'https://json-api-analysis.herokuapp.com/stats';
const posts = 'https://helping-hands-cmo.herokuapp.com/get_data/new_id_list/';
const stats = 'https://helping-hands-cmo.herokuapp.com/get_data/';
const covidApi = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise';
@Injectable({
  providedIn: 'root'
})

export class ConfigApiService {
  constructor(private http: HttpClient) { }

  getStats(selectedId): Observable<HttpResponse<[]>> {
    return this.http.get<[]>(
      `${stats}${selectedId}`, { observe: 'response' })
  }
  
  getPosts(): Observable<HttpResponse<[]>> {
    return this.http.get<[]>(
      posts, { observe: 'response' })
  }
}

