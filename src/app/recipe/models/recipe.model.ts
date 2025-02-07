import { RecipeIngredient } from "./recipe-ingredient.model";

export interface Recipe {
    id?: number;
    title: string;
    instructions: string;
    ingredients: RecipeIngredient[];
}