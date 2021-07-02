import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bilhete } from '../../models/bilhete';

const endpoint = 'http://localhost:3000/api/v1/bilhetes/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestBilheteService {

  constructor(private http: HttpClient) { }

  criarBilhete(bilhete: bilhete): Observable<bilhete> {
    console.log(JSON.stringify(bilhete));
    return this.http.post<bilhete>(endpoint + 'createbilhetes', JSON.stringify(bilhete), httpOptions);
  }

  cancelarBilhete(id:String): Observable<bilhete> {
    return this.http.put<bilhete>(endpoint + 'cancel/'+id, httpOptions);
  }

  updateBilhete(id:String,bilhete: bilhete): Observable<bilhete> {
    return this.http.put<bilhete>(endpoint + 'update/'+id, JSON.stringify(bilhete), httpOptions);
  }

  showAllBilhetes(): Observable<bilhete[]> {
    return this.http.get<bilhete[]>(endpoint);
  }

  showBilhetesUtilizador(utilizador:String):Observable<bilhete[]>{
    return this.http.get<bilhete[]>(endpoint+'showbilhetescliente/'+utilizador)
  }

  showBilhetesPromotor(promotor:String):Observable<bilhete[]>{
    return this.http.get<bilhete[]>(endpoint+'showbilhetespromotor/'+promotor)
  }

  showBilhete(id:String):Observable<bilhete>{
    return this.http.get<bilhete>(endpoint+'showbilhete/'+id)
  }

  uploadFile(file: File,id:String): Observable<any> {
    const formData = new FormData();
    formData.append("postpromocional", file);
    return this.http.post<any>(endpoint + 'upload/'+id, formData);
  }
}
