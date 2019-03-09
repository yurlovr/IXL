import React, {Component} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Featured from "./Featured/featured";
import Main from "./MAIN/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.classBlock =[
      {
        number: 1,
        name: "Первый",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 231,
          },
          {
            subject: "Грамота",
            quantity: 231
          }
        ]
      },
      {
        number: 2,
        name: "Второй",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 220,
          },
          {
            subject: "Грамота",
            quantity: 221
          }
        ]
      },
      {
        number: 3,
        name: "Третий",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 220,
          },
          {
            subject: "Грамота",
            quantity: 221
          }
        ]
      },
      {
        number: 4,
        name: "Четвертый",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 220,
          },
          {
            subject: "Грамота",
            quantity: 221
          }
        ]
      },
      {
        number: 5,
        name: "Пятый",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 220,
          },
          {
            subject: "Грамота",
            quantity: 221
          }
        ]
      },
      {
        number: 6,
        name: "Шестой",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 220,
          },
          {
            subject: "Грамота",
            quantity: 221
          }
        ]
      },
      {
        number: 7,
        name: "Седьмой",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 220,
          },
          {
            subject: "Грамота",
            quantity: 221
          }
        ]
      },
      {
        number: 8,
        name: "Восьмой",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 220,
          },
          {
            subject: "Грамота",
            quantity: 221
          }
        ]
      },
      {
        number: 9,
        name: "Девятый",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 220,
          },
          {
            subject: "Грамота",
            quantity: 221
          }
        ]
      },
      {
        number: 10,
        name: "Десятый",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 220,
          },
          {
            subject: "Грамота",
            quantity: 221
          }
        ]
      },
      {
        number: 11,
        name: "Одиннадцатый",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 220,
          },
          {
            subject: "Грамота",
            quantity: 221
          }
        ]
      },
      {
        number: 12,
        name: "Подготовка в ВУЗ",
        classDescription: "Сложение и вычитание. Время. Единицы измерения и",
        classDescriptionMore: "многое другое.",
        subjects: [
          {
            subject: "Математика",
            quantity: 220,
          },
          {
            subject: "Грамота",
            quantity: 221
          }
        ]
      },
  ];
    this.renderBlock = this.renderBlock.bind(this)
  }

  renderBlock () {
    return(
      this.classBlock.map((i)=>{
        return <Main classBlock={this.classBlock} key={Math.random()}/>
      })
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <main className="main">
          <Featured/>
          <section className="main_block">
            <ul className="main-list">
              {this.renderBlock()}
              {/*<Main classBlock={this.classBlock}/>*/}
            </ul>
          </section>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
