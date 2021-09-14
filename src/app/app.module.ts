import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
//import { ToastModule } from './toast';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast/toast.service';
import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './toast/toast-config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OverlayModule,
    CommonModule,
    MatIconModule
    // ToastModule.forRoot(),
  ],
  providers: [
    ToastService,
    {
      provide: TOAST_CONFIG_TOKEN,
      useValue: { ...defaultToastConfig }
    }
  ],
  declarations: [AppComponent, ToastComponent],
  entryComponents: [ToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
