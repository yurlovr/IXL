import React, {Component} from 'react';
import SubBlock from "./subBlock"

class Main extends Component {
  constructor(props) {
    super(props);
    this.renderBlock = this.renderBlock.bind(this);
  }

  renderBlock() {
    return (
      this.props.classBlock.map((i) => {
        return (
          <li className="main-item" key={i.number.toString()}>
            <section className={`class class_${i.number}`}>
              <a className={`class-link class-link_${i.number}`} href="#">{i.number}</a>
              <h2 className="class-header">
                <a className={`class-header_link${i.number}`} href="#">{i.name} {i.name.includes("ВУЗ")? null : " класс"}  </a>
              </h2>
              <div className="class-wrapper">
                <div className="class-description">
                  {i.classDescription}<span className="class-description_more">{i.classDescriptionMore}</span>
                </div>
                <ul className="class-footer links-list">
                  <SubBlock subjects={i.subjects}/>
                </ul>
              </div>
            </section>
          </li>
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