import React, {useEffect} from "react";
// COMPONENTS
import {ThanksPage} from "./pages/ThanksPage/ThanksPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {MainPage} from "./pages/MainPage/MainPage";
// INSTRUMENTS
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useWindowSize} from "./utils/utils";
import {Layout} from "./layouts/Layout";
// STYLES
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
    let {width} = useWindowSize();

    useEffect(() => {
        const div = document.querySelector('#anchor');

        if(window.location.pathname !== '/') {
            div.classList.add("pageWrapper")
        } else {
            div.classList.remove("pageWrapper")
        }
    }, [window.location.pathname]);

    return <BrowserRouter>
        <div id='anchor' >
            <Layout width={width}>
                <Switch>
                    <Route exact path="/" render={() => <MainPage width={width} />} />
                    <Route exact path="/thanks" render={() => <ThanksPage width={width} />} />
                    <Route path="/*" render={() => <NotFoundPage width={width}/>} />
                </Switch>
            </Layout>
        </div>
    </BrowserRouter>
}

export default App;
