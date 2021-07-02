import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {user} from '../../models/user';

const endpoint = 'http://localhost:3000/api/v1/users/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestUtilizadorService {
  constructor(private http:HttpClient) { }

  criarUtilizador(utilizador:user):Observable<user>{
    return this.http.post<user>(endpoint+'signup',JSON.stringify(utilizador),httpOptions);
  }

  efetuarLogin(utilizador:any):Observable<user>{
    return this.http.post<user>(endpoint+'login',JSON.stringify(utilizador),httpOptions);
  }

  removerConta(id:String,password:String):Observable<user>{
    return this.http.put<any>(endpoint+'disable/'+id,{password},httpOptions);
  }

  atualizarPerfil(id:String,utilizador:user):Observable<user>{
    return this.http.put<user>(endpoint+'updateAccount/'+id,JSON.stringify(utilizador),httpOptions);
  }

  mudarPassword(id:String,password:String):Observable<user>{
    return this.http.put<user>(endpoint+'changePassword/'+id,JSON.stringify(password),httpOptions);
  }

  toBan(username:String):Observable<user>{
    return this.http.put<user>(endpoint+'banned/'+username,httpOptions);
  }

  removerUtilizador(id:String):Observable<user>{
    return this.http.delete<user>(endpoint+'deleteAccount/'+id,httpOptions);
  }

  obterUtilizador(id:String):Observable<user>{
    return this.http.get<user>(endpoint+'getUser/'+id);
  }

  obterUtilizadores():Observable<user[]>{
    return this.http.get<user[]>(endpoint+'getUsers');
  }
}





