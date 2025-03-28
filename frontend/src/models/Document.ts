export interface ItemBox {  
    itemId: string;
    origin: string;
    boundingBox: { polygon: number[] };
    pageNumber: number;
}

export interface DocumentProps {
  items: Array<ItemBox>;
  selectedItemId: string | null;
  selectedOrigin: string | null;
  showAllBoxes: boolean;
  onSelectItem: (itemId: string | null, origin: string | null) => void;
} 

interface BoundingBox {
  polygon: number[];
  pageNumber: number;
}

export interface DocumentItem {
  boundingBox: BoundingBox;
  offset: number;
  pageNumber: number;
  documentId: string;
  itemId: string;
  origin: string;
}

export interface Document {
  documentId: string;
  body: string; // base64 image data
  items: DocumentItem[];
}


export interface IBoundingBox {
    top: number;
    left: number;
    width: number;
    height: number;
    origin: string;
}

export interface item {
    content: string;
    boundingBox: IBoundingBox;
}

export interface IDocument {
  id: string;
  name: string;
  items: item[];
  binaryData: string;
}


export default IDocument;
