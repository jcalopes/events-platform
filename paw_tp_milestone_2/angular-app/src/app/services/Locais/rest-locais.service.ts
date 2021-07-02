import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { local } from '../../models/local';

const endpoint = 'http://localhost:3000/api/v1/locais/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestLocaisService {

  constructor(private http: HttpClient) { 
  }

  mostrarLocais():Observable<local[]>{
    return this.http.get<local[]>(endpoint);
  }

  criarLocal(locais: local): Observable<local> {
    return this.http.post<local>(endpoint + 'createLocal', JSON.stringify(locais), httpOptions);
  }

  eliminarLocal(id:String): Observable<local> {
    return this.http.delete<any>(endpoint + 'deleteLocal/'+id, httpOptions);
  }

  editarLocal(id:String,locais: local): Observable<local> {
    return this.http.put<local>(endpoint + 'editLocal/'+id, JSON.stringify(locais), httpOptions);
  }
  
  showLocaisDoPromotor(username: String):Observable<local[]> {
    return this.http.get<local[]>(endpoint+'showLocaisDoPromotor/'+username);
  }

  uploadFile(file: File,id:String): Observable<any> {
    const formData = new FormData();
    formData.append("postpromocional", file);
    return this.http.post<any>(endpoint + 'upload/'+id, formData);
  }
}
