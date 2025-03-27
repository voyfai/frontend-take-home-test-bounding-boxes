import React from 'react';

/**
 * Props interface for the BoundingBox component
 * @property polygon - Array of coordinates defining the bounding box polygon [x1,y1,x2,y2,...]
 * @property color - Base color for the bounding box
 * @property label - Text label to display when selected
 * @property isSelected - Boolean indicating if this box is currently selected
 * @property dpi - Dots per inch for proper coordinate scaling
 * @property onClick - Click handler for selection/deselection
 * @property showAllBoxes - Boolean controlling display mode (all boxes vs selected only)
 */

interface BoundingBoxProps {
  polygon: number[];
  color: string;
  label: string;
  isSelected: boolean;
  dpi: number;
  onClick: () => void;
  showAllBoxes: boolean;
}
/**
 * Component that renders an interactive bounding box on a document and it handles:
 * Visual representation of document regions
 * Selection states and styling
 * Label display
 * Click interaction
 */
const BoundingBox: React.FC<BoundingBoxProps> = ({
  polygon,
  color,
  label,
  isSelected,
  dpi,
  onClick,
  showAllBoxes
}) => {
  if (polygon.length !== 8) return null;

  /**
   * Convert polygon coordinates from inches to pixels
   * Scales each coordinate using the document's DPI
   * Formats as SVG points string "x1,y1 x2,y2 ..."
   */

  const points = polygon.map((coord) => 
    coord * dpi
  ).join(',');

  return (
     // SVG group containing the box and label
    // Entire group is clickable via the onClick handler
    <g onClick={onClick} style={{ cursor: 'pointer' }}>
       {/* 
        The bounding box polygon with conditional styling:
         Yellow fill when selected
        No fill when not selected
        Black outline when selected, colored outline otherwise
        Thicker border when selected or in single-box mode
      */}
      <polygon
        points={points}
        fill={isSelected ? "rgba(255, 255, 0, 0.3)" : "none"}
        stroke={isSelected ? '#000000' : color}
        strokeWidth={isSelected ? 3 : showAllBoxes ? 2 : 3}
        pointerEvents="visible" // To Ensures entire shape is clickable
      />
      {/*
      * Text label for the bounding box, displayed when selected  
      * Positioned above the top-left corner of the box
      * Uses small bold font for readability
      */}
      {isSelected && (
        <text
          x={polygon[0] * dpi} // X position (first coordinate)
          y={polygon[1] * dpi - 5} // Y position (first coordinate - 5px for spacing)
          fill="black"
          fontSize="8"
          fontWeight="bold"
        >
          {label}
        </text>
      )}
    </g>
  );
};

export default BoundingBox;