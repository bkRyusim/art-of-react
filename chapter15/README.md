# Chapter 15. Context API

## Context API를 사용한 전역 상태 관리
- 컴포넌트 구조가 복잡해질 수록 서로 다른 컴포넌트 간 상태를 공유하고 참조하는 것이 복잡해짐.
- 전역 컨텍스트에서 전역 상태를 관리하면 훨씬 상태 참조가 수월함.
- `Context.Consumer`로 전역 상태 받아옴.
- `Context.Producer`로 전역 상태 수정 가능.