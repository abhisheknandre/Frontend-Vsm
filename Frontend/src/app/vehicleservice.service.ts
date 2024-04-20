import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleserviceService {

  private baseURL = "http://localhost:8081"

  constructor(private httpClient: HttpClient) { }
  

  getVehicleList(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}/vehicle/getByServiceStatus/Scheduled`);
  }
  deleteVehicle(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/vehicle/delete/${id}`);
  }
  getAdvisorList(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseURL}/user/getAllAdvisorEmails`);
  }

}
