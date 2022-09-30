# Chapter 6. 컴포넌트 반복

## 배열 다루기
### map()
```jsx
arr.map(callback, [thisArg])
```
배열을 규칙을 적용해 새로운 배열을 만들어 내는 함수.

### 데이터 배열을 컴포넌트 배열로 변환
```jsx
const newList = oldList.map(data => <li>{data}</li>);
```
`map()`을 응용하여 데이터 배열을 컴포넌트 배열로 변환할 수 있다.

### key
- 어떤 원소에 변동이 있었는지 확인하기 위해 사용.
- `Virtual DOM`을 비교하는 과정에서 key가 없으면 리스트를 순차적으로 비교.
- 하지만 `key`가 있으면 바로 `key`에 해당하는 값을 비교하고 더욱 빠른 리렌더링이 가능해짐.
```jsx
<Article
  title={article.title}
  writer={article.writer}
  key={article.id}
/>
```