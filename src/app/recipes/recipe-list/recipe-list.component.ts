import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => this.recipes = recipes
      );
      
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    console.log('Activated route: ', this.activatedRoute);
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

}
