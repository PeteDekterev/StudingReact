import React, { useState, useEffect  } from 'react';

function Example() {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0);
  // Такой синтаксис называется «деструктуризацией массивов (array destructuring)»
  // Следующая запись аналогична:
  // var countStateVars = useState(0); // Возвращает пару значений
  // var count = countStateVars[0]; // Извлекаем первое значение
  // var setCount = countStateVars[1]; // Извлекаем второе значение

  // По принципу componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  const onClickBtn = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={onClickBtn}>
        Нажми на меня
      </button>
    </div>
  );
}

export default Example;