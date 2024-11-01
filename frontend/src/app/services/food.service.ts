import { Injectable } from '@angular/core';
import { Comida } from '../../shared/models/comida';
import { sample_comidas } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Comida[]{
    return sample_comidas;
  }

}
