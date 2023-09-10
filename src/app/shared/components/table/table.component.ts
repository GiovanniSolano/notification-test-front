import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableColumn, TableData } from '../../models/table/table.model';
import { MetaResponse } from '../../models/activity-logs/activity-logs-response.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input('tableData') tableData: TableData[] = [];
  @Input('columns') columns: TableColumn[] = [];
  @Input('paginatorData') paginatorData?: MetaResponse;
  @Output() pageChanged = new EventEmitter<number>();
  public page: number = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  getCellValue(value: any): string {
    return value.hasOwnProperty('name') ? value.name : value;
  }

  getMaxNumberOfPage(): number[] {
    return (!this.paginatorData?.last_page) ? [1] : Array.from({ length: this.paginatorData?.last_page }, (_, index) => index + 1);
  }

  onChangePage(): void {
    this.pageChanged.emit(this.page);
  }

}
