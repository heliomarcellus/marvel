import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [],
  exports: [AppRoutingModule, MaterialModule],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
})
export class SharedModule {}
