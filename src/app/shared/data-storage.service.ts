import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipes.model";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    private recipesDbUrl: string = 'https://ng-course-recipe-book-a0253-default-rtdb.firebaseio.com/recipes.json';

    constructor(private http: HttpClient, private recipesService: RecipeService) {}

    storeRecipes() {
        const recipes: Recipe[] = this.recipesService.getRecipes();
        this.http.put(this.recipesDbUrl, recipes)
            .subscribe(response => {
                console.debug('Stored recipes: ', response);
            });
    }

}