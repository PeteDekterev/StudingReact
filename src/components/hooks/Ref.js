import React, { useState, useEffect, useRef} from 'react';

function Ref() {
  const [value, setValue] = useState(0);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++
  });

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <input type="text" onChange={e => setValue(e.target.value)} value={value}/>
    </div>
  );
}

export default Ref;