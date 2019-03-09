import React, {Component} from 'react';

class Featured extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <section className="featured">
        <h2 className="featured_header">
          <a className="featured_header-link" href="#">Придумать заголовок</a>
        </h2>
        <ul className="featured_list">
          <li className="featured_item">
            <h3 className="featured_item-header featured_item-header-first">Комплексные тесты</h3>
            <p className="featured_item-description featured_item-description_first">
              <a href="#">Математика</a>
              <span className="featured_item-description_first-bull">	&bull; </span>
              <a href="#">Грамота</a>
              <span className="featured_item-description_first-bull">	&bull; </span> <br/>
              <i>и другие предметы... </i>
            </p>
            <a className="featured_item-description-link" href="#"></a>
          </li>
          <li className="featured_item">
            <h3 className="featured_item-header featured_item-header-second">
              Доверие педагогов и родителей
            </h3>
            <p className="featured_item-description featured_item-description_second">
              Более
              <a href="#"><strong><i>1 миллиона</i></strong></a> тестов по всем предметам школьной программы.
            </p>
          </li>
          <li className="featured_item">
            <h3 className="featured_item-header featured_item-header-third">Индивидуальный подход</h3>
            <p className="featured_item-description featured_item-description_third">
              <ul className="featured_item-description_third-list">
                <li className="featured_item-description_third-item">
                  <a href="#">
                    Аналитика
                  </a>
                </li>
                <li className="featured_item-description_third-item">
                  <span className="featured_item-description_third-bull">	&bull; &nbsp;	 </span>
                  <a href="#">
                    Рекомендации
                  </a>
                </li>
                <li className="featured_item-description_third-item">
                  <a href="#">
                    Награды
                  </a>
                </li>
              </ul>
              <a className="featured_item-description-link featured_item-description-link-third" href="#"></a>
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Featured;


