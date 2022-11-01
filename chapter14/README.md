# Chapter 14. 외부API를 연동하여 뉴스 뷰어 만들기

## 비동기 작업

- 클라이언트에서 여러 서버로 Ajax로 요청을 보내면, 응답시간이 서버마다 다른 경우, 동기적으로 처리하면 첫 요청에 대한 응답을 받고 나서야 다음 요청을 보냄.
- 하지만 비동기적으로 처리하면 모든 요청을 한 번에 보내고, 응답을 받을 때 마다 처리하기 떄문에 훨씬 빨리 처리할 수 있음.

## Promise

### 콜백 지옥

- 다음 코드는 여러번 순차적으로 콜백을 이용해 실행하는 코드임.
  ```js
  function increase(number, callback) {
    setTimeout(() => {
      const result = number + 10;
      if (callback) {
        callback(result);
      }
    }, 1000)
  }
  
  console.log('Start');
  increase(0, result => {
    console.log(result);
    increase(result, result => {
      console.log(result);
      increase(result, result => {
        console.log(result);
        increase(result, result => {
          console.log(result);
          console.log('End')
        })
      })
    })
  })
  ```
- 가독성이 너무 나쁨.

### Promise

```js
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number += 10;
      if (result > 50) {
        const e = new Error('NumberTooBig');
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

increase(0).then(number => {
  consoole.log(number);
  return increase(number);
}).then(number => {
  consoole.log(number);
  return increase(number);
}).then(number => {
  consoole.log(number);
  return increase(number);
}).then(number => {
  consoole.log(number);
  return increase(number);
}).then(number => {
  consoole.log(number);
  return increase(number);
}).catch(e => {
  console.log(e);
})
```

### async/ await

```js
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number += 10;
      if (result > 50) {
        const e = new Error('NumberTooBig');
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

async function runTasks() {
  try {
    let result = await increase(0);
    console.log(result);
    result = await increase(0);
    console.log(result);
    result = await increase(0);
    console.log(result);
    result = await increase(0);
    console.log(result);
    result = await increase(0);
    console.log(result);
    result = await increase(0);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
```

## axios
- HTTP 클라이언트
- HTTP 호출 시 사용
- `Promise` 기반으로 처리