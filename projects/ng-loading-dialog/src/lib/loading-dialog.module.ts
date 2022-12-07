import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDialogComponent } from './loading-dialog.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';

@NgModule({
  declarations: [LoadingDialogComponent],
  imports: [CommonModule, MatDialogModule, MatProgressSpinnerModule],
  exports: [LoadingDialogComponent],
})
export class LoadingDialogModule {}
