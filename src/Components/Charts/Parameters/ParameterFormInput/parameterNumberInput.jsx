// styles
import './parameterNumberInput.css';
// mui icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


export default function ParameterNumberInput({ number, setNumber }){

    const handleDecrease = ()=>{
        if(number > 0){
            setNumber(number - 1);
        }else{
            return;
        }
    }

    const handleIncrease = ()=>{
        setNumber(number + 1);
    }

    return(
        <div className="para-num-div">
            <RemoveCircleOutlineIcon
                style={{ 'color':'var(--steel-grey)', fontSize:'0.95rem' }}
                onClick={()=>handleDecrease()}
            />
                <input className='parameter-form-input'
                       type="number" 
                       defaultValue={number}
                       value={number}
                       onChange={(e)=>setNumber(e.target.value)}
                       placeholder='0'
                />
            <AddCircleOutlineIcon
                style={{ 'color':'var(--steel-grey)', fontSize:'0.95rem' }}
                onClick={()=>handleIncrease()}
            />
        </div>
    )
}