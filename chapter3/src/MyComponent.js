const MyComponent = ({name, children}) => {
  return (
    <>
      <div>나의 새롭고 멋진 컴포넌트</div>
      <div>안녕하세요, 제 이름은 {name} 입니다.</div>
      <div>Children 값은 {children} 입니다.</div>
      <br/>
    </>
  );
};

// default props로 props 값이 넘어오지 않을 경우 기본값 지정.
MyComponent.defaultProps = {
  name: "기본 이름"
};


export default MyComponent;