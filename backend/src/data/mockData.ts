interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface FileItem {
  id: string;
  name: string;
  boundingBoxes: BoundingBox[];
}

export const mockFiles: FileItem[] = [
  {
    id: "1",
    name: "document1.pdf",
    boundingBoxes: [
      { x: 100, y: 100, width: 200, height: 50 },
      { x: 150, y: 200, width: 300, height: 75 }
    ]
  },
  {
    id: "2",
    name: "document2.pdf",
    boundingBoxes: [
      { x: 50, y: 50, width: 150, height: 40 },
      { x: 200, y: 300, width: 250, height: 60 }
    ]
  }
]; 