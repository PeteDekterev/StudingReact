import React, { useState, useEffect} from 'react';

let renderCount = 0;

function Ref() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    renderCount++
  });

  return (
    <div>
      <h1>Количество рендеров: {renderCount}</h1>
      <input type="text" onChange={e => setValue(e.target.value)} value={value}/>
    </div>
  );
}

export default Ref;