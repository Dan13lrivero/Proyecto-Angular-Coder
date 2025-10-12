import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize/capitalize-pipe';
import { Resaltado } from './directives/resaltado/resaltado';
import { NombreCompletoPipe } from './pipes/nombreCompleto/nombreCompleto-pipe';



@NgModule({
  declarations: [
    CapitalizePipe,
    Resaltado,
    NombreCompletoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe, Resaltado, NombreCompletoPipe
  ]
})
export class SharedModule { }
