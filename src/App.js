import { useState } from 'react';

export default function App() {
  const [isLightMode, changeMode] = useToggle(true);

  return (
    <>
      <h1
        style={{
          backgroundColor: isLightMode ? 'white' : 'black',
          color: isLightMode ? 'black' : 'white',
        }}
      >
        current mode: {isLightMode ? 'Light Mode' : 'Dark Mode'}
      </h1>
      <button onClick={changeMode}>change mode</button>
    </>
  );
}

const useToggle = (defaultValue) => {
  const [toggle, setToggle] = useState(defaultValue);

  const changeToggle = () => {
    setToggle((prev) => !prev);
  };

  return [toggle, changeToggle];
};
