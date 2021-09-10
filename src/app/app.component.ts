import { Component, TemplateRef } from '@angular/core';

import { ToastService } from './toast';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private count = 1;

  constructor(private toastService: ToastService) {}

  showToast() {
    this.toastService.show(
      {
        text: `Toast message ${this.count}`,
        type: 'success'
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
