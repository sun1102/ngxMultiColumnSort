# ngxMultiColumnSort
multiple columns  can be sort in table using angular 

Step 1. configure table structure in tableConstant.ts file
Step 2. call API and get the required data
step 3. Click on header and get desired output

Testing scenerios
1.  data will be sorted according to sortValue. 
    if sortValue contains more than 1 value then firstly it will be sorted by 1st value and then by 2nd value.
2.  Top rankers with asc usercount -  sortValue: ['rank', 'usercount'],
    if you want to sort one column in asc and next column in desc then put '-' (negetive sign) in the required column
    e.g. -  Top rankers with desc usercount -  sortValue: ['rank', '-usercount']
            rank will be sorted in asc, but usercount will be sorted in desc order.
