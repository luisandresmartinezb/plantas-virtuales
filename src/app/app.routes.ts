import { Routes } from '@angular/router';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';

export const routes: Routes = [
  { path: '', component: PlantListComponent },
  { path: 'add', component: AddPlantComponent },
  { path: 'edit/:id', component: AddPlantComponent },
  { path: '**', redirectTo: '' }
];
