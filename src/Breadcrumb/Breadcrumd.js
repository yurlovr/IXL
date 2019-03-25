import React, {Component} from 'react';

class Breadcrumd extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="main_second-wrapper">
        <nav className="site-nav-breadcrumb">
          <ul className="site-nav-breadcrumb_list">
            <li className="site-nav-breadcrumb_item">
              <a href="#">Главная</a>
            </li>
            <li className="site-nav-breadcrumb_item">
              <a href="#">Класс</a>
            </li>
            <li className="site-nav-breadcrumb_item">
              <a href="#">Тема</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Breadcrumd;