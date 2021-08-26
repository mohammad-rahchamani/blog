import React from 'react'
import Typed from 'typed.js'

export class TypeComponent extends React.Component {
  componentDidMount() {
    const options = {
      strings: this.props.words,
      typeSpeed: this.props.typeSpeed ?? 50,
      backSpeed: this.props.backSpeed ?? 50,
      showCursor: this.props.showCursor ?? true,
      loop: this.props.loop ?? false,
      cursorChar: this.props.cursorChar ?? '|',
    }
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }
  componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy()
  }

  render() {
    return (
      <>
        <span
          className={this.props.className ?? ''}
          style={{ whiteSpace: 'pre' }}
          ref={(el) => {
            this.el = el
          }}
        />
      </>
    )
  }
}
