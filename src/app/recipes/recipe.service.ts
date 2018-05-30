import {EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('testItem','item description', 'http://cyber-breeze.com/wp-content/uploads/2017/02/featured-image-39.jpg'),
        new Recipe('testItem222','item description222', 'http://cyber-breeze.com/wp-content/uploads/2017/02/featured-image-39.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}
