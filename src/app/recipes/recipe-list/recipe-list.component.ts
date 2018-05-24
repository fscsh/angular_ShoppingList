import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('testItem','item description', 'http://cyber-breeze.com/wp-content/uploads/2017/02/featured-image-39.jpg'),
        new Recipe('testItem222','item description222', 'http://cyber-breeze.com/wp-content/uploads/2017/02/featured-image-39.jpg')
    ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }
}
