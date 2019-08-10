import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map , tap } from 'rxjs/operators';
import { tableData } from '../tableConstant/tableConstant';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    // I am using temporary table data set which is placed in tableconstant.ts file
    // if you want to change the data dynamically call http request here
    /*
      return this.httpClient.get('URL');
    */
   
    return tableData;
  }
}
