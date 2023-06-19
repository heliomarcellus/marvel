import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from 'src/app/components/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/shared/material.module';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, MaterialModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule {}
