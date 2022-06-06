import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'toastExamples';

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }

  successToast() {
    this.toastr.success(undefined, 'Success') // Ignores preventDuplicates: true when undefined
  }

  infoToast() {
    this.toastr.info('Some info...', 'Info', { timeOut: 3000 })
  }

  warningToast() {
    this.toastr.warning('Some warning...', 'Warning', { closeButton: true })
  }

  clearToasts() {
    this.toastr.clear()
  }
}
