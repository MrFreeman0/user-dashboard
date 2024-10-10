export type TSortBy = "asc" | "desc";

export type TSortSelection = "name" | "email";

export interface ISortState {
  sortWith: TSortSelection;
  sortBy: TSortBy;
}
