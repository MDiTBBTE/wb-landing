// CORE
import { useState } from "react";
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
import {Button} from "./components/Button/Button";
import { Form } from "./components/Form/Form";
import { ToastContainer, toast } from 'react-toastify';
// INSTRUMENTS
import {useWindowSize} from "./utils/utils";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import emailjs from 'emailjs-com';
// STYLES
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({width, children, className}) => {
    return <div className={className}>
        <Header width={width}/>
        {children}
        <Footer/>
    </div>
}

const MainPage = ({width}) => {
    const [formModal, setOpenFormModal] = useState({
        isOpen: false,
        title: ''
    });

    const handleOpenModal = (formName) => {
        setOpenFormModal({
            isOpen: true,
            title: formName
        })
    }

    const getNotify = (action, content) => action === 'success' ? 
        toast.success(content, {
            icon: "🚀",
            autoClose: 3000
        }) : 
        toast.warning(content, {
            autoClose: 3000
        });

    const handleSubmit = async (event, form) => {
        event.preventDefault();
        
        try {
            const res = await emailjs.send('service_kv5m3il', 'template_5npxecr', form, 'user_GiycM0usOOUnNMneKYkrq');
            if(res.status === 200) {
                getNotify('success', 'Спасибо за заказ! Ваши данные были успешно отправлены.');
                setOpenFormModal({isOpen: false, title: ''});
            } else {
                getNotify('warning', 'Извените, что-то пошло не так!')
            }
        } catch(error) {
            getNotify('warning', 'Извените, что-то пошло не так!')
        }
    }

    return <Layout width={width}>
        <Features width={width}/>
        <Delimiter btnText='Заказать продвижение' handleOpenModalDelimetr={handleOpenModal}/>
        <Process width={width}/>
        <Delimiter/>
        <KeyMoments/>
        <Delimiter/>
        <Spheres/>
        <Delimiter/>
        <Reviews/>
        <Tariffs handleOpenModalTarrifs={handleOpenModal}/>
        {
            formModal.isOpen && 
                <div className='formWrapper'>
                    <Form 
                        formTitle={formModal.title} 
                        handleCloseForm={() => setOpenFormModal({isOpen: false, title: ''})}
                        handleSubmit={handleSubmit}
                    />
                </div>
        }
        <ToastContainer />
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

    return <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <MainPage width={width} />} />
            <Route path="*" render={() => getNotFoundPage(width)} />
        </Switch>
    </BrowserRouter>
}

export default App;
