// CORE
import React from "react";
// COMPONENTS
import {Button} from "../../components/Button/Button";
// STYLES
import './NotFoundPage.scss'

export const NotFoundPage = () => {
    return <>
        <div className='notFoundWrapper'>
            <p className='notFoundWrapper_error'>404</p>
            <p className='notFoundWrapper_msg'>Извините, страница не была найдена</p>
            <Button
                name={'Перейти на главную'}
                isBlue={true}
                styles={{margin: '0 auto', marginTop: '15px'}}
                onClick={() => window.location.href = "/"}
            />
        </div>
    </>
}
