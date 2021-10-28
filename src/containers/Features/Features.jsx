// COMPONENTS
import {Button} from "../../components/Button/Button";
// CONSTANTS
import {FEATURES} from "../../constants/constants";
// STYLES
import './Features.scss';

export const Features = ({width}) => {
    return <div className='container features'>
        <div className='features_inner'>
            <div className="features_inner_feature">
                <div className="features_inner_feature_info">
                    <h1 className="features_inner_feature_info_text">
                        Продвигайте товары на Wildberries в ТОП
                        {width <= 425 && <span className="features_inner_feature_info_text_bl">за пару кликов мыши</span>}
                    </h1>
                    {width > 425 && <span className="features_inner_feature_info_text_bl">за пару кликов мыши</span>}
                    <p className="features_inner_feature_info_desc">
                        Продаешь крутые товары, но покупатели их не видят потому что они на последних страницах в выдаче? С помощью WILD BEST ты продвинешься
                        <span>в ТОП-20 всего за 14 дней!</span>
                    </p>
                    <Button
                        id={'ym(85982521,\'reachGoal\',\'free\')'}
                        name={'Попробовать бесплатно'}
                        isBlue={true}
                        styles={{padding: '11px 48px'}}
                        onClick={() => window.location.href = "https://t.me/wildbest1"}                    />
                </div>
                <img className="features_inner_feature_img" src="/images/features/chart.svg" alt="chart"/>
            </div>
            {FEATURES.map((feature, idx) => <div key={`${idx.toString()}_${feature.title}`} className="features_inner_feature">
                <div className="features_inner_feature_info">
                    <p className="features_inner_feature_info_text">{feature.title}</p>
                    <p className="features_inner_feature_info_desc">{feature.description}</p>
                </div>
                <img className="features_inner_feature_img" src={`/images/features/${feature.image}`} alt={feature.image.slice(0, -4)}/>
            </div>)}
        </div>
    </div>
}
