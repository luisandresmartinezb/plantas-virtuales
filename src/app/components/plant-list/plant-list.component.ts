import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PlantService } from '../../services/plant.service';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = [];
  filter: 'all' | 'watered' | 'dry' = 'all';

  constructor(private service: PlantService) { }

  ngOnInit(): void {
    this.loadPlants();
  }

  loadPlants(): void {
    this.service.getPlants().subscribe({
      next: (plants) => (this.plants = plants),
      error: (err) => {
        console.error(err);
        alert('No se pueden cargar plantas. ¿json-server está encendido?');
      }
    });
  }

  get filteredPlants(): Plant[] {
    if (this.filter === 'watered') return this.plants.filter(p => p.watered);
    if (this.filter === 'dry') return this.plants.filter(p => !p.watered);
    return this.plants;
  }

  // fallback imagen
  onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = '/assets/plants/default.jpg';
  }

  // regar / desregar
  toggleWater(plant: Plant): void {
    if (plant.id == null) return;

    this.service.patchPlant(plant.id, { watered: !plant.watered }).subscribe({
      next: (resp) => (plant.watered = resp.watered),
      error: (err) => {
        console.error(err);
        alert(`Fallo actualizando. Status: ${err.status} ${err.statusText}`);
      }
    });
  }

  deletePlant(id?: number): void {
    if (!id) return;
    if (!confirm('¿Eliminar esta planta?')) return;

    this.service.deletePlant(id).subscribe({
      next: () => (this.plants = this.plants.filter(p => p.id !== id)),
      error: (err) => {
        console.error(err);
        alert('No se pudo eliminar.');
      }
    });
  }

  waterAll(): void {
    this.plants.filter(p => !p.watered).forEach(p => this.toggleWater(p));
  }
}
