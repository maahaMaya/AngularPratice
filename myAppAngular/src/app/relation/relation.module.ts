import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ParentInputComponent } from './parent-input/parent-input.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { ParentOutputComponent } from './parent-output/parent-output.component';



@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    ParentInputComponent,
    ChildInputComponent,
    ChildOutputComponent,
    ParentOutputComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    ChildComponent, 
    ParentComponent,
    ParentInputComponent,
    ChildInputComponent,
    ParentOutputComponent,
    ChildOutputComponent
  ]
})
export class RelationModule { }
