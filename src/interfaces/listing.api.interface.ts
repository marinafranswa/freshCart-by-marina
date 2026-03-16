export interface ListingResponse <type>{
  data: type[];
  metadata: MetaData;
  results: number;
}

interface MetaData {
  currentPage: number;
  limit:number;
  numberOfPages:number;
}