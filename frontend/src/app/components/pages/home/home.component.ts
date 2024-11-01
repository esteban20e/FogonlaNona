import { Component, OnInit } from '@angular/core';
import { Comida } from '../../../../shared/models/comida';
import { FoodService } from '../../../services/food.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit{

  comidas:Comida[] = [];

  constructor(private foodService:FoodService) {
    this.comidas = this.foodService.getAll();
  }

  ngOnInit(): void {
    
  }

}
