// CONSTANTS
import {KEY_MOMENTS} from "../../constants/constants";
// STYLES
import './KeyMoments.scss';

export const KeyMoments = () => {
    return <div className='container keyMoments'>
        <div className='keyMoments_inner'>
            <h2 className='keyMoments_inner_title' id="key-moments">Ключевые моменты</h2>
            <p className='keyMoments_inner_text'>Мы хотим, чтобы наши клиенты получали максимальные результаты от нашего Сервиса!</p>
            <ul className='keyMoments_inner_list'>
                {KEY_MOMENTS.map((moment, idx) =>
                    <li key={`${idx.toString()}_${moment.title}`} className='keyMoments_inner_list_el'>
                        <img className='keyMoments_inner_list_el_img' src="/images/key-moments/checkbox.svg" alt="checkbox"/>
                        <div className='keyMoments_inner_list_el_info'>
                            <p className='keyMoments_inner_list_el_info_title'>{moment.title}</p>
                            {typeof moment.description === 'string' ?
                                <p className='keyMoments_inner_list_el_info_text'>{moment.description}</p> :
                                <ul className='keyMoments_inner_list_el_info_list'>
                                    {moment.description.map( (el, idx) =>
                                        <li key={idx} className='keyMoments_inner_list_el_info_list_el'>{el}</li>
                                    )}
                                </ul>
                            }
                        </div>
                    </li>)
                }
            </ul>
        </div>
    </div>
}
