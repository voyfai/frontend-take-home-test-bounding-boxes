import React, { useEffect, useRef, useState } from "react";
import BoundingBox from "./BoundingBox";
import { DocumentProps } from "../models/Document";

interface SvgDocumentProps extends DocumentProps {
  documentBody: string;
}

/**
 * Component for rendering document as SVG with interactive bounding boxes
 * Handles image loading, scaling, and bounding box visualization
 */

const SvgDocument: React.FC<SvgDocumentProps> = ({
  documentBody,
  items,
  selectedItemId,
  selectedOrigin,
  showAllBoxes,
  onSelectItem,
}) => {
  // Refs and state for managing SVG rendering
  const svgRef = useRef<SVGSVGElement>(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [dpi, setDpi] = useState(96);

  const originColors: Record<string, string> = {
    hsCode: "rgba(255, 0, 0, 0.5)",
    quantity: "rgba(0, 0, 255, 0.5)",
    unitValue: "rgba(0, 255, 0, 0.5)",
    totalValue: "rgba(128, 0, 128, 0.5)",
    countryOfOrigin: "rgba(255, 165, 0, 0.5)",
    productDescription: "rgba(0, 255, 255, 0.5)",
  };

  /**
   * Effect for initial image loading and DPI calculation
   * Runs when documentBody changes
   */

  useEffect(() => {
    if (svgRef.current && documentBody) {
      const img = new Image();
      img.onload = () => {
        // Calculate actual DPI based on image dimensions
        const imgWidthInches = img.width / 96; // Assuming initial 96 DPI
        const actualDpi = img.width / imgWidthInches;
        setDpi(actualDpi);
        // Store original image dimensions for proper rendering
        setImageSize({ width: img.width, height: img.height });
      };
      img.src = `data:image/png;base64,${documentBody}`;
    }
  }, [documentBody]);

  /**
   * Handling window resize events
   * maintains SVG responsiveness while preserving aspect ratio
   */
  useEffect(() => {
    const handleResize = () => {
      if (svgRef.current && documentBody) {
        const img = new Image();
        img.src = `data:image/png;base64,${documentBody}`;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [documentBody]);

  return (
    <div className="svg-container">
      {/* 
        SVG element that displays the document image and bounding boxes
        Uses viewBox and preserveAspectRatio for responsive scaling
      */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${imageSize.width} ${imageSize.height}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "auto", border: "1px solid #ddd" }}
      >
          {/* Base document image */}
        <image
          href={`data:image/png;base64,${documentBody}`}
          width={imageSize.width}
          height={imageSize.height}
        />
         {/* Render bounding boxes for each document item */}
        {items.map((item) => {
          // Determine if this item should be visible
          const shouldShow = showAllBoxes || selectedItemId === item.itemId;

          // Determine if this item is currently  selected
          const isSelected =
            selectedItemId === item.itemId &&
            (!selectedOrigin || selectedOrigin === item.origin);

          return (
            shouldShow && (
              <BoundingBox
                key={`${item.itemId}-${item.origin}`} // Unique key for React
                polygon={item.boundingBox.polygon} // Bounding box coordinates  
                color={originColors[item.origin] || "rgba(0, 0, 0, 0.5)"} // Color based on origin
                label={item.origin}
                dpi={dpi}
                isSelected={isSelected}
                showAllBoxes={showAllBoxes}
                onClick={() => onSelectItem(item.itemId, item.origin)}
              />
            )
          );
        })}
      </svg>
    </div>
  );
};

export default SvgDocument;
