import React, {Component} from "react";
import PropTypes from "prop-types";

class MyClassComponent extends Component {
  static defaultProps = {
    name: '기본 이름'
  }

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  }

  render() {
    //비구조화 할당
    const {name, favoriteNumber, children} = this.props;
    return (
      <>
        <div>안뇽하세요, 제 이름은 {name}입니다.</div>
        <div>Children 값은 {children}입니다.</div>
        <div>제가 좋아하는 숫자는 {favoriteNumber}입니다.</div>
      </>
    )
  }
}

export default MyClassComponent;