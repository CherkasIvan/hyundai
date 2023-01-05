import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PaginationInterface } from '../../models/interfaces/paginator.interface';

@Component({
  selector: 'tes-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss'],
})
export class TablePaginatorComponent implements OnInit {
  @Input() value: any = { page: 1, pageSize: 5 };
  @Input() total = 10;
  @Input() visibleRangeLength = 5;
  @Input() pageSizes: number[] = [5, 10, 25, 50];

  onChange(value: any) {}
  onTouched() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: PaginationInterface): void {
    if (!value) return;

    this.value = value;
    this.updateTotalPages();
    this.updateVisiblePages();
  }

  public totalPages!: number;
  public visiblePages!: number[];

  ngOnInit(): void {
    this.updateVisiblePages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['total'] || changes['value']) this.updateTotalPages();
  }

  public selectPage(page: number): void {
    this.value = { ...this.value, page };
    this.updateVisiblePages();
    this.onChange(this.value);
  }

  public selectPageSize(pageSize: string): void {
    this.value = { page: 1, pageSize: +pageSize };
    this.updateTotalPages();
    this.updateVisiblePages();
    this.onChange(this.value);
  }

  private updateVisiblePages(): void {
    const length = Math.min(this.totalPages, this.visibleRangeLength);

    const startIndex = Math.max(
      Math.min(
        this.value.page - Math.ceil(length / 2),
        this.totalPages - length
      ),
      0
    );

    this.visiblePages = Array.from(
      new Array(length).keys(),
      (item) => item + startIndex + 1
    );
  }

  private updateTotalPages(): void {
    this.totalPages = Math.ceil(this.total / this.value.pageSize);
  }
}
