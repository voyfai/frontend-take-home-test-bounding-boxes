export interface BoundingBox {
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
    items: DocumentItem[];
    documentId: string;
}