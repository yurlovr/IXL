import React, {Component} from 'react';
import Breadcrumd from "../Breadcrumb/Breadcrumd";
import MainSecondPage from "../MAIN/MainSecondPage";

class SecondPage extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <React.Fragment>
        <Breadcrumd/>
        <MainSecondPage/>
      </React.Fragment>
    );
  }
}

export default SecondPage;