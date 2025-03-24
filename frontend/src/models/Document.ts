
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
