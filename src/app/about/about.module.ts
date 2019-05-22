import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { MatCardModule, MatButtonModule, MatRippleModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
  ]
})
export class AboutModule { }
