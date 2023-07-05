import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { ShortsComponent } from './shorts/shorts.component';
import { PoliticsComponent } from './politics/politics.component';

const routes: Routes = [
  {path : "home",component:HomeComponent},
  {path : "series",component :SeriesComponent},
  {path : "shorts",component : ShortsComponent},
  {path : "politics",component : PoliticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
