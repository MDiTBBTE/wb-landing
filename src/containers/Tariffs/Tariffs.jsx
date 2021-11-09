// COMPONENTS
import {Button} from "../../components/Button/Button";
// CONSTANTS
import {TARIFFS} from "../../constants/constants";
// STYLES
import './Tariffs.scss';

export const Tariffs = ({handleOpenModalTarrifs}) => {
    return <div className='container tariffs'>
        <div className='tariffs_inner'>
            <h2 className='tariffs_inner_title' id='tariffs'>Тарифы</h2>
            <ul className='tariffs_inner_list'>
                {TARIFFS.map((tariff, idx) =>
                    <li key={`${idx.toString()}_${tariff.title}`} className='tariffs_inner_list_el'>
                        <p className='tariffs_inner_list_el_title'>{tariff.title}</p>
                        <p className='tariffs_inner_list_el_suggestion'>{tariff.suggest_one}</p>
                        <p className='tariffs_inner_list_el_suggestion-two'>{tariff.suggest_two}</p>
                        <p className='tariffs_inner_list_el_text'>{tariff.description}</p>
                        <Button
                            name={idx === 0 ? 'Заказать выкупы' : 'Заказать отзывы'}
                            id={'ym(85982521,\'reachGoal\',\'tarif\')'}
                            isBlue={true}
                            onClick={handleOpenModalTarrifs ? 
                                () => handleOpenModalTarrifs(idx === 0 ? 'Заказать выкупы' : 'Заказать отзывы') : 
                                () =>  window.location.href = "https://t.me/wildbest1"
                            }                        
                        />
                    </li>)
                }
            </ul>
        </div>
    </div>
}
