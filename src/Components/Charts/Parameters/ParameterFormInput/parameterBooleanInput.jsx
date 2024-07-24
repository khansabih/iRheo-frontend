// styles
import './parameterBooleanInput.css';
// custom components
import CustomSwitch from '../../../Utilities/Switch/customSwitch';


export default function ParameterBooleanInput({ placeholder, val, setVal }){
    return(
        <div className="para-bool-input-div">
            <p className='para-bool-text'>{placeholder}</p>
            <CustomSwitch isOn={val} setIsOn={setVal}/>
        </div>
    )
}