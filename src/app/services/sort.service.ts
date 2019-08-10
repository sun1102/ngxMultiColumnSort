import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  public sort(array: Array<any>, fieldName: any, direction: string) {
    console.log('params', array, fieldName, direction);
    if (fieldName) {
      const orgFieldName = fieldName.slice();
      const sortFunc = function (rev) {
          return function (a, b) {
              for (let i = 0; i < fieldName.length; i++) {
                  if (fieldName[i].charAt(0) === '-') {
                      orgFieldName[i] = fieldName[i].substring(1);
                      if (a[orgFieldName[i]] > b[orgFieldName[i]]) {
                          return 1 * (rev ? -1 : 1);
                      }
                      if (a[orgFieldName[i]] < b[orgFieldName[i]]) {
                          return -1 * (rev ? -1 : 1);
                      }
                  } else {
                      if (a[orgFieldName[i]] > b[fieldName[i]]) {
                          return -1 * (rev ? -1 : 1);
                      }
                      if (a[orgFieldName[i]] < b[fieldName[i]]) {
                          return 1 * (rev ? -1 : 1);
                      }
                  }
              }
          };
      };
      const start = new Date().getTime();
      array.sort(sortFunc(direction === 'asc'));
      const end = new Date().getTime();
      const time = end - start;
    }
  }
}
