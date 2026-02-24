import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant.model';

@Injectable({ providedIn: 'root' })
export class PlantService {
  private apiUrl = 'http://localhost:3000/plants';

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiUrl);
  }

  getPlantById(id: number): Observable<Plant> {
    return this.http.get<Plant>(`${this.apiUrl}/${id}`);
  }

  addPlant(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(this.apiUrl, plant);
  }

  deletePlant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Patch que coge los datos del json
  patchPlant(id: number, changes: Partial<Plant>): Observable<Plant> {
    return this.http.patch<Plant>(`${this.apiUrl}/${id}`, changes);
  }

  //  Update completo 
  updatePlant(plant: Plant): Observable<Plant> {
    return this.http.put<Plant>(`${this.apiUrl}/${plant.id}`, plant);
  }
}
