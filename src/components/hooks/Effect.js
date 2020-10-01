import React, { useState, useEffect  } from 'react';

function Effect() {
  const [type, setType] = useState(0);
  const [date, setDate] = useState(0);
  const [pos, setPos] = useState({
      x: 0,
      y: 0
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setDate(json))
    return() => {
      console.log('clean type')
    }
  },[type]);

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    });
  }

  useEffect(() => {
    console.log('ComponentDidMount')
    window.addEventListener('mousemove', mouseMoveHandler)
    return() => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  },[]);

  return (
    <div>
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Посты</button>
      <pre>{JSON.stringify(pos, null,2)}</pre>
    </div>
  );
}

export default Effect;