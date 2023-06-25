import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ColumnMode, SelectionType } from "@swimlane/ngx-datatable";
import { DataService } from "app/shared/services/data.service";
import { ToasterService } from "app/shared/toaster.service";
import { Subscription } from "rxjs";

@Component({
  selector: "add-items",
  templateUrl: "./add-items.component.html",
  styleUrls: ["./add-items.component.scss"],
})
export class AddItemsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  showLoading = false;
  itemModel: FormGroup;

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
    this.itemModel = this.fb.group({
      name: ["", Validators.required],
      color: [""],
      price: [""],
    });
  }
  onCreateForm(): void {   
    this.dataService.postNoToken("items", this.itemModel.value).subscribe(
      (response: any) => {
        if ((response.code != 400)) {
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
