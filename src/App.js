import { useState } from 'react';

// UI
// UI를 수정하고 싶을 때 건드리는 함수.
export default function App() {
  // chageMode <- 모드를 바꿀 수 있는 함수가 필요한 것이기 때문에 setState를 가져올 필요는 없다. 최종 사용자가 쓰기 편한 형태
  const [isLightMode, changeMode] = useToggle(true); // 그냥 return 값, 결과 -> 로직 아님.
  // 배열, 객체 -> 여러가지 요소를 묶음 처리한다.
  // 차이점? 요소를 구분 짓는 기준
  // 배열의 경우 index(순서), 객체의 경우 key(이름)
  // 배열과 객체를 사용할 때, 각각 순서와 key가 중요하다.
  // 배열을 구조분해 할당할 때 순서만 지켜주면 이름을 원하는대로 바꿀 수 있다.
  // 객체를 구조분해 할당하려면 key값을 똑같이 맞춰줘야 한다. {state: isLightMode, changeToggle: changeMode} 이렇게 바꿔서 쓸 수는 있음.

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
