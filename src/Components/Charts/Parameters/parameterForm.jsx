/* eslint-disable react-hooks/exhaustive-deps */
// styles
import './parameterForm.css';
// react states
import { useEffect, useState } from 'react';
import ParameterNumberInput from './ParameterFormInput/parameterNumberInput';
import { useTesting } from '../../../Hooks/testing';
import ParameterBooleanInput from './ParameterFormInput/parameterBooleanInput';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

export default function ParametersForm({ module, setResult, 
    currentPayload, isStrainInPercent, setIsResultChanging
}){
    
    const [sigma_0, setSigma_0] = useState(1);
    const [sigma_d, setSigma_d] = useState(0);
    const [gamma_0, setGamma_0] = useState(1);
    const [gamma_d, setGamma_d] = useState(0);
    const [time_0, setTime_0] = useState(0);
    const [cut_top, setCutTop] = useState(0);
    const [cut_bottom, setCutBottom] = useState(0); 
    const [slope_sigma, setSlopeSigma] = useState(false);
    const [slope_gamma, setSlopeGamma] = useState(false);
    const [strain_percent, setStrainPercent] = useState(isStrainInPercent);
    const [oversample_watch, setOverSampleWatch] = useState(true);
    const [oversample_number, setOversamplingNumber] = useState(1000);
    const [number_datapoints, setNumberDatapoints] = useState(200);
    const [oversampling_method, setOverSamplingMethod] = useState('cubic');

    // To toggle between oversampling method
    const [ind, setInd] = useState(1);

    const setMethodOptions = (index)=>{
        setInd(index);
        switch(index){
            case 0: setOverSamplingMethod('linear');
                    break;
            case 1: setOverSamplingMethod('cubic');
                    break;
            case 3: setOverSamplingMethod('quadratic');
                    break;
            default: setOverSamplingMethod('cubic');
                     break;
        }
    }

    // To get the result
    const { data, loadingData, getData } = useTesting();
    useEffect(()=>{
        setIsResultChanging(loadingData);
    },[loadingData])

    useEffect(()=>{
        getData(sigma_0, 
            sigma_d, 
            slope_sigma, 
            gamma_0,
            gamma_d, 
            slope_gamma, 
            time_0, 
            cut_top, 
            cut_bottom, 
            strain_percent, 
            oversample_watch, 
            oversampling_method, 
            oversample_number, 
            number_datapoints, 
            currentPayload, 
            module 
        );
    },[sigma_0, sigma_d, slope_sigma, 
        gamma_0, gamma_d, slope_gamma, 
        time_0, cut_top, cut_bottom, strain_percent,
        oversample_watch, oversample_number, number_datapoints,
        oversampling_method
    ])

    useEffect(()=>{
        if(data !== null){
            // setParaChange(true);
            setResult(data);
        }
    },[data])
    // 'sigma_0': sigma_0, 
    // 'dot_sigma_inf': dot_sigma_inf,
    // 'slope_sigma': slope_sigma,
    // 'gamma_0': gamma_0,
    // 'dot_gamma_inf': dot_gamma_inf,
    // 'slope_gamma': slope_gamma,
    // 't_0': t_0,
    // 'cut_top': cut_top,
    // 'cut_bottom': cut_bottom,
    // 'strain_percent': strain_percent,
    // 'oversample_watch': oversample_watch,
    // 'oversample_method': oversample_method,
    // 'oversample_number': oversample_number,
    // 'number_datapoints': number_datapoints,

    // Dialog for extra parameters
    const [openParaDialog, setOpenParaDialog] = useState(false);
    const handleOpenParaDialog = ()=>{
        setOpenParaDialog(true);
    }
    const handleCloseParaDialog = ()=>{
        setOpenParaDialog(false);
    }

    return(
        <div className="parameter-form-container">
            <Dialog
                open={openParaDialog}
                onClose={handleCloseParaDialog}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <DialogTitle>
                    Additional Parameters
                </DialogTitle>
                <DialogContent>
                    <div className="para-input-container dialog">
                        <p className='para-label'>Oversampling number</p>
                        <ParameterNumberInput number={oversample_number} setNumber={setOversamplingNumber}/>
                    </div>
                    <div className="vertical-space-div"></div>
                    <div className="para-input-container dialog">
                        <p className='para-label'>Output Datapoints</p>
                        <ParameterNumberInput number={number_datapoints} setNumber={setNumberDatapoints}/>
                    </div>
                    <div className="vertical-space-div"></div>
                    <div className="para-input-container dialog">
                        <ParameterBooleanInput placeholder={'Oversample ?'}
                                            val={oversample_watch}
                                            setVal={setOverSampleWatch}
                        />
                    </div>
                    <div className="vertical-space-div"></div>
                    <div className="para-radio-container">
                        <p className='para-input-label'>Oversampling method</p>
                        <div className="custom-radio-container"
                             onClick={()=>setMethodOptions(0)}
                        >
                            <div className="custom-radio-box">
                            {
                                ind === 0 && <div className="custom-radio-box-inside"></div>
                            }
                            </div>
                            <p>Linear</p>
                        </div>
                        <div className="custom-radio-container"
                             onClick={()=>setMethodOptions(1)}
                        >
                            <div className="custom-radio-box">
                            {
                                ind === 1 && <div className="custom-radio-box-inside"></div>
                            }
                            </div>
                            <p>Cubic spline</p>
                        </div>
                        <div className="custom-radio-container"
                             onClick={()=>setMethodOptions(2)}
                        >
                            <div className="custom-radio-box">
                            {
                                ind === 2 && <div className="custom-radio-box-inside"></div>
                            }
                            </div>
                            <p>Quadratic</p>
                        </div>
                    </div>
                    <div className="vertical-space-div"></div>
                </DialogContent>
            </Dialog>
            <p className='parameter-heading'>Parameters</p>
            <div className="para-input-container">
                <p className='para-label'>Sigma at first point</p>
                <ParameterNumberInput number={sigma_0} setNumber={setSigma_0}/>
            </div>
            <div className="vertical-space-div"></div>
            <div className="para-input-container">
                <p className='para-label'>Derivative of Sigma</p>
                <ParameterNumberInput number={sigma_d} setNumber={setSigma_d}/>
            </div>
            <div className="vertical-space-div"></div>
            <div className="para-input-container">
                <ParameterBooleanInput placeholder={'Use Slope Sigma'}
                                       val={slope_sigma}
                                       setVal={setSlopeSigma}
                />
            </div>
            <div className="vertical-space-div"></div>
            <div className="para-input-container">
                <p className='para-label'>Gamma at first point</p>
                <ParameterNumberInput number={gamma_0} setNumber={setGamma_0}/>
            </div>
            <div className="vertical-space-div"></div>
            <div className="para-input-container">
                <p className='para-label'>Derivative of Gamma</p>
                <ParameterNumberInput number={gamma_d} setNumber={setGamma_d}/>
            </div>
            <div className="vertical-space-div"></div>
            <div className="para-input-container">
                <ParameterBooleanInput placeholder={'Use Slope Gamma'}
                                       val={slope_gamma}
                                       setVal={setSlopeGamma}
                />
            </div>
            <div className="vertical-space-div"></div>
            <div className="para-input-container">
                <p className='para-label'>Value of Time at First Point</p>
                <ParameterNumberInput number={time_0} setNumber={setTime_0}/>
            </div>
            <div className="vertical-space-div"></div>
            <div className="para-input-container">
                <p className='para-label'>Cut at Early Time</p>
                <ParameterNumberInput number={cut_top} setNumber={setCutTop}/>
            </div>
            <div className="vertical-space-div"></div>
            <div className="para-input-container">
                <p className='para-label'>Cut at Long Time</p>
                <ParameterNumberInput number={cut_bottom} setNumber={setCutBottom}/>
            </div>
            <div className="vertical-space-div"></div>
            <div className="para-input-container">
                <ParameterBooleanInput placeholder={'Is Strain in percent'}
                                       val={strain_percent}
                                       setVal={setStrainPercent}
                />
            </div>
            <div className="vertical-space-div"></div>
            <div className="more-options-div">
                <button className='para-options-text'
                        onClick={()=>handleOpenParaDialog()}
                >
                    More options
                </button>
            </div>
        </div>
    )
}