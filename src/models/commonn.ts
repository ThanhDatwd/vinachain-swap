export type PaginationQuery = {
  sort: string;
  limit: number;
  offset: number;
};

export type Integration = {
  txnHast: string;
  method: string;
  block: number;
  age: string;
  from: string;
  to: string;
  value: string;
  txnFee: number;
};
