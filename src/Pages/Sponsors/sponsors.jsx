// styles
import './sponsors.css';

export default function Sponsors(){
    return(
        <div className="sponsors-page-container">
            <p className='sponsor-heading'>How your sponsorship can help us?</p>
            <p className='sponsor-subheading'>Choose your sponsor tier to unlock the corresponding perks</p>
            <div className="sponsors-pointer">
                <p className='sponsor-subheading'>1</p>
                <p className='sponsor-text'>As a sponsor, you'll receive your logo prominently displayed on our website and the opportunity to participate in our marketing campaigns.</p>
            </div>
            <div className="vertical-space-div"></div>
            <div className="sponsors-pointer">
                <p className='sponsor-subheading'>2</p>
                <p className='sponsor-text'>Your sponsorship will help us achieve our mission of providing valuable rheology tools to a wider audience, and provide our users with the best possible experience.</p>
            </div>
            <div className="vertical-space-div"></div>
            <div className="sponsors-pointer">
                <p className='sponsor-subheading'>3</p>
                <p className='sponsor-text'>We're a growing website with a loyal following. Your sponsorship will help us to reach even more people and to make a real difference in the world.</p>
            </div>
        </div>
    )
}