// STYLES
import './Delimiter.scss';
import {Button} from "../Button/Button";

export const Delimiter = () => {
    return <div className='delimiter'>
        <div
            className='delimiter_inner'
            style={{backgroundImage: `url(/images/bg.svg)`}}
        >
            <Button
                id={'ym(85982521,\'reachGoal\',\'tryfree\')'}
                name={'Попробовать бесплатно'}
                styles={{backgroundColor: 'transparent'}}
                className="delimiter_inner_text"
                onClick={() => window.location.href = "https://t.me/wildbest1"}
                isBlue={true}
            />
            <img
                className="delimiter_inner_img"
                onClick={() => window.location.href = "https://t.me/wildbest1"}                src="/images/arrow_r.svg" alt="arrow"
            />
        </div>
    </div>
}
