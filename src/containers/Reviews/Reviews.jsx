// COMPONENTS
import {Carousel} from "../../components/Carousel/Carousel";
// CONSTANTS
import {REVIEWS} from "../../constants/constants";
// STYLES
import './Reviews.scss';

export const Reviews = () => {
    return <div className='container reviews'>
        <div className='reviews_inner'>
            <h2 className='reviews_inner_title'>Отзывы наших клиентов</h2>
            <Carousel reviews={REVIEWS}/>
        </div>
    </div>
}
