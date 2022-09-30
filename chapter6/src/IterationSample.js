import React, {useState} from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    {id: 1, text: '눈사람'},
    {id: 2, text: '얼음'},
    {id: 3, text: '눈'},
    {id: 4, text: '바람'},
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);

  const onClick = () => {
    const next = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(next);
    setInputText('');
  }

  const onKeyPressed = e => {
    if (e.key === 'Enter' && inputText !== '') onClick();
  }

  const onDoubleClick = id => {
    const next = names.filter(name => name.id !== id);
    setNames(next);
  }

  const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onDoubleClick(name.id)}>{name.text}</li>)

  return (
    <>
      <ul>{namesList}</ul>
      <input
        value={inputText}
        onChange={onChange}
        onKeyPress={onKeyPressed}
      />
      <button
        onClick={onClick}
      >
        추가
      </button>
    </>

  );
}

export default IterationSample;