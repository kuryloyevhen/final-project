import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getUser(){
    return this.http.get("http://localhost:3000/users");
  }


  addUser(firstname, lastname, newEmail, newPassword){
    let data = {
      "fullname": firstname + " " + lastname,
      "email": newEmail,
      "password": newPassword
    };
    return this.http.post("http://localhost:3000/users", data);
  }


  getCityList(){
    return this.http.get("http://localhost:3000/cities");
  }

  addCity(data){
    return this.http.post("http://localhost:3000/cities/", data);
  }

  deleteCity(id){
    return this.http.delete(`http://localhost:3000/cities/:${id}`);
  }



}
