import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          const id = +params['id'];
          this.recipe = this.recipeService.getRecipe(id);
          console.log('Got recipe: ', this.recipe);
        }
      );

  }

  toShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
