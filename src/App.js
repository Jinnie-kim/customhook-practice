import { httpClient } from './httpClient';

export default function App() {
  // const request = () => {
  //   // 2. BASE_URL 설정
  //   fetch('https://jsonplaceholder.typicode.com/todos', {
  //     // Authorization, 인증, 횡단 관심사를 처리
  //     // 1. header에 Authorization추가
  //     headers: {
  //       Authorization: 'ACCESS_TOKEN',
  //     },
  //   });
  // };

  const request = () => {
    httpClient.fetch('todos', {
      method: 'GET',
    });
  };

  return (
    <>
      <h1>Cross Cutting Concerns</h1>
      <button onClick={request}>request</button>
    </>
  );
}

// http 요청에 대한 횡단 관심사를 처리하는 모듈
// 어떻게 쓰일지 쓰는 입장에서 생각해보기
// 이미 익숙한 그냥 fetch랑 똑같은 형태로 만들면 안되나?
// fetch랑 똑같은데, auth랑 base_url 처리가 된 모듈을 만들어보자
// 즉, 쓰는 입장에서 fetch랑 똑같은 형태로 사용할 수 있어야 한다. (=== fetch랑 똑같은 형태로 약속을 해줘야 한다.)
