import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { DataService } from 'app/shared/services/data.service';
import { ToasterService } from 'app/shared/toaster.service';

@Component({
  selector: 'items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit {

  loadingIndicator = true;
  reorderable = true;
  columnsWithSearch: string[] = [];
  rows:any;
  ColumnMode = ColumnMode;
  selected = [];
  SelectionType = SelectionType;
  temp = [];
  entries: number = 10;
  isButtonVisible = false;





  showLoading = false;


  constructor(
    private cd: ChangeDetectorRef,
    private dataService: DataService<any, any>,
    private toaster: ToasterService,

    private router: Router,
  ) { }

  ngOnInit() {

    this.dataService
      .getNoToken('items')
      .subscribe((response) => {
        if (response) {
          console.log('data from backend>>',response);
          
          this.rows = response;
          this.temp = this.rows;
          this.loadingIndicator = false;
          this.columnsWithSearch = Object.keys(this.rows[0]);


        } else {
          this.rows = []
          this.loadingIndicator = false;
          // this.notify.showWarning(response.message);
          this.toaster.showWarnToast('top-right', 'warning',"failed to load data", 3000);
        }
      });


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

  viewById(value){
    console.log('this is the clicked ',value);
    this.router.navigate(['/pages/view-item',{ 'id': value }]);
  }




}
