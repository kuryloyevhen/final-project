import { Component, Inject, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA  } from '@angular/material';
import { CentersService } from '../../../../../services/centers.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnDestroy {

  modalTitle: string;

  updateCenterForm = this.fb.group({
    bikesCount: [0, Validators.compose([Validators.required, Validators.pattern(/[0-9]/)])],
    cost: [0, Validators.compose([Validators.required, Validators.pattern(/[0-9]/)])],
    refundDeposit: [0, Validators.compose([Validators.required, Validators.pattern(/[0-9]/)])]
  })

  constructor(private fb: FormBuilder,
              private server: CentersService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
                this.modalTitle = data.title;
              }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();

  updateCenter() {
    this.server.updateCenter(this.server.centerId, this.updateCenterForm.value).pipe(takeUntil(this.unsubscribe))
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
