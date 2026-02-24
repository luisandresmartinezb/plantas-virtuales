import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { PlantService } from '../../services/plant.service';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-add-plant',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {
  isEdit = false;

  plant: Plant = {
    name: '',
    watered: false,
    image: '' // vacío para que introduciendo nombre se genere
  };

  constructor(
    private service: PlantService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id) {
      this.isEdit = true;
      this.service.getPlantById(id).subscribe({
        next: (p) => (this.plant = p),
        error: (err) => {
          console.error(err);
          alert('No se pudo cargar la planta para editar.');
        }
      });
    }
  }

  //Validaciones para insertar la imagen y cuando crees una nueva con el nombre
  private buildImageFromName(name: string): string {
    const formatted = (name || '')
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    return `/assets/plants/${formatted}.jpg`;
  }

  save(form: NgForm) {
    if (form.invalid) return;

    //  si no escribe una flor nueva ejemplo aloe-ver o rosa se pone imagen default por defecto 
    if (!this.plant.image || this.plant.image.trim() === '') {
      this.plant.image = this.buildImageFromName(this.plant.name);
    }

    if (this.isEdit) {
      // editar -> PUT completo
      this.service.updatePlant(this.plant).subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: (err) => {
          console.error(err);
          alert('No se pudo guardar cambios.');
        }
      });
    } else {
      // crear -> POST
      this.service.addPlant(this.plant).subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: (err) => {
          console.error(err);
          alert('No se pudo crear la planta.');
        }
      });
    }
  }
}
