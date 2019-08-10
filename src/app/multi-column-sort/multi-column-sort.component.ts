import { SortService } from './../services/sort.service';
import { tableHeader, defaultSort } from './../tableConstant/tableConstant';
import { DataService } from './../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-multi-column-sort',
  templateUrl: './multi-column-sort.component.html',
  styleUrls: ['./multi-column-sort.component.scss']
})
export class MultiColumnSortComponent implements OnInit, OnDestroy {
  title = 'ngxMultiColumnSort';
  tableData: any;
  tableHeader = tableHeader;
  constructor(private dataService: DataService, private sortService: SortService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.tableData = this.dataService.getData();
    this.sortService.sort(this.tableData, defaultSort.sortValue, defaultSort.direction);
  }

  onHeaderClick(header) {
    console.log('hedaer values', header);
    header.direction = header.direction === 'asc' ? 'desc' : 'asc';
    this.sortService.sort(this.tableData, header.sortValue, header.direction);
  }

  ngOnDestroy() {
    this.tableData.unsubscribe();
  }
}
