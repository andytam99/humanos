import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MembresiaComponent } from './pages/membresia/membresia.component';
import { ValoresComponent } from './pages/valores/valores.component';
import { VoluntariadoComponent } from './pages/voluntariado/voluntariado.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'valores',
    component: ValoresComponent,
  },
  {
    path: 'miembros',
    component: MembresiaComponent,
  },
  {
    path: 'voluntarios',
    component: VoluntariadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
