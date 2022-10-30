# Chapter 13. 리액트 라우터로 SPA 개발하기

## 라우팅
- 사용자가 요청한 URL에 따라 알맞은 페이지를 보여주는 것.
- `React Router` : 컴포넌트 기반으로 라우팅
- `Next.js` : 리액트 프로젝트 프레임워크. SSR 지원.

## SPA
- Single Page Application
- 하나의 페이지로 이루어진 애플리케이션.
- SSR(Server Side Rendering) : 서버에서 렌더링한 html파일을 route마다 새로 받아오는 것.
- CSR(Client Side Rendering) : 하나의 html파일에서 필요한 부분만 JS를 활용해 업데이트.


## React Router
- `App.js`에 `<Routes>`, `<Route>` 이용해 라우팅 정보 설정.
- `<Link>` 이용해 하이퍼링크 생성
- `<Outlet>` 이용해 하위 라우트 요소들 렌더링
- index prop 사용하면 상위 라우터와 일치
- `useNavigates`는 `Link`를 사용하지 않고 다른 페이지로 이동하는 hook.
- `*` wildcard 이용하면 404 페이지 만들 수 있음.