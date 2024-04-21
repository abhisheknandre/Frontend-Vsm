import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class VehicleserviceService {
 

  

  private baseURL = "http://localhost:8081"

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.httpClient.post(`${this.baseURL}/user/login`, body);
  }
  register(name: string, email: string, password: string, role: string): Observable<any> {
    const body = { name, email, password, role };
    return this.httpClient.post(`${this.baseURL}/user/signup`, body);
  }
  

  addVehicle(name: string, year:number, licensePlate:string, ownerName:string, oemail:string ): Observable<any> {
    const body = {name, year, licensePlate, ownerName, oemail}
    return this.httpClient.post(`${this.baseURL}/vehicle/add`, body)
  }

  getVehicleList(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}/vehicle/getByServiceStatus/Scheduled`);
  }
  deleteVehicle(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/vehicle/delete/${id}`);
  }
  getAdvisorList(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseURL}/user/getAllAdvisorEmails`);
  }
  getVehicleById(id: number): Observable<Vehicle>{
    return this.httpClient.get<Vehicle>(`${this.baseURL}/vehicle/getById/${id}`);
  }
  updateVehicleStatus(id: number, vehicle: Vehicle): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/vehicle/update/${id}`,vehicle);
  }

  getItemList(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.baseURL}/item/getAll`);
  }

  createItem(item: Item): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/item/add`,item)
  }

  updateItem(id: number, item: Item): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/item/update/${id}`,item);
  } 

  getItemById(id: number): Observable<Item>{
    return this.httpClient.get<Item>(`${this.baseURL}/item/getById/${id}`);
  }

  deleteItem(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/item/delete/${id}`);
  }  

}
