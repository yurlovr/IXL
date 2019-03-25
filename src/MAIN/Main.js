import React, {Component} from 'react';
import SubMain from "./subMain"

class Main extends Component {
  constructor(props) {
    super(props);
    this.renderBlock = this.renderBlock.bind(this);
  }

  renderBlock() {
    return (
      this.props.classBlock.map((i) => {
        return (
        <SubMain item={i} key={Math.random()}/>
        );
      })
    );
  }

  render() {
    return (
    this.renderBlock()
    )
  }
}

export default Main;