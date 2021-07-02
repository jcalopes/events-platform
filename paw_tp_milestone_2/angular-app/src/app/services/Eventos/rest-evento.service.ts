import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { evento } from '../../models/evento';

const endpoint = 'http://localhost:3000/api/v1/eventos/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestEventoService {

  constructor(private http: HttpClient) {
  }

  criarEvento(event: evento): Observable<evento> {
    return this.http.post<evento>(endpoint + 'createEvento', JSON.stringify(event), httpOptions);
  }

  mostrarEventos():Observable<evento[]>{
    return this.http.get<evento[]>(endpoint);
  }

  showEventosPromotor(promotor:String):Observable<evento[]>{
    return this.http.get<evento[]>(endpoint+'showeventspromotor/'+promotor);
  }

  showEventosLocal(local:String):Observable<evento[]>{
    return this.http.get<evento[]>(endpoint+'showeventslocal/'+local);
  }

  showTopEventos():Observable<any[]>{
    return this.http.get<any[]>(endpoint+'showTopEventos');
  }

  showEventosLucrativos():Observable<any[]>{
    return this.http.get<any[]>(endpoint+'showEventosLucrativos');
  }

  showEventosPorCategoria():Observable<any[]>{
    return this.http.get<any[]>(endpoint+'showCategories');
  }

  showFaturaMes():Observable<any[]>{
    return this.http.get<any[]>(endpoint+'showFaturaMes');
  }

  deleteEvento(id:String):Observable<String>{
    return this.http.delete<String>(endpoint+'deleteEvento/'+id);
  }

  editarEvento(id:String,event:evento): Observable<evento> {
    return this.http.put<evento>(endpoint + 'editEvento/'+id, JSON.stringify(event), httpOptions);
  }

  mostrarEvento(id:String):Observable<evento>{
    return this.http.get<evento>(endpoint+'showEvento/'+id);
  }

  uploadFile(file: File,id:String): Observable<any> {
    const formData = new FormData();
    formData.append("postpromocional", file);
    return this.http.post<any>(endpoint + 'upload/'+id, formData);
  }
}
