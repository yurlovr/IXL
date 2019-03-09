import React, {Component} from 'react';

class SubBlock extends Component {
  constructor(props) {
    super(props);
    this.renderBlock = this.renderBlock.bind(this);
  }

  renderBlock() {
    return (
      this.props.subjects.map((i) => {
          return (
            <li className="link-item" key={Math.random()}>
              <span className="link-description">{i.subject}</span>
              <a className="link-link" href="#"><span className="link-link_text">{i.quantity}</span></a>
            </li>
          );
        }
      )
    );
  }


  render() {
    return (
      this.renderBlock()
    );
  }
}

export default SubBlock;