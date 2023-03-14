import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private http: HttpClient) { }

  public obtenerDatos(): Observable<any> {
    return this.http.get('http://localhost:3200/listar');
  }

  public guardartarea(data:any): Observable<any> {
    return this.http.post('http://localhost:3200/guardar',data);
  }

  public eliminar(data:any): Observable<any> {
    return this.http.post('http://localhost:3200/eliminar',data);
  
}

  public confirmar(data:any): Observable<any> {
    return this.http.post('http://localhost:3200/confirmar',data);
  }
}
