import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
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
  id: number;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
          console.log('Got recipe: ', this.recipe);
        }
      );

  }

  toShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    console.log('Activated route: ', this.activatedRoute);
    // this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activatedRoute});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    this.router.navigate(['../']);
  }

}
