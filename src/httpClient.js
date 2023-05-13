// http 요청에 대한 횡단 관심사를 처리하는 모듈
// 어떻게 쓰일지 쓰는 입장에서 생각해보기
// 이미 익숙한 그냥 fetch랑 똑같은 형태로 만들면 안되나?
// fetch랑 똑같은데, auth랑 base_url 처리가 된 모듈을 만들어보자
// 즉, 쓰는 입장에서 fetch랑 똑같은 형태로 사용할 수 있어야 한다. (=== fetch랑 똑같은 형태로 약속을 해줘야 한다.)

// interface (어떻게 쓰일지에 대한 약속)
// fetch(endPoint, options):Promise (Response객체를 Promise형태로 리턴해준다.)

// 이 코드의 경우 BASE_URL이라는 상태를 기억하고 싶으니까, class를 이용하는 것이 좋다.

class HttpClient {
  base_url = 'https://jsonplaceholder.typicode.com/';

  fetch(endPoint, options) {
    return window.fetch(this.base_url + endPoint, options);
  }
}
const httpClient = new HttpClient();

export { httpClient };
