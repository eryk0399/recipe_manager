import { Routes } from '@angular/router';
import { RecipePageComponent } from './recipe/components/recipe-page/recipe-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { RecipeAddPageComponent } from './recipe/components/recipe-add-page/recipe-add-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'recipes',
        component: RecipePageComponent
    },
    {
        path: 'recipes/add',
        component: RecipeAddPageComponent
    }
];
