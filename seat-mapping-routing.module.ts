import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatMappingComponent } from './seat-mapping.component';
import { BlueprintComponent } from './blueprint/blueprint.component';

const routes: Routes = [
  {
    path: '',
    component: SeatMappingComponent,
    children: [
      {
        path: 'blueprint',
        component: BlueprintComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatMappingRoutingModule { }