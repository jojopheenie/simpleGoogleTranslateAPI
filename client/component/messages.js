/* eslint-disable */
import React, {Component} from 'react'
import { translateOne } from '../store/reducer/message'
import {connect} from 'react-redux'
import { Button, Form, Container, Row, Alert, OverlayTrigger, Tooltip } from 'react-bootstrap'

export class Messages extends Component {
  constructor() {
    super()
    this.state = {
      message: '',
      lang: 'ENG',
      show: false
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.Show = this.Show.bind(this)
  }

  onChange(event) {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }

  Show() {
    let {show} = this.state
    this.setState({
      show: !show
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let message = this.state.message
    let lang = this.state.lang
        try {
          this.props.translateOne(message, lang)
        } catch (err) {
          console.error(err)
        }
      this.setState({
        message: '',
        lang: 'ENG',
        translate: ''
      })
    }

  render() {
      return (
        <Container>
          <br />
          <Row></Row>
        <Form className="text-center" onSubmit={this.handleSubmit}>
        <Form.Control
          placeholder="Type here"
          type="text"
          aria-label="sending text"
          defaultValue={this.state.message}
          name="message"
          onChange={this.onChange}
        />
        <Form.Control
            as="select"
            name="lang"
            type="select"
            defaultValue={this.state.lang}
            onChange={this.onChange}>
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
          <Button
            variant="secondary"
            type="submit"
            onClick={() => {this.handleSubmit(); this.Show();}}
          >Translate</Button>
          <OverlayTrigger
             key="placement"
             placement="top"
             overlay={
               <Tooltip id="tooltip-top">
                 {this.props.translate}
               </Tooltip>
             }
           >
            <h6 className="text-center">Hover for result</h6>
          </OverlayTrigger>
      </Form>
      </Container>
  )
  }
}

const mapState = state => {
  return {
    translate: state.translate
  }
}

const mapDispatch = dispatch => {
  return {
    translateOne: (message, lang) =>
      dispatch(translateOne(message, lang))
  }
}

export default connect(mapState, mapDispatch)(Messages)
