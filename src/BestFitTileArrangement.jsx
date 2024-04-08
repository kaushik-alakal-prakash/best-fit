import React, { useState, useEffect } from 'react';

function BestFitTileArrangement({ initialContainerWidth, initialContainerHeight, initialNumTiles }) {
  const [containerWidth, setContainerWidth] = useState(initialContainerWidth);
  const [containerHeight, setContainerHeight] = useState(initialContainerHeight);
  const [numTiles, setNumTiles] = useState(initialNumTiles);
  const [tileArrangements, setTileArrangements] = useState([]);

  useEffect(() => {
    const calculateTileArrangement = () => {
      const tiles = [];
      const tileWidth = 100; // Constant tile width
      const tileHeight = 150; // Constant tile height

      // Calculate max tiles per row and column based on container dimensions
      const maxTilesPerRow = Math.floor(containerWidth / tileWidth);
      const maxRows = Math.floor(containerHeight / tileHeight);

      // Calculate the max number of tiles that could possibly fit based on those row and column numbers
      const maxPossibleTiles = maxTilesPerRow * maxRows;

      // Calculate the actual number of tiles to render
      const totalTiles = Math.min(numTiles, maxPossibleTiles);

      // Generate the tile arrangements
      for (let i = 0; i < totalTiles; i++) {
        const tile = { width: tileWidth, height: tileHeight };
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
              width: `${tile.width}px`,
              height: `${tile.height}px`,
              backgroundColor: `hsl(${index * 360 / tileArrangements.length}, 100%, 50%)`,
              margin: '2px',
              boxSizing: 'border-box'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default BestFitTileArrangement;