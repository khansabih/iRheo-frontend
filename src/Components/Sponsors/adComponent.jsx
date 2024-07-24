// styles
import './adComponent.css';
// asset(s)
import ad1 from '../../Assets/Ads/ad1.png';
import ad2 from '../../Assets/Ads/ad2.png';
import ad3 from '../../Assets/Ads/ad3.png';
import ad4 from '../../Assets/Ads/istockphoto-177094999-1024x1024.jpg'

export default function AdComponent({ adIndex }){

    const adArr = [
        '',
        ad1,
        ad2,
        ad3,
        ad4
    ]

    return(
        <div className="ad-component-area">
            <img className='ad-component-img' 
                 src={adArr[adIndex]} 
                 alt={'viscometer'} 
            />
        </div>
    )
}