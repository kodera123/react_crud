import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery';
window.$ = $;

export default class CreateMessage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      messages: props.messages,
      message: props.message
    }
  }

  create_message = () => {
    this.setState({
      loading: true
    })

    $.ajax({
      type: 'POST',
      url: '/messages',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        text: 'めんそーれ沖縄'
      }),
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      }
    }).then((response) => {
      const messages = response
      console.log(response)
      this.setState({
        loading: false,
        messages
      })
      console.log(this.state)
    });
  }

  render() {
    const isMessage = this.state.message !== null

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Text</th>
            </tr>
          </thead>

          <tbody>
            {this.state.messages.map((msg) => {
              return (
                <tr>
                  <td>{msg.text}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {isMessage ? '作成できたよ' : 'ないよ'}
        <h2>msg作成</h2>
        <button onClick={this.create_message}>デフォルトメッセージで作成する</button>
      </div>
    )
  }
}

CreateMessage.defaultProps = {
  message: null
}

CreateMessage.propTypes = {
  message: PropTypes.object
}
