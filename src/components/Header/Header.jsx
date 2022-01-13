// COMPONENTS
import {Button} from "../Button/Button";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
// STYLES
import './Header.scss';

export const Header = ({width}) => {
    return <header className='header_inner'>
        <img
            className="header_inner_logo"
            src="/images/logo.svg"
            alt="logo"
            onClick={() => window.location.href = "https://wildbest.group/"}
        />
        {width <= 425 ? <BurgerMenu/> : <>
            <div className="header_inner_links">
                <p
                    className="header_inner_links_link"
                    onClick={() => window.location.href = "https://t.me/wildbest1"}
                >Telegram канал</p>
                <p
                    className="header_inner_links_link"
                    onClick={() => window.location.href = "https://t.me/wildbest1"}
                >Продвижение на Ozon</p>
            </div>
            <div className="header_inner_btns">
                <Button name={'Вход'} onClick={() => {
                    (() => `ym(85982521,'reachGoal','vhod')`)()
                    window.location.href = "https://wildbest.group/";
                }}/>
                <Button name={'Регистрация'} isBlue={true} onClick={() => {
                    (() => `ym(87122683,'reachGoal','reg')`)()
                    window.location.href = "https://wildbest.group/";
                }} styles={{width: '100%'}}/>
            </div>
        </>}
    </header>
}
