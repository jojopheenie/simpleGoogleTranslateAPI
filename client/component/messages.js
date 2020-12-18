/* eslint-disable */
import React, {Component} from 'react'
import { translateOne } from '../store'
import {connect} from 'react-redux'
import { Form, InputGroup, Button} from 'react-bootstrap'

export class Messages extends Component {
  constructor() {
    super()
    this.state = {
      message: '',
      translate: {},
      lang: 'ENG'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.translate = this.translate.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
      event.preventDefault()
        try {
          this.props.translateOne(message, lang)
        } catch (err) {
          console.error(err)
        }
      this.setState({
        message: ''
      })
    }

  render() {
      return (
        <div>
      <InputGroup className="m-2 pr-3">
        <FormControl
          placeholder="Type here"
          as="textarea"
          type="text"
          value={props.message}
          name="new-message"
          onChange={props.handleChange}
        />
        <Form.Control
            as="select"
            name="language"
            type="language"
            value={props.lang}
          >
            <option value="ENG">English </option>
            <option value="ARA">Arabic</option>
            <option value="CHI">Chinese</option>
            <option value="FIL">Filipino</option>
            <option value="FRE">French</option>
            <option value="HIN">Hindi</option>
            <option value="ja">Japanese</option>
            <option value="KOR">Korean</option>
            <option value="RUS">Russian</option>
            <option value="SPA">Spanish</option>
          </Form.Control>
        <InputGroup.Append>
          <Button
            variant="secondary"
            type="submit"
            onClick={props.handleSubmit}
          >Send</Button>
        </InputGroup.Append>
      </InputGroup>
      <div><h4>{this.props.translate ? (<div>{this.props.translate}</div>) : (<div></div>)}</h4></div>
    </div>
  )
  }
}

const mapState = state => {
  return {
    translate: state.translated
  }
}

const mapDispatch = dispatch => {
  return {
    translateOne: (message, lang) =>
      dispatch(translateOne(message, lang)),
  }
}

export default connect(mapState, mapDispatch)(Messages)
