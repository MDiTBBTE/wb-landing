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
// STYLES
import './App.scss';

function App() {

    let window = useWindowSize();

    return (
    <div>
        <Header window={window}/>
        <Features window={window}/>
        <Delimiter/>
        <Process window={window}/>
        <Delimiter/>
        <KeyMoments/>
        <Delimiter/>
        <Spheres/>
        <Delimiter/>
        <Reviews/>
        <Tariffs/>
        <Footer/>
    </div >
  )
}

export default App;
