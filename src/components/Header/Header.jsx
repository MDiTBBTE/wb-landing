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
            onClick={() => window.location.href = "https://t.me/wildbest1"}        />
        {width <= 425 ? <BurgerMenu/> : <>
            <div className="header_inner_links">
                <p
                    className="header_inner_links_link"
                    onClick={() => window.location.href = "https://t.me/wildbest1"}
                >Telegram канал</p>
                <p
                    className="header_inner_links_link"
                    onClick={() => window.location.href = "https://t.me/wildbest1"}
                >Поддержка</p>
            </div>
            <div className="header_inner_btns">
                <Button name={'Вход'} onClick={() => window.location.href = "https://t.me/wildbest1"}/>
                <Button name={'Регистрация'} isBlue={true} onClick={() => window.location.href = "https://t.me/wildbest1"} styles={{width: '100%'}}/>
            </div>
        </>}
    </header>
}
