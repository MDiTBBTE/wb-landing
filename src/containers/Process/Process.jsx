// CONSTANTS
import {PROCESS} from "../../constants/constants";
// STYLES
import './Process.scss';

export const Process = ({window}) => {
    return <div className='container process'>
        <div className='process_inner'>
            <h2 className='process_inner_title'>Как это работает?</h2>
            <div className='process_inner_list'>
                {PROCESS.map((process, idx) => <div key={idx} className='process_inner_list_elWrapper' style={{
                    justifyContent: window.width <= 425 ? 'center' : idx % 2 ? 'flex-end' : 'flex-start'
                }}>
                    <div className='process_inner_list_el'>
                        <img className='process_inner_list_el_img' src={`/images/process/${process.image}`} alt=""/>
                        <p className='process_inner_list_el_text'>
                            {process.description}
                            <span className='process_inner_list_el_text_sub'>{process.sub}</span>
                        </p>
                    </div>
                </div>)}
            </div>
            <div className='process_inner_tree' style={{left: window.width <= 425 ? '20px' : '50%'}}>
                {Array.from(Array(5).keys()).map( (el, idx) => <div key={idx} className='process_inner_tree_section'>
                    <p className='process_inner_tree_section_num'>{el + 1}</p>
                    {idx === 4 ? '' : <img className='process_inner_tree_section_img' src="/images/section.png" alt=""/>}
            </div>
            )}</div>
        </div>
    </div>
}
