export interface PaginationResult<LedgerEntryDto> {
  items: LedgerEntryDto[];
  totalCount: number;
  page: number;
  pageSize: number;
}
