import { Component } from '@angular/core';
import { RecipeSearchComponent } from "../recipe-search/recipe-search.component";
import { RecipeFiltersComponent } from "../recipe-filters/recipe-filters.component";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { RecipeListFiltersComponent } from "../recipe-list-filters/recipe-list-filters.component";

@Component({
  selector: 'app-recipe-page',
  imports: [RecipeSearchComponent, RecipeFiltersComponent, RecipeListComponent, RecipeListFiltersComponent],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent {

}
