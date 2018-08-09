import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeDetailComponent, RecipeListComponent, RecipeItemComponent]
})
export class RecipeBookModule { }
