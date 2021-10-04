// STYLES
import './Delimiter.scss';

export const Delimiter = () => {
    return <div className='delimiter'>
        <div className='delimiter_inner' style={{backgroundImage: `url(/images/bg.svg)`}}>
            <p className="delimiter_inner_text">Попробовать бесплатно</p>
            <img className="delimiter_inner_img" src="/images/arrow_r.svg" alt="arrow"/>
        </div>
    </div>
}
