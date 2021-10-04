// COMPONENTS
import {Button} from "../../components/Button/Button";
// CONSTANTS
import {FEATURES} from "../../constants/constants";
// STYLES
import './Features.scss';

export const Features = ({width}) => {
    return <div className='container features'>
        <div className='features_inner'>
            <div className="features_inner_feature" style={{
                flexDirection: width <= 425 ? 'column-reverse' : 'row'
            }}>
                <div className="features_inner_feature_info">
                    <p className="features_inner_feature_info_text">
                        Продвигайте свои товары в ТОП
                        {width <= 425 && <span style={{marginLeft: '6px'}} className="features_inner_feature_info_text_bl">за пару кликов мыши</span>}
                    </p>
                    {width > 425 && <p className="features_inner_feature_info_text_bl">за пару кликов мыши</p>}
                    <p className="features_inner_feature_info_desc">
                        Продаешь крутые товары, но покупатели их не видят потому что они на последних страницах в выдаче? С помощью WILD BEST ты продвинешься
                        <span>в ТОП-20 всего за 14 дней!</span>
                    </p>
                    <Button
                        name={'Попробовать бесплатно'}
                        isBlue={true}
                        styles={{padding: '11px 48px'}}
                        onClick={() => window.location.href = "https://wildbest.group/login"}
                    />
                </div>
                <img className="features_inner_feature_img" src="/images/features/Frame 1.svg" alt="chart"/>
            </div>
            {FEATURES.map((feature, idx) => <div
                key={`${idx.toString()}_${feature.title}`}
                className="features_inner_feature"
                style={{
                flexDirection: width <= 425 ? 'column-reverse' : [0, 2].includes(idx) ? 'row-reverse' : 'row'
            }}>
                <div className="features_inner_feature_info">
                    <p className="features_inner_feature_info_text">{feature.title}</p>
                    <p className="features_inner_feature_info_desc">{feature.description}</p>
                </div>
                <img className="features_inner_feature_img" src={`/images/features/${feature.image}`} alt="chart"/>
            </div>)}
        </div>
    </div>
}
