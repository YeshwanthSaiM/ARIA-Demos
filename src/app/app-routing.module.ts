import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VtComponent } from './components/vt/vt.component';
import { InteriorComponent } from './components/interior/interior.component';
import { HealthComponent } from './components/health/health.component';
import { StudyComponent } from './components/study/study.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vt', component: VtComponent },
  { path: 'interior', component: InteriorComponent},
  { path: 'health', component: HealthComponent},
  { path: 'study', component: StudyComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
