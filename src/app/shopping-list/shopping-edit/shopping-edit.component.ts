import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('f') ingredientsForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {

  }

  onSubmit() {
    console.log(this.ingredientsForm.value);

    const name = this.ingredientsForm.value.name;
    const amount= this.ingredientsForm.value.amount;
    const ingredient = new Ingredient(name, amount);
    
    console.log('Adding ingredient: ', ingredient);
    this.shoppingListService.onIngredientAdded(ingredient);
  }

}
