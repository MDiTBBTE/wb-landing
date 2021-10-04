// CORE
import {useState} from "react";
// STYLES
import './Carousel.scss';

export const Carousel = ({reviews}) => {
    const [selected, setSelected] = useState(0);

    const handleNextReview = () => setSelected(selected !== reviews.length - 1 ? selected + 1 : 0);

    const handlePrevReview = () => setSelected(selected !== 0 ? selected - 1 : reviews.length - 1);

    const handleSelectReview = (review) => setSelected(review);

    return <div className='carousel'>
        <div className='carousel_inner'>
            <div className='carousel_inner_reviews'>
                <img className="carousel_inner_reviews_img-l" src="/images/carousel_arrow.svg" alt="arrow" onClick={handlePrevReview}/>
                {reviews.map((review, idx) => <div key={idx} className={idx !== selected ? 'carousel_inner_reviews_review' : 'carousel_inner_reviews_review-active'} style={{display: idx !== selected ? 'none' : 'block'}}>
                    <img className="carousel_inner_reviews_review_quotes" src="/images/quotes.svg" alt="quotes"/>
                    <div className='carousel_inner_reviews_review_info'>
                        <h3 className={'carousel_inner_reviews_review_info_title'}>{review.name}</h3>
                        <p className='carousel_inner_reviews_review_info_text'>{review.text}</p>
                    </div>
                </div>)}
                <img className="carousel_inner_reviews_img-r" src="/images/carousel_arrow.svg" alt="arrow" style={{transform: 'rotate(180deg)'}} onClick={handleNextReview}/>
            </div>
            <div className='carousel_inner_tabs'>
                <img className="carousel_inner_tabs_img-l" src="/images/carousel_arrow.svg" alt="arrow" onClick={handlePrevReview}/>
                {Array.from(Array(reviews.length).keys()).map((num) =>
                    <p
                        key={num}
                        onClick={() => handleSelectReview(num)}
                        className={ selected === num ? 'carousel_inner_tabs_selectedTab' : 'carousel_inner_tabs_tab'}
                    />
                )}
                <img className="carousel_inner_tabs_img-r" src="/images/carousel_arrow.svg" alt="arrow" style={{transform: 'rotate(180deg)'}} onClick={handleNextReview}/>
            </div>
        </div>
    </div>
}
