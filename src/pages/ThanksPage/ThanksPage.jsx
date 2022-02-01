// CORE
import React from "react";
// COMPONENTS
import {Button} from "../../components/Button/Button";
// STYLES
import './ThanksPage.scss'

export const ThanksPage = () => {
    return <>
        <div className='thanksWrapper'>
            <p className='thanksWrapper_text'>Спасибо за обращение!</p>
            <p className='thanksWrapper_text'>Наши менеджеры свяжутся с Вами в ближайшее время!</p>
            <Button
                name={'Перейти на главную'}
                isBlue={true}
                styles={{margin: '0 auto', marginTop: '15px'}}
                onClick={() => window.location.href = "/"}
            />
        </div>
    </>
}
