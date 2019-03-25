import React, {Component} from 'react';

class MainSecondPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="main_second-page">
        <div className="main_second-page_wrapper">
          <aside className="main_second-page_left">
              <ul className="main_second-page_left_list">
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">1</a>
                </li>
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">2</a>
                </li>
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">3</a>
                </li>
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">4</a>
                </li>
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">5</a>
                </li>
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">6</a>
                </li>
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">7</a>
                </li>
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">8</a>
                </li>
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">9</a>
                </li>
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">10</a>
                </li>
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">11</a>
                </li>
                <li className="main_second-page_left_item">
                  <a className="main_second-page_left_link" href="#">12</a>
                </li>
              </ul>
          </aside>
          <section className="main_second-page_right">
            <h1 className="main_second-page_right_header">1 класс. Математика</h1>
            <p className="main_second-page_right_description">Вот список всех математических навыков, которые студенты
              изучают в 1-м году обучения! Эти навыки организованы в категории,
              и вы можете навести указатель мыши на любое имя навыка, чтобы просмотреть его. Чтобы начать заниматься,
              просто нажмите на любую ссылку.
              IXL будет отслеживать ваш счет, и вопросы будут автоматически возрастать по мере вашего улучшения!
            </p>

            {/*<div className="main_second-page_right">*/}
            <div className="content-wrapper">

              <section className="main_second-page_right_block">
                <h3 className="main_second-page_right_block_header">Числа и считая до 3</h3>
                <ul className="main_second-page_right_block_list">
                  <li>
                    А.1 <a className="main_second-page_right_block_list_link" href="#">Учимся считать до 3</a>
                  </li>
                  <li>
                    А.2 <a className="main_second-page_right_block_list_link" href="#">Считать до 3</a>
                  </li>
                  <li>
                    А.3 <a className="main_second-page_right_block_list_link" href="#">Подсчет с помощью наклеек - до</a>
                  </li>
                  <li>
                    А.4 <a className="main_second-page_right_block_list_link" href="#">Рассчитать на десять кадров - до 3</a>
                  </li>
                  <li>
                    А.5 <a className="main_second-page_right_block_list_link" href="#">Показывать числа на десяти кадрах - до 3</a>
                    </li>
                  <li>
                    А.6 <a className="main_second-page_right_block_list_link" href="#">Представляют числа - до 3</a>
                  </li>
                </ul>
              </section>
              <section className="main_second-page_right_block">
                <h3 className="main_second-page_right_block_header">Числа и считая до 5</h3>
                <ul className="main_second-page_right_block_list">
                  <li>
                    А.1 <a className="main_second-page_right_block_list_link" href="#">Учимся считать до 3</a>
                  </li>
                  <li>
                    А.2 <a className="main_second-page_right_block_list_link" href="#">Считать до 3</a>
                  </li>
                  <li>
                    А.3 <a className="main_second-page_right_block_list_link" href="#">Подсчет с помощью наклеек - до</a>
                  </li>
                  <li>
                    А.4 <a className="main_second-page_right_block_list_link" href="#">Рассчитать на десять кадров - до 3</a>
                  </li>
                  <li>
                    А.5 <a className="main_second-page_right_block_list_link" href="#">Показывать числа на десяти кадрах - до 3</a>
                  </li>
                  <li>
                    А.6 <a className="main_second-page_right_block_list_link" href="#">Представляют числа - до 3</a>
                  </li>
                  <li>
                    А.1 <a className="main_second-page_right_block_list_link" href="#">Учимся считать до 3</a>
                  </li>
                  <li>
                    А.2 <a className="main_second-page_right_block_list_link" href="#">Считать до 3</a>
                  </li>
                  <li>
                    А.3 <a className="main_second-page_right_block_list_link" href="#">Подсчет с помощью наклеек - до</a>
                  </li>
                  <li>
                    А.4 <a className="main_second-page_right_block_list_link" href="#">Рассчитать на десять кадров - до 3</a>
                  </li>
                </ul>
              </section>
              <section className="main_second-page_right_block">
                <h3 className="main_second-page_right_block_header">Числа и считая до 10</h3>
                <ul className="main_second-page_right_block_list">
                  <li>
                    А.1 <a className="main_second-page_right_block_list_link" href="#">Учимся считать до 3</a>
                  </li>
                  <li>
                    А.2 <a className="main_second-page_right_block_list_link" href="#">Считать до 3</a>
                  </li>
                  <li>
                    А.3 <a className="main_second-page_right_block_list_link" href="#">Подсчет с помощью наклеек - до</a>
                  </li>
                  <li>
                    А.4 <a className="main_second-page_right_block_list_link" href="#">Рассчитать на десять кадров - до 3</a>
                  </li>
                  <li>
                    А.5 <a className="main_second-page_right_block_list_link" href="#">Показывать числа на десяти кадрах - до 3</a>
                  </li>
                  <li>
                    А.6 <a className="main_second-page_right_block_list_link" href="#">Представляют числа - до 3</a>
                  </li>
                </ul>
              </section>
              <section className="main_second-page_right_block">
                <h3 className="main_second-page_right_block_header">Числа и считая до 20</h3>
                <ul className="main_second-page_right_block_list">
                  <li>
                    А.1 <a className="main_second-page_right_block_list_link" href="#">Учимся считать до 3</a>
                  </li>
                  <li>
                    А.2 <a className="main_second-page_right_block_list_link" href="#">Считать до 3</a>
                  </li>
                  <li>
                    А.3 <a className="main_second-page_right_block_list_link" href="#">Подсчет с помощью наклеек - до</a>
                  </li>
                  <li>
                    А.4 <a className="main_second-page_right_block_list_link" href="#">Рассчитать на десять кадров - до 3</a>
                  </li>
                  <li>
                    А.5 <a className="main_second-page_right_block_list_link" href="#">Показывать числа на десяти кадрах - до 3</a>
                  </li>
                  <li>
                    А.6 <a className="main_second-page_right_block_list_link" href="#">Представляют числа - до 3</a>
                  </li>
                  <li>
                    А.1 <a className="main_second-page_right_block_list_link" href="#">Учимся считать до 3</a>
                  </li>
                  <li>
                    А.2 <a className="main_second-page_right_block_list_link" href="#">Считать до 3</a>
                  </li>
                  <li>
                    А.3 <a className="main_second-page_right_block_list_link" href="#">Подсчет с помощью наклеек - до</a>
                  </li>
                  <li>
                    А.4 <a className="main_second-page_right_block_list_link" href="#">Рассчитать на десять кадров - до 3</a>
                  </li>
                </ul>
              </section>
              <section className="main_second-page_right_block">
                <h3 className="main_second-page_right_block_header">Числа и считая за 20</h3>
                <ul className="main_second-page_right_block_list">
                  <li>
                    А.1 <a className="main_second-page_right_block_list_link" href="#">Учимся считать до 3</a>
                  </li>
                  <li>
                    А.2 <a className="main_second-page_right_block_list_link" href="#">Считать до 3</a>
                  </li>
                  <li>
                    А.3 <a className="main_second-page_right_block_list_link" href="#">Подсчет с помощью наклеек - до</a>
                  </li>
                  <li>
                    А.4 <a className="main_second-page_right_block_list_link" href="#">Рассчитать на десять кадров - до 3</a>
                  </li>
                  <li>
                    А.5 <a className="main_second-page_right_block_list_link" href="#">Показывать числа на десяти кадрах - до 3</a>
                  </li>
                  <li>
                    А.6 <a className="main_second-page_right_block_list_link" href="#">Представляют числа - до 3</a>
                  </li>
                </ul>
              </section>
              <section className="main_second-page_right_block">
                <h3 className="main_second-page_right_block_header">Пропустить подсчет</h3>
                <ul className="main_second-page_right_block_list">
                  <li>
                    А.1 <a className="main_second-page_right_block_list_link" href="#">Учимся считать до 3</a>
                  </li>
                  <li>
                    А.2 <a className="main_second-page_right_block_list_link" href="#">Считать до 3</a>
                  </li>
                  <li>
                    А.3 <a className="main_second-page_right_block_list_link" href="#">Подсчет с помощью наклеек - до</a>
                  </li>
                  <li>
                    А.4 <a className="main_second-page_right_block_list_link" href="#">Рассчитать на десять кадров - до 3</a>
                  </li>
                  <li>
                    А.5 <a className="main_second-page_right_block_list_link" href="#">Показывать числа на десяти кадрах - до 3</a>
                  </li>
                  <li>
                    А.6 <a className="main_second-page_right_block_list_link" href="#">Представляют числа - до 3</a>
                  </li>
                </ul>
              </section>
              <section className="main_second-page_right_block">
                <h3 className="main_second-page_right_block_header">Сравнение</h3>
                <ul className="main_second-page_right_block_list">
                  <li>
                    А.1 <a className="main_second-page_right_block_list_link" href="#">Учимся считать до 3</a>
                  </li>
                  <li>
                    А.2 <a className="main_second-page_right_block_list_link" href="#">Считать до 3</a>
                  </li>
                  <li>
                    А.3 <a className="main_second-page_right_block_list_link" href="#">Подсчет с помощью наклеек - до</a>
                  </li>
                  <li>
                    А.4 <a className="main_second-page_right_block_list_link" href="#">Рассчитать на десять кадров - до 3</a>
                  </li>
                  <li>
                    А.5 <a className="main_second-page_right_block_list_link" href="#">Показывать числа на десяти кадрах - до 3</a>
                  </li>
                  <li>
                    А.6 <a className="main_second-page_right_block_list_link" href="#">Представляют числа - до 3</a>
                  </li>
                </ul>
              </section>
              <section className="main_second-page_right_block">
                <h3 className="main_second-page_right_block_header">Сравнение</h3>
                <ul className="main_second-page_right_block_list">
                  <li>
                    А.1 <a className="main_second-page_right_block_list_link" href="#">Учимся считать до 3</a>
                  </li>
                  <li>
                    А.2 <a className="main_second-page_right_block_list_link" href="#">Считать до 3</a>
                  </li>
                  <li>
                    А.3 <a className="main_second-page_right_block_list_link" href="#">Подсчет с помощью наклеек - до</a>
                  </li>
                  <li>
                    А.4 <a className="main_second-page_right_block_list_link" href="#">Рассчитать на десять кадров - до 3</a>
                  </li>
                  <li>
                    А.5 <a className="main_second-page_right_block_list_link" href="#">Показывать числа на десяти кадрах - до 3</a>
                  </li>
                  <li>
                    А.6 <a className="main_second-page_right_block_list_link" href="#">Представляют числа - до 3</a>
                  </li>
                  <li>
                    А.1 <a className="main_second-page_right_block_list_link" href="#">Учимся считать до 3</a>
                  </li>
                  <li>
                    А.2 <a className="main_second-page_right_block_list_link" href="#">Считать до 3</a>
                  </li>
                  <li>
                    А.3 <a className="main_second-page_right_block_list_link" href="#">Подсчет с помощью наклеек - до</a>
                  </li>
                  <li>
                    А.4 <a className="main_second-page_right_block_list_link" href="#">Рассчитать на десять кадров - до 3</a>
                  </li>
                </ul>
              </section>
            </div>
            {/*</div>*/}
          </section>
        </div>

      </section>

    );
  }
}

export default MainSecondPage;