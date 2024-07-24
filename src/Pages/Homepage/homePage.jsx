// styles
import './homePage.css';
// custom component(s)
import BannerComponent from '../../Components/HomepageComponents/Banner/bannerComponent';
import AdComponent from '../../Components/Sponsors/adComponent';
import { useEffect, useState } from 'react';
// import { useTesting } from '../../Hooks/testing';

export default function Homepage(){

    const [adIndex1, setAdIndex1] = useState(1);
    const [adIndex2, setAdIndex2] = useState(2);

    // To get the backend data
    // const { data } = useTesting();
    // console.log(data);

    useEffect(()=>{
        const interval1 = setInterval(() => {
            setAdIndex1(getRandomIndex());
            setAdIndex2(getRandomIndex());
        }, 3000); 
    
        return () => clearInterval(interval1);
    },[])

    const getRandomIndex = () => {
        return Math.floor(Math.random() * 4) + 1;
    };


    return(
        <div className='homepage-container'>
            <div className="ad-component-1">
                {/* <AdComponent adIndex={adIndex1}/> */}
            </div>
            <div className="home-main-content-area">
                <BannerComponent/>                         
            </div>
            <div className="ad-component-2">
                {/* <AdComponent adIndex={adIndex2}/> */}
            </div>
        </div>
    )
}