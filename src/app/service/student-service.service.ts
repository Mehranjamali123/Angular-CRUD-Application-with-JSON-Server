import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  url ="http://localhost:3000/Student";
  constructor(private http:HttpClient) { }

  addStudent(data:any){
    return this.http.post(this.url, data)
  }
}
