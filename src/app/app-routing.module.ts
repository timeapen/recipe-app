import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, pathMatch: 'full'},
    {path: 'shopping-list', component: ShoppingListComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}