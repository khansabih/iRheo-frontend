// styles
import './customSwitch.css';

export default function CustomSwitch({ isOn, setIsOn }){

    const toggleSwitch = ()=>{
        if(isOn){
            setIsOn(false);
        }else{
            setIsOn(true);
        }
    }

    return(
        <div className={isOn ? "custom-switch on" : "custom-switch"}
             onClick={()=>toggleSwitch()}
        >
            <div className="custom-switch-slider"></div>
        </div>
    );
}