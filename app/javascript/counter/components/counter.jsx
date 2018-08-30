import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
  // コンポーネントが自身の状態をstateに持つ時代は終わりを迎えました。
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     count: props.count
  //   }
  // }

  // handleUp = () => {
  //   this.setState({
  //     count: ++this.state.count
  //   })
  // }

  // handleDown = () => {
  //   this.setState({
  //     count: --this.state.count
  //   })
  // }

  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <button onClick={this.props.onClickCountUp}>+</button>
        <button onClick={this.props.onClickCountDown}>-</button>
      </div>
    )
  }
}

// これもreduxで賄える
// Counter.defaultProps = {
//   count: 0
// }


Counter.PropTypes = {
  count: PropTypes.number.isRequired,
  onClickCountUp: PropTypes.func.isRequired,
  onClickCountDown: PropTypes.func.isRequired
}
