import React, {Component} from 'react';
import SubBlock from "./subBlock"

class subMain extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <li className="main-item" key={this.props.item.number.toString()}>
        <section className={`class class_${this.props.item.number}`}>
          <a className={`class-link class-link_${this.props.item.number}`} href="#">{this.props.item.number}</a>
          <h2 className="class-header">
            <a className={`class-header_link${this.props.item.number}`} href="#">{this.props.item.name} {this.props.item.name.includes("ВУЗ")? null : " класс"}  </a>
          </h2>
          <div className="class-wrapper">
            <div className="class-description">
              {this.props.item.classDescription}<span className="class-description_more">{this.props.item.classDescriptionMore}</span>
            </div>
            <ul className="class-footer links-list">
              <SubBlock subjects={this.props.item.subjects}/>
            </ul>
          </div>
        </section>
      </li>
    );
  }
}

export default subMain;