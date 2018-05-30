import {EventEmitter , Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('testItem',
        'item description',
         'http://cyber-breeze.com/wp-content/uploads/2017/02/featured-image-39.jpg',
         [
             new Ingredient('mest',21),
             new Ingredient('fries', 10)
         ]),
        new Recipe('testItem222',
        'item description222',
         'http://cyber-breeze.com/wp-content/uploads/2017/02/featured-image-39.jpg',
        [
            new Ingredient('banana',2),
            new Ingredient('apple',5)
        ])
    ];
    constructor(private shoppingListService : ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}
