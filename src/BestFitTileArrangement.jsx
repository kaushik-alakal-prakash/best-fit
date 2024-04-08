import React, { useState, useEffect } from 'react';

function BestFitTileArrangement({ initialContainerWidth, initialContainerHeight, initialNumTiles }) {
  const [containerWidth, ] = useState(initialContainerWidth);
  const [containerHeight, ] = useState(initialContainerHeight);
  const [numTiles, ] = useState(initialNumTiles);
  const [tileArrangements, setTileArrangements] = useState([]);

  useEffect(() => {
    const calculateTileArrangement = () => {
      const tileWidth = 100; // Constant tile width
      const tileHeight = 150; // Constant tile height
      const tileMargin = 2; // Margin for each tile

      // Effective size considering margins
      const effectiveTileWidth = tileWidth + (tileMargin * 2);
      const effectiveTileHeight = tileHeight + (tileMargin * 2);

      // Calculate max tiles per row and column based on container dimensions
      const maxTilesPerRow = Math.floor(containerWidth / effectiveTileWidth);
      const maxRows = Math.floor(containerHeight / effectiveTileHeight);

      // Calculate the max number of tiles that could fit within the container
      const maxPossibleTiles = maxTilesPerRow * maxRows;

      // Determine the actual number of tiles to render
      const totalTiles = Math.min(numTiles, maxPossibleTiles);

      // Generate the tile arrangements
      const tiles = [];
      for (let i = 0; i < totalTiles; i++) {
        const tile = { width: tileWidth, height: tileHeight, margin: tileMargin };
        tiles.push(tile);
      }

      setTileArrangements(tiles);
    };

    calculateTileArrangement();
  }, [containerWidth, containerHeight, numTiles]);
  
  return (
    <div style={{ width: containerWidth, height: containerHeight, border: '1px solid black', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tileArrangements.map((tile, index) => (
          <div
            key={index}
            style={{
              width: tile.width,
              height: tile.height,
              backgroundColor: `hsl(${index * 360 / tileArrangements.length}, 100%, 50%)`,
              margin: tile.margin,
              boxSizing: 'border-box' // Include the padding and border in the element's width and height
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default BestFitTileArrangement;