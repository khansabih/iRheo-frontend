// styles
import './moduleTile.css';
// assets
import moduleImage from '../../../Assets/Images/banner.png';
// mui icons
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// react-router-dom
import { useNavigate } from 'react-router-dom';

export default function ModuleTile({ module }){

    const moduleNav = useNavigate();
    const handleNavigateToFileUpload = ()=>{
        moduleNav(`/file_upload/${module.moduleID}`);
    }

    return(
        <div className="module-tile">
            <div className="module-img-container">
                <img className='module-img'
                        src={moduleImage} 
                        alt={module.name}
                />
            </div>
            <p className='module-name'>{module.name}</p>
            <p className='module-desc'>{module.description}</p>
            <div className="module-tile-actions">
                <button className='module-tile-cta'
                        onClick={()=>handleNavigateToFileUpload()}
                >
                    <ArrowOutwardIcon/>
                </button>
            </div>
        </div>
    )
}