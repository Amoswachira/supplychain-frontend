import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'app/shared/services/data.service';
import { ToasterService } from 'app/shared/toaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  showLoading = false;
  itemModel: FormGroup;
  itemID:String;
  loadingIndicator = true;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private fb: FormBuilder,
    private toaster: ToasterService,
    private dataService: DataService<any, any>
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemID = params['id'];
    });

    this.itemModel = this.fb.group({
      location: ["", Validators.required],
      custodian: ["",Validators.required],
    });
  }
  onCreateForm(): void {   
    this.dataService.postNoToken(`items/${this.itemID }/events`, this.itemModel.value).subscribe(
      (response: any) => {
        if ((response.code != 400 && response.code != 500)) {
          this.showLoading = false;
          this.toaster.showSuccessToast(
            "top-right",
            "success",
            "success",
            3000
          );

          this.router.navigate(["/pages/items"]);
        } else {   
          this.showLoading = false;
          this.toaster.showWarnToast(
            "top-right",
            "warning",
            "Error creating item",
            3000
          );
        }
      },
      (errors) => {   
        this.showLoading = false;
        this.toaster.showWarnToast(
          "top-right",
          "warning",
          errors,
          3000
        );
      }
    );
  }

  @HostListener("window:beforeunload")
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
