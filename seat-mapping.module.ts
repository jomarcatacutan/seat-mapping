import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

import { SeatMappingRoutingModule } from './seat-mapping-routing.module';
import { SeatMappingComponent } from './seat-mapping.component';
import { TableComponent } from './table/table.component';
import { ObjectsComponent } from './objects/objects.component';
import { BlueprintComponent } from './blueprint/blueprint.component';

@NgModule({
  declarations: [
    SeatMappingComponent,
    TableComponent,
    ObjectsComponent,
    BlueprintComponent,
  ],
  imports: [
    CommonModule,
    SeatMappingRoutingModule,
    NgbModule,
    CdkDrag,
    FormsModule,
  ]
})
export class SeatMappingModule { }