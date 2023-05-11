import { useState } from 'react';

// UI
// UI를 수정하고 싶을 때 건드리는 함수.
export default function App() {
  // chageMode <- 모드를 바꿀 수 있는 함수가 필요한 것이기 때문에 setState를 가져올 필요는 없다. 최종 사용자가 쓰기 편한 형태
  const [isLightMode, changeMode] = useToggle(true); // 그냥 return 값, 결과 -> 로직 아님.

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

// 로직이 있는 함수. useToggle
// 인자로 initialValue 를 초기값으로 받아줄게
// 리턴 값으로는 배열안에 첫번째는 true, false로 표현되는 state
// 두 번째는 그걸 반대로 바꿀 수 있는 함수
// useToggle(initialValue: boolean):[boolean, 반대로 바꾸는 함수]
const useToggle = (initialValue) => {
  // boolean(true, fals) -> number(0 == false, 1 == true);
  const [toggle, setToggle] = useState(initialValue ? 1 : 0);

  // 구체적인 로직 부분
  const changeToggle = () => {
    setToggle((prev) => (prev === 0 ? 1 : 0));
  };

  const state = toggle === 0 ? false : true;

  return [state, changeToggle];
};
