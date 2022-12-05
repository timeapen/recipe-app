import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      0,
      'Blueberry Sherbet', 
      'A delicious dessert', 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Blueberry_ice_cream_cone_%288745182597%29.jpg',
      [new Ingredient('Sherbet', 1), new Ingredient('Blueberry', 10)]),
    new Recipe(
      1,
      'Vada', 
      'A tasty, salty donut', 
      'https://upload.wikimedia.org/wikipedia/commons/0/0c/Medu_Vadas.JPG',
      [new Ingredient('Dal', 10), new Ingredient('Salt', 10)])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

}
