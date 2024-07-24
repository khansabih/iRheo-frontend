// styles
import './sampleFile.css';
// custom components
import SampleIRHEO from './SampleIRheo/sampleIRheo';
import SampleIRHEOFT from './SampleIRheoFT/sampleIRheoFT';
import SampleIRHEOGT from './SampleIRheoGT/sampleIRheoGT';
import SampleIRHEOAFM from './SampleIRheoAFM/sampleIRheoAFM';

export default function SampleFile({ module, timeArr, stressArr, strainArr, 
                                     gt, ft, forceArr, indentationArr }){
    return(
        <>
        {
            module === 'iRheo' &&
            <SampleIRHEO
                    timeArr={timeArr}
                    stressArr={stressArr}
                    strainArr={strainArr}
            />
        }
        {
            module === 'iRheoGT' &&
            <SampleIRHEOGT
                    timeArr={timeArr}
                    gt={gt}
            />
            
        }
        {
            module === 'iRheoFT' &&
            <SampleIRHEOFT
                    timeArr={timeArr}
                    ft={ft}
            />
        }
        {
            module === 'iRheoAFM' &&
            <SampleIRHEOAFM
                timeArr={timeArr}
                forceArr={forceArr}
                indentationArr={indentationArr}
            />
        }
        {
            module === 'iRheoOT' &&
            <SampleIRHEO/>
        }
        {
            module === 'iRheoMT' &&
            <SampleIRHEO/>
        }
        </>
    )
}

/*
{
                timeArr.length > 0 && timeArr[0] !== undefined && timeArr[0] !== null
                && <p className='sample-row-heading'>{timeArr[0]}</p>
            }
            {
                stressArr.length > 0 && stressArr[0] !== undefined && stressArr[0] !== null
                && <p className='sample-row-heading'>{stressArr[0]}</p>
            }
            {
                strainArr.length > 0 && strainArr[0] !== undefined && strainArr[0] !== null
                && <p className='sample-row-heading'>{strainArr[0]}</p>
            }
*/