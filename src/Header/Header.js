import React, {Component} from 'react';

class Header extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <header className="header">
        <section className="header-top">
          <div className="header-top_nav">
            <p className="header-top_nav-logo_wrapper">
              <a className="header-top_logo" href="#">
                <img src="./image/icon-ixl-logo-156.png" alt="Учусь" width="156" height="56"/>
              </a>
            </p>
            <p className="header-top_search">
              <button type="button" className="header-top_search-label btn-null">
                <svg xlink= "http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 17 17"
                >
                  <path className="search_icon" fill="#bfbfbf" d="M15.604,13.831l-3.14-3.14c0.795-1.158,1.2-2.512,1.2-3.852c0-1.758-0.669-3.503-1.996-4.843 C10.328,0.67,8.583,0,6.825,0C5.08,0,3.336,0.67,1.996,1.996C0.67,3.336,0,5.08,0,6.839c0,1.745,0.67,3.489,1.996,4.83 c1.34,1.325,3.085,1.996,4.829,1.996c1.354,0,2.708-0.391,3.866-1.186l3.141,3.126c0.488,0.503,1.284,0.503,1.773,0 C16.092,15.115,16.092,14.32,15.604,13.831z M10.494,10.495c-0.993,1.01-2.302,1.507-3.627,1.507c-1.308,0-2.617-0.497-3.61-1.507 C2.247,9.501,1.75,8.193,1.75,6.884c0-1.308,0.497-2.633,1.507-3.627c0.994-0.994,2.302-1.507,3.61-1.507 c1.325,0,2.634,0.513,3.627,1.507c0.994,0.994,1.507,2.319,1.507,3.627C12.002,8.193,11.505,9.501,10.494,10.495z"/>
                </svg>
              </button>
              <input className="header-top_search-input" type="search" autoComplete="off" name="search" id="search"
                     maxLength="200" placeholder="Поиск заданий"/>
            </p>
            <section className="header-top_registration">
              <form className="registration-form" action="">
                <label htmlFor="login_login">
                  <input className="registration-form_input" id="login_login" type="text" placeholder="Логин"/>
                </label>
                <label htmlFor="login_password">
                  <input className="registration-form_input" id="login_password" type="password" placeholder="Пароль"/>
                </label>
                <button className="btn-null registration-form_button  -member">Войти</button>
              </form>
              <button className="btn-null registration-form_button registration-form_button-reg  -member">Регистрация
              </button>
            </section>
          </div>
        </section>
        <section className="header-bottom">
          <div className="header-bottom_nav">
            <div className="header-bottom_nav-left">
              <ul className="header-bottom_list">
                <li className="header-bottom_item">
                  <a className="header-bottom_link" href="#">Обучение</a>
                </li>
                <li className="header-bottom_item">
                  <a className="header-bottom_link" href="#">Аналитика</a>
                </li>
              </ul>
            </div>
            <div className="header-bottom_nav-right">
              <ul className="header-bottom_list">
                <li className="header-bottom_item">
                  <a className="header-bottom_link -member" href="#">Наш Клуб</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;