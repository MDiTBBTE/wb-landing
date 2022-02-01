// CORE
import React, { useState }  from "react";
// STYLES
import './Form.scss';


export const Form = ({formTitle, handleCloseForm, handleSubmit}) => {

    const [form, setForm] = useState({
        email: '',
        name: '',
        comment: '',
        phone: ''
    })

    const handleChange = (name, value) => {
        if(name === 'phone') {
            setForm({...form, [name]: value.length > 0 ? '+' + value.replace(/[^1-90]/g, '') : ''} )
        } else {
            setForm({...form, [name]: value})
        }
    };

    return <div className='form'>
        <form className='form_inner' style={{backgroundImage: `url(/images/bg.svg)`}} onSubmit={(event) => handleSubmit(event, form)}>
            <div className='form_inner_titleWrapper'>
                <h2 className='form_inner_title'>{formTitle}</h2>
                <button className='form_inner_cancelWrapper' onClick={handleCloseForm}>
                    <img src="/images/cross.svg" alt="cross" />
                </button>
            </div>
            <div className='form_inner_row'>
                <div className="form_inner_row_fields">
                <input
                    name='name' type="text" value={form.name}
                    onChange={({target}) => handleChange('name', target.value)}
                    className="form_inner_row_fields_input" maxLength="256" placeholder="Ваше имя"
                    required
                />
                <input
                    name='phone' type="tel" value={form.phone}
                    onChange={({target}) => handleChange('phone', target.value)}
                    className="form_inner_row_fields_input" maxLength="256" placeholder="Ваш номер"
                    required
                />
                <input
                    name='email' type="email" value={form.email}
                    onChange={({target}) => handleChange('email', target.value)}
                    className="form_inner_row_fields_input" maxLength="256" placeholder="Ваш e-mail"
                    required
                />
                </div>
                <textarea
                    className="form_inner_row_textarea"
                    name='comment'
                    placeholder="Комментарии"
                    value={form.comment}
                    onChange={({target}) => handleChange('comment', target.value)}
                    maxLength="5000"
                />
            </div>
            <input type="submit" value="Отправить" data-wait="Работаем..." className="form_inner_btn"/>
        </form>
    </div>
}
