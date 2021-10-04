// COMPONENTS
import {Button} from "../../components/Button/Button";
// CONSTANTS
import {TARIFFS} from "../../constants/constants";
// STYLES
import './Tariffs.scss';

export const Tariffs = () => {
    return <div className='container tariffs'>
        <div className='tariffs_inner'>
            <h2 className='tariffs_inner_title'>Тарифы</h2>
            <ul className='tariffs_inner_list'>
                {TARIFFS.map((tariff, idx) =>
                    <li key={`${idx.toString()}_${tariff.title}`} className='tariffs_inner_list_el'>
                        <p className='tariffs_inner_list_el_title'>{tariff.title}</p>
                        <p className='tariffs_inner_list_el_suggestion'>{tariff.suggest_one}</p>
                        <p className='tariffs_inner_list_el_suggestion-two'>{tariff.suggest_two}</p>
                        <p className='tariffs_inner_list_el_text'>{tariff.description}</p>
                        <Button
                            name={'Попробовать'}
                            isBlue={true}
                            onClick={() => window.location.href = "https://t.me/wildbest1"}                        />
                    </li>)
                }
            </ul>
        </div>
    </div>
}
