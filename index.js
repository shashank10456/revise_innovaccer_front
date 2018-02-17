import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./components/navbar";
import MainDisplay from "./components/main_display";
import FeatureDisplay from "./components/features_display";
import RegisterForm from "./components/register_form";

class MainPage extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <MainDisplay/>
                <FeatureDisplay/>
                <RegisterForm/>

            </div>
        );
    }
}

ReactDOM.render(<MainPage/>,document.querySelector('.apoorv'));