import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') ingredientsForm: NgForm;
  editSubscription: Subscription;
  editMode: boolean;
  editIngredientIndex: number;
  editIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.editSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIngredientIndex = index;
        this.editIngredient = this.shoppingListService.getIngredient(index);
        console.debug('Begin edit session for: ', this);
        this.ingredientsForm.form.patchValue({
          'name': this.editIngredient.name,
          'amount': this.editIngredient.amount
        })
      }
    );
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

  onAddIngredient() {
    const enteredIngredient = this.ingredientsForm.value;
    
    if (this.editMode) {
      this.shoppingListService.onUpdateIngredient(this.editIngredientIndex, new Ingredient(enteredIngredient.name, enteredIngredient.amount));

    } else {
      this.shoppingListService.onIngredientAdded(new Ingredient(enteredIngredient.name, enteredIngredient.amount));
    }
    this.editMode = false;
    this.ingredientsForm.resetForm();
  }

  onClearEdit() {
    this.ingredientsForm.resetForm();
    this.editMode = false;
  }

  onDeleteIngredient() {
    this.shoppingListService.onDeleteIngredient(this.editIngredientIndex);
    this.onClearEdit();
  }

}
