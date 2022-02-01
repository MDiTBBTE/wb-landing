// CORE
import React, {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import emailjs from 'emailjs-com';
// COMPONENTS
import {Features} from "../../containers/Features/Features";
import {Delimiter} from "../../components/Delimiter/Delimiter";
import {Process} from "../../containers/Process/Process";
import {KeyMoments} from "../../containers/KeyMoments/KeyMoments";
import {Spheres} from "../../containers/Spheres/Spheres";
import {Reviews} from "../../containers/Reviews/Reviews";
import {Tariffs} from "../../containers/Tariffs/Tariffs";
import {Form} from "../../components/Form/Form";

export const MainPage = ({width}) => {
    const [formModal, setOpenFormModal] = useState({
        isOpen: false,
        title: ''
    });

    const handleOpenModal = (formName) => {
        if(formName !== 'Заказать продвижение') {
            formName === 'Заказать выкупы' ?
                window.ym(87122683,'reachGoal','vykupy') :
                window.ym(87122683,'reachGoal','otzyvy');
        }

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
            const res = await emailjs.send('service_ovuck8f', 'template_ra32qkl', form, 'user_HM441UeQFjzEQ8cGBwXa9');
            if(res.status === 200) {
                if(formModal.title === 'Заказать продвижение') {
                    window.ym(87122683,'reachGoal','free1');
                } else {
                    formModal.title === 'Заказать выкупы' ?
                        window.ym(87122683,'reachGoal','vykup') : window.ym(87122683,'reachGoal','otzyv');
                }

                setOpenFormModal({isOpen: false, title: ''});
                window.location.href = "/thanks";
            } else {
                getNotify('warning', 'Извините, что-то пошло не так!')
            }
        } catch(error) {
            getNotify('warning', 'Извините, что-то пошло не так!')
        }
    }

    const handleCloseModalForm = () => setOpenFormModal({isOpen: false, title: ''});

    const handleClickOutSide = (e, cb) => {
        if (e.target.className === 'formWrapper') {
            cb();
        }
    };

    return <>
        <Features width={width}/>
        <Delimiter key='first' btnText='Заказать продвижение' handleOpenModalDelimetr={handleOpenModal}/>
        <Process width={width}/>
        <Delimiter key='second'/>
        <KeyMoments/>
        <Delimiter key='third'/>
        <Spheres/>
        <Delimiter key='firth'/>
        <Reviews/>
        <Tariffs handleOpenModalTarrifs={handleOpenModal}/>
        {
            formModal.isOpen &&
            <div
                className='formWrapper'
                onClick={(e) => handleClickOutSide(e, handleCloseModalForm)}
            >
                <Form
                    formTitle={formModal.title}
                    handleCloseForm={handleCloseModalForm}
                    handleSubmit={handleSubmit}
                />
            </div>
        }
        <ToastContainer />
    </>
}
