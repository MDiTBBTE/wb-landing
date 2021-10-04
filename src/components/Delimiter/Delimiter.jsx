// STYLES
import './Delimiter.scss';

export const Delimiter = () => {
    return <div className='delimiter'>
        <div
            className='delimiter_inner'
            style={{backgroundImage: `url(/images/bg.svg)`}}
        >
            <p
                className="delimiter_inner_text"
                onClick={() => window.location.href = "https://wildbest.group/login"}
            >Попробовать бесплатно</p>
            <img
                className="delimiter_inner_img"
                onClick={() => window.location.href = "https://wildbest.group/login"}
                src="/images/arrow_r.svg" alt="arrow"
            />
        </div>
    </div>
}
