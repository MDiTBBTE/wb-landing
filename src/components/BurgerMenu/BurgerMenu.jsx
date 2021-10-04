// CORE
import {useState} from "react";
// COMPONENTS
import {Button} from "../Button/Button";
// STYLES
import './BurgerMenu.scss';

export const BurgerMenu = () => {
    const [isOpenBM, setOpenBM] = useState(false);

    const handleToggleBM = () => setOpenBM(!isOpenBM);

    return <div className='burgerMenu'>
        <div className='burgerMenu_inner'>
            <img
                className={!isOpenBM ? 'burgerMenu_inner_imgOpen' : "burgerMenu_inner_img"}
                src={`/images/${!isOpenBM ? 'burger.svg' : 'cross.svg'}`}
                alt={!isOpenBM ? 'burger.svg' : 'cross'}
                onClick={handleToggleBM}
            />
            {isOpenBM && <div className="burgerMenu_inner_content">
                <div className="burgerMenu_inner_links">
                    <p
                        className="burgerMenu_inner_links_link"
                        onClick={() => window.location.href = "https://t.me/wildbest1"}
                    >Telegram канал</p>
                    <p
                        className="burgerMenu_inner_links_link"
                        onClick={() => window.location.href = "https://t.me/wildbest1"}
                    >Поддержка</p>
                </div>
                <div className="burgerMenu_inner_btns">
                    <Button name={'Вход'} onClick={() => window.location.href = "https://t.me/wildbest1"}/>
                    <Button name={'Регистрация'} isBlue={true} onClick={() => window.location.href = "https://t.me/wildbest1"}/>
                </div>
            </div>}
        </div>
    </div>
}
