import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  step: string = 'details';
  readonly steps: string[] = ['details', 'instructions', 'ingredients'];

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    instructions: new FormControl('', Validators.required),
    ingredients: new FormArray([
      new FormGroup({
        name: new FormControl(''),
        amount: new FormControl('')
      })
    ])
  });

  constructor() {}

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  get title() {
    return this.form.get('title');
  }

  get instructions() {
    return this.form.get('instructions');
  }

  nextForm() {
    const idx = this.steps.indexOf(this.step);
    if(idx < this.steps.length) {
      this.step = this.steps[idx + 1];
    }
  }

  previousForm() {
    const idx = this.steps.indexOf(this.step);
    if(idx > 0) {
      this.step = this.steps[idx - 1];
    }
  }

  onSubmit() {    
    const recipe = {
      title: this.title?.value?.trim(),
      instructions: this.instructions?.value?.trim(),
      ingredients: this.ingredients.value
    }
  }

  addIngredient() {
    const group = new FormGroup({
      name: new FormControl(''),
      amount: new FormControl('')
    });
    this.ingredients.push(group);
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
}
