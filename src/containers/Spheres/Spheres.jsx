// CONSTANTS
import {SPHERES} from "../../constants/constants";
// STYLES
import './Spheres.scss';

export const Spheres = () => {
    return <div className='container spheres'>
        <div className='spheres_inner'>
            <h2 className='spheres_inner_title'>Кому необходим WILD BEST?</h2>
            <p className='spheres_inner_text'>Сферы применения нашего сервиса буквально безграничны</p>
            <ul className='spheres_inner_list'>
                {SPHERES.map((sphere, idx) =>
                    <li key={`${idx.toString()}_${sphere.title}`} className='spheres_inner_list_el'>
                        <img
                            className='spheres_inner_list_el_img'
                            src={`/images/spheres/${sphere.image}`}
                            alt=""
                        />
                        <p className='spheres_inner_list_el_title'>{sphere.title}</p>
                        <p className='spheres_inner_list_el_text'>{sphere.description}</p>
                    </li>)
                }
            </ul>
        </div>
    </div>
}
