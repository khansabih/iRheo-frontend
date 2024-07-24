// styles
import './modules.css';
// all models
import { allModels } from '../../Models/allModels';
import ModuleTile from '../../Components/ModuleComponents/ModuleTiles/moduleTile';

export default function Modules(){

    return(
        <div className="modules-container">
            <p className='modules-heading'>
                Select a Module
            </p>
            <div className="all-modules-list-container">
            {
                allModels && allModels.length > 0
                && allModels.map((module)=>(
                    <ModuleTile key={module.id} module={module}/>                    
                ))
            }
            </div>
        </div>
    )
}