import { Component, TemplateRef } from '@angular/core';

import { ToastService } from './toast';
import { ToastType } from './toast/toast-config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private count = 1;
 public type=ToastType;
  constructor(private toastService: ToastService) {
  }

  showToast(toastType:ToastType ) {
    this.toastService.show(
      {
        text: `Toast message ${this.count}`,
        type:toastType 
      },
      true
    );

    this.count += 1;
  }



  showToastManualClose(customTemplate: TemplateRef<any>) {
    this.toastService.show(
      {
        text: `Manual Toast ${this.count}`,
        type: 'success',
        template: customTemplate
      },
      false
    );

    this.count += 1;
  }
}
