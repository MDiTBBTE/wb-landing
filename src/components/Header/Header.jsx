// COMPONENTS
import {Button} from "../Button/Button";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
// STYLES
import './Header.scss';

export const Header = ({window}) => {
    return <header className='header_inner'>
        <img className="header_inner_logo" src="/images/logo.svg" alt="logo"/>
        {window.width <= 425 ? <BurgerMenu/> : <>
            <div className="header_inner_links">
                <p className="header_inner_links_link">Telegram канал</p>
                <p className="header_inner_links_link">Поддержка</p>
            </div>
            <div className="header_inner_btns">
                <Button name={'Вход'}/>
                <Button name={'Регистрация'} isBlue={true} styles={{width: '100%'}}/>
            </div>
        </>}
    </header>
}
