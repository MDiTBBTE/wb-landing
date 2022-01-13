// CONSTANTS
import {PROCESS} from "../../constants/constants";
// STYLES
import './Process.scss';

export const Process = () => {
    return <div className='container process'>
        <div className='process_inner'>
            <h2 className='process_inner_title' id="how-it-works">Как это работает?</h2>
            <div className='process_inner_list'>
                {PROCESS.map((process, idx) => <div key={idx} className='process_inner_list_elWrapper'>
                    <div className='process_inner_list_el'>
                        <img className='process_inner_list_el_img' src={`/images/process/${process.image}`} alt={process.image.slice(0, -4)}/>
                        {process.middle ?
                            <p className='process_inner_list_el_text'>
                                {process.description}  <span className='process_inner_list_el_text_sub'>{process.middle}</span> {process.end}
                            </p> :
                            <p className='process_inner_list_el_text'>
                                {process.description}
                                <span className='process_inner_list_el_text_sub'>{process.sub}</span>
                            </p>
                        }
                    </div>
                </div>)}
            </div>
            <div className='process_inner_tree'>
                {Array.from(Array(5).keys()).map( (el, idx) => <div key={idx} className='process_inner_tree_section'>
                    <p className='process_inner_tree_section_num'>{el + 1}</p>
                    {idx === 4 ? '' : <img className='process_inner_tree_section_img' src="/images/section1.png" alt="section"/>}
            </div>
            )}</div>
        </div>
    </div>
}
