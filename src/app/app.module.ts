import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ServService } from './serv.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    FilterPipePipe,
    ResultComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
