import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('testItem','item description', 'http://cyber-breeze.com/wp-content/uploads/2017/02/featured-image-39.jpg'),
        new Recipe('testItem','item description', 'http://cyber-breeze.com/wp-content/uploads/2017/02/featured-image-39.jpg')
    ];
  constructor() { }

  ngOnInit() {
  }

}
