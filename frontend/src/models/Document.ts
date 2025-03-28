
export interface polygon {
    top: number;
    left: number;
    width: number;
    height: number;
    origin: string;
}

export interface BoundingBox {
  polygon: polygon;
  pageNumber: number;
}

export interface MonetaryValue {
  currency: string;
  monetaryValue: number;
}

export interface Cell {
  boundingBox: BoundingBox;
  offset: number;
  pageNumber: number;
  documentId: string;
  itemId: string;
  origin: string;
  value: string | number | MonetaryValue;
}

export interface Document {
  cells: Cell[];
  documentId: string;
  body: string;
}


export default Document;
