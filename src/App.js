// COMPONENTS
import {Header} from "./components/Header/Header";
import {Features} from "./containers/Features/Features";
import {Delimiter} from "./components/Delimiter/Delimiter";
import {Footer} from "./components/Footer/Footer";
import {KeyMoments} from "./containers/KeyMoments/KeyMoments";
import {Spheres} from "./containers/Spheres/Spheres";
import {Tariffs} from "./containers/Tariffs/Tariffs";
import {Reviews} from "./containers/Reviews/Reviews";
import {Process} from "./containers/Process/Process";
// INSTRUMENTS
import {useWindowSize} from "./utils/utils";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// STYLES
import './App.scss';
import {Button} from "./components/Button/Button";

const Layout = ({width, children, className}) => {
    return <div className={className}>
        <Header width={width}/>
        {children}
        <Footer/>
    </div>
}

const getMainPage = (width) => {
    return <Layout width={width}>
        <Features width={width}/>
        <Delimiter/>
        <Process width={width}/>
        <Delimiter/>
        <KeyMoments/>
        <Delimiter/>
        <Spheres/>
        <Delimiter/>
        <Reviews/>
        <Tariffs/>
    </Layout>
}

const getNotFoundPage = (width) => {
    return <Layout width={width} className='notFoundPage'>
        <div className='notFoundWrapper'>
            <p className='notFoundWrapper_error'>404</p>
            <p className='notFoundWrapper_msg'>Извините, страница не была найдена</p>
            <Button
                name={'Перейти на главную'}
                isBlue={true}
                styles={{margin: '0 auto', marginTop: '15px'}}
                onClick={() => window.location.href = "/"}
            />
            {/*<Link to="/" className='notFoundWrapper_link'>Перейти на главную</Link>*/}
        </div>
    </Layout>
}

function App() {
    let {width} = useWindowSize();

    return<BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => getMainPage(width)} />
            <Route path="*" render={() => getNotFoundPage(width)} />
        </Switch>
    </BrowserRouter>
}

export default App;
