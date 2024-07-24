// styles
import './contactUs.css';
// asset(s)
import contactIllustartion from '../../Assets/Contact/krsto-jevtic-g4Ry1F4AZ5Q-unsplash.jpg';
// custom components
import ContactFormComponent from '../../Components/Contact/contactFormComponent';

export default function ContactUs(){

    

    return(
        <div className="contact-us-container">
            <div className="contact-img-container">
                <div className="contact-img-area">
                    <img src={contactIllustartion} alt='contact_iRheo_web' />
                </div>
            </div>
            <ContactFormComponent/>
        </div>
    )
}