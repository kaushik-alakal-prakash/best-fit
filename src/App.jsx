import React, { useState, useEffect } from 'react';
import BestFitTileArrangement from './BestFitTileArrangement';

function App() {
  const [numTiles, setNumTiles] = useState(22);
  const [containerWidth, setContainerWidth] = useState(800);
  const [containerHeight, setContainerHeight] = useState(500); // Set this to an appropriate value

  return (
    <>
      <div>
        <label htmlFor="numTiles">Number of tiles:</label>
        <input
          type="number"
          id="numTiles"
          value={numTiles}
          onChange={(event) => {
            const newNumTiles = parseInt(event.target.value, 10);
            if (!isNaN(newNumTiles) && newNumTiles > 0) {
              setNumTiles(newNumTiles);
            }
          }}
        />
      </div>
      <BestFitTileArrangement
        initialContainerWidth={containerWidth}
        initialContainerHeight={containerHeight}
        initialNumTiles={numTiles}
      />
    </>
  );
}

export default App;
