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
                        {width <= 428 && <span className="features_inner_feature_info_text_bl">за пару кликов мыши</span>}
                    </h1>
                    {width > 428 && <span className="features_inner_feature_info_text_bl">за пару кликов мыши</span>}
                    <p className="features_inner_feature_info_desc">
                        Продаете крутые товары, но покупатели их не видят, потому что они на последних страницах в выдаче? С помощью сервиса WILDBEST Вы продвинетесь
                        <span> в ТОП-20 всего за 14 дней!</span>
                    </p>
                    <Button
                        name={'Попробовать бесплатно'}
                        isBlue={true}
                        styles={{padding: '11px 48px'}}
                        onClick={() => {
                            window.ym(87122683,'reachGoal','tryfree');
                            window.location.href = "https://wildbest.group/"
                        }}
                    />
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
