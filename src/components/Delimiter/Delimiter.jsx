// COMPONENTS
import {Button} from "../Button/Button";
// STYLES
import './Delimiter.scss';

export const Delimiter = ({btnText = 'Попробовать бесплатно', handleOpenModalDelimetr}) => {
    return <div className='delimiter'>
        <div
            className='delimiter_inner'
            style={{backgroundImage: `url(/images/bg.svg)`}}
        >
            <Button
                id={'ym(85982521,\'reachGoal\',\'tryfree\')'}
                name={btnText}
                styles={{backgroundColor: 'transparent'}}
                className="delimiter_inner_text"
                onClick={handleOpenModalDelimetr ? () => handleOpenModalDelimetr('Заказать продвижение') : () =>  window.location.href = "https://t.me/wildbest1"}
                isBlue={true}
            />
            <img
                className="delimiter_inner_img"
                onClick={handleOpenModalDelimetr ? () => handleOpenModalDelimetr('Заказать продвижение') : () =>  window.location.href = "https://t.me/wildbest1"} src="/images/arrow_r.svg" alt="arrow"
            />
        </div>
    </div>
}
