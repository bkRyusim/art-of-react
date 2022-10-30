# Chapter 12. immer

## immer
- 불변성을 지키기 힘든 경우(object 구조가 복잡해서 deepcopy하기 어려울 때) 사용할 수 있음.
- produce(originalState, Callback) 형태로 사용.
- 첫번째 파라미터가 함수 형태라면 업데이트 함수를 반환. `useState`의 함수형 업데이트 이용가능.