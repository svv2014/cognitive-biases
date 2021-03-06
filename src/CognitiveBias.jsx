import {hot} from 'react-hot-loader';
import React from 'react';
import './css/common.css';
import './CognitiveBias.css';
import {strings, biasCategoriesColor, languages} from "./languages/localizationStrings";
import ReactGA from "react-ga";
import BiasBox from "./component/BiasBox";
import CategoryBox from "./component/CategoryBox";
import {Cookies} from "react-cookie";

ReactGA.initialize('UA-215872888-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class CognitiveBias extends React.Component {


    categories() {
        console.log(strings);
        return strings.cognitiveBiases.categories;
    }

    cognitiveBiases() {
        return strings.cognitiveBiases.biases
    }

    constructor(props) {
        super(props);
        this.state = {
            categories: this.categories(),
            cognitiveBiases: this.cognitiveBiases()
        };
    }

    changeLanguage(lang) {
        strings.setLanguage(lang);
        new Cookies().set("lang", lang);
        this.setState({
            categories: strings.cognitiveBiases.categories,
            cognitiveBiases: strings.cognitiveBiases.biases,
            date: new Date()
        });
        ReactGA.event({
            category: 'Language',
            action: 'Button',
            label: lang,
            value: 1
        });
    }

    render() {

        return (<div className="bias_page">

            <div className={"bias_languages"}>
                <div className={"bias_title"}>{this.state.cognitiveBiases.length} {strings.cognitiveBias}</div>
            </div>
            <div className={"bias_languages"}>
                {languages.map( lang =>
                    <img className={"bias_lang_button"} onClick={() => this.changeLanguage(lang.locale)} src={lang.icon} ></img>
                )}
            </div>
            <div className={"bias_container"}>
                {this.state.categories.map(cat =>
                    <CategoryBox name={cat.name} color={biasCategoriesColor[cat.id]}></CategoryBox>
                )
                }
            </div>
            <div className={"bias_container"}>
                {this.state.cognitiveBiases.map(bias =>
                    <BiasBox data={bias} categoryColors={biasCategoriesColor}/>
                )}
            </div>
        </div>)
    }
}

export default hot(module)(CognitiveBias);
