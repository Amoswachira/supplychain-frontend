import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ColumnMode, SelectionType } from "@swimlane/ngx-datatable";
import { DataService } from 'app/shared/services/data.service';
import { ToasterService } from 'app/shared/toaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  showLoading = false;
  itemModel: FormGroup;

  loadingIndicator = true;
  itemID:String;

  reorderable = true;
  columnsWithSearch : string[] = [];
  rows:any;
  ColumnMode = ColumnMode;
  selected = [];
  SelectionType = SelectionType;
  temp = [];
  entries: number = 10;
  isButtonVisible = false;

 

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
    this.fetchDataById(this.itemID);
    this.fetchEventsById(this.itemID);
  });
    this.itemModel = this.fb.group({
      name: ["", Validators.required],
      color: [""],
      price: [""],
    });
  }
  fetchDataById(itemID: String) {
    this.showLoading = true;
    this.subscription.add(
      this.dataService.getNoToken('items/' + itemID).subscribe((response) => {
        if (response) {
         
          this.showLoading = false;
          this.itemModel.controls["name"].setValue(response.name);
          this.itemModel.controls["color"].setValue(response.color);
          this.itemModel.controls["price"].setValue(response.price);
       
        
  
        } else {
         
          this.loadingIndicator = false;
          this.showLoading = false;
          this.toaster.showWarnToast('top-right', 'warning',"error fetching data",3000);
        }
      })
    );
  }
  fetchEventsById(itemID: String) {
    this.showLoading = true;
    this.subscription.add(
      this.dataService.getNoToken('items/' + itemID +'/events').subscribe((response) => {
        if (response) {
         
          this.showLoading = false;

          this.rows = response
          this.temp =this.rows;
          this.loadingIndicator = false;
          this.columnsWithSearch = Object.keys(this.rows[0]);
       
        
  
        } else {
          this.rows = []
          this.loadingIndicator = false;
          this.showLoading = false;
          this.toaster.showWarnToast('top-right', 'warning',"error fetching data",3000);
        }
      })
    );
  }
  onUpdateForm(): void {   
    this.dataService.putNoToken(`items/${this.itemID}`, this.itemModel.value).subscribe(
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




  entriesChange($event) {
    this.entries = $event.target.value;
  }
  // filters results
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    let filter = event.target.value.toLowerCase();

    // assign filtered matches to the active datatable
    this.rows = this.temp.filter(item => {
      // iterate through each row's column data
      for (let i = 0; i < this.columnsWithSearch.length; i++) {
        var colValue = item[this.columnsWithSearch[i]];

        // if no filter OR colvalue is NOT null AND contains the given filter
        if (!filter || (!!colValue && colValue.toString().toLowerCase().indexOf(filter) !== -1)) {
          // found match, return true to add to result set
          return true;
        }
      }
    });
    // TODO - whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  addEvent(){
    
    this.router.navigate(['/pages/add-event',{ 'id':this.itemID }]);
  }


  @HostListener("window:beforeunload")
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
