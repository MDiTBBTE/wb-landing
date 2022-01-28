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
                name={btnText}
                styles={{backgroundColor: 'transparent'}}
                className="delimiter_inner_text"
                onClick={handleOpenModalDelimetr ? () => {
                    window.ym(87122683,'reachGoal','free');
                    handleOpenModalDelimetr('Заказать продвижение');
                } : () => {
                    window.ym(87122683,'reachGoal','tryfree');
                    window.location.href = "https://wildbest.group/";
                }}
                isBlue={true}
            />
            <img
                className="delimiter_inner_img"
                onClick={handleOpenModalDelimetr ? () => handleOpenModalDelimetr('Заказать продвижение') : () =>  window.location.href = "https://wildbest.group/"} src="/images/arrow_r.svg" alt="arrow"
            />
        </div>
    </div>
}
