import { Routes } from '@angular/router';
import { RecipePageComponent } from './recipe/recipe-page/recipe-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'recipes',
        component: RecipePageComponent
    }
];
