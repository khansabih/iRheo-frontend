/* eslint-disable react-hooks/exhaustive-deps */
// styles
import './chartsPage.css';
// react states
// import { useState } from 'react';
// react router dom
import { useLocation, useNavigate } from 'react-router-dom';
// mui icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// custom components
import ParametersForm from '../../Components/Charts/Parameters/parameterForm';
import StressVTime from '../../Components/Charts/IRheoCharts/stressVtime/stressVtime';
import StrainVTime from '../../Components/Charts/IRheoCharts/strainVtime/strainVtime';
import GtVTime from '../../Components/Charts/IRheoCharts/gtVtime/gtVtime';
import FtVTime from '../../Components/Charts/IRheoCharts/ftVtime/ftVtime';
import GGVOmega from '../../Components/Charts/IRheoCharts/ggVOmega/ggVOmega';
import EtaVOmega from '../../Components/Charts/IRheoCharts/etaVOmega/etaVOmega';
import TanDeltaVOmega from '../../Components/Charts/IRheoCharts/tanDeltaVOmega/tanDeltaVOmega';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/Slices/userSlice';
import LoginDialog from '../../Components/AuthComponents/AuthDialogs/loginDialog';
import FirstDerivativeVOmega from '../../Components/Charts/IRheoCharts/firstDerivativeVOmega/firstDerivativeVOmega';
import SecondDerivativeVOmega from '../../Components/Charts/IRheoCharts/secondDerivativeVOmega/secondDerivativeVOmega';

export default function ChartsPage(){

    // To check whether user is signed in or not.
    const signed_in_user = useSelector(selectUser);

    // To display dialog to continue signup.
    const [openAuthDialog, setOpenAuthDialog] = useState(false);
    const handleOpenAuthDialog = ()=>{
        setOpenAuthDialog(true);
    }

    useEffect(()=>{
        if(signed_in_user === null){
            handleOpenAuthDialog();
        }else{
            setOpenAuthDialog(false);
        }
    },[signed_in_user])

    const location = useLocation();
    const { state } = location;

    const {time, stress, strain, gt, ft, module, result, payload, isStrainPercent } = state || { 
        'time':[], 'stress':[], 'strain':[], 'gt':[], 'ft':[], module:null, result:null, payload:null };

    console.log(time, stress, strain, gt, ft, module, result);

    const [t, setT] = useState([]);
    const [str, setStr] = useState([]);
    const [strn, setStrn] = useState([]);
    const [res, setRes] = useState(null);
    const [mod, setMod] = useState(null);

    useEffect(()=>{
        if(state !== null && state !== undefined){
            setT(time);
            setStr(stress);
            setStrn(strain);
            setRes(result);
            setMod(mod);
        }
    },[state])

    const chartsNav = useNavigate();
    const handleGoBackToParameters = ()=>{
        chartsNav(-1);
    }

    const [isDataLoading, setIsDataLoading] = useState(false);

    return(
        <div className="charts-page-container">
            <LoginDialog authDialogOpen={openAuthDialog}
                         setAuthDialogOpen={setOpenAuthDialog}
            />
            <div className="charts-heading-area">
                <button className='back-to-para-btn'
                        onClick={()=>handleGoBackToParameters()}
                >
                    <ArrowBackIcon/>
                    <p>Back to parameters</p>
                </button>
                <p className='charts-heading'>
                {
                    module === 'iRheo' && `i-Rheo`
                }
                {
                    module === 'iRheoGT' && `i-Rheo GT`
                }
                {
                    module === 'iRheoFT' && `i-Rheo FT`
                }
                </p>
                <div className="external-options-div"></div>
            </div>
            <div className="main-charting-area">
                <ParametersForm module={module} setResult={setRes} 
                    currentPayload={payload} isStrainInPercent={isStrainPercent}
                    setIsResultChanging={setIsDataLoading}
                />
                <div className="main-charts-area">
                {
                    stress.length > 2 && time.length > 2 &&
                    <StressVTime stressArr={str} timeArr={t} isLoading={isDataLoading}/>
                }
                {
                    res !== null && (module === 'iRheoGT' || module === 'iRheo' || module === 'iRheoFT') &&
                    <GGVOmega
                        g_dash_array={res.gPrime[0]}
                        g_double_dash_array={res.gPrime[1]}
                        omega={res.omega}
                    />
                }
                {
                    strain.length > 2 && time.length > 2 && 
                    <StrainVTime strainArr={strn} timeArr={t}/>
                }
                {
                    res !== null && (module === 'iRheoGT' || module === 'iRheo') &&
                    <EtaVOmega
                        etaArr={res.eta}
                        omegaArr={res.omega}
                    />
                }
                {
                    gt.length > 2 && time.length > 2 &&
                    <GtVTime gtArr={gt} timeArr={time}/>
                }
                {
                    res !== null && (module === 'iRheoGT') &&
                    <TanDeltaVOmega
                        tanArr={res.tanDelta}
                        omegaArr={res.omega}
                    />
                }
                {
                    ft !== undefined && ft !== null && ft.length > 2 && time.length > 2 && module === 'iRheoFT' &&
                    <FtVTime ftArr={ft} timeArr={time}/>
                }
                {
                    res !== null && (module === 'iRheoFT') &&
                    <FirstDerivativeVOmega
                        fDerivativeArr={res.firstDerivative[0]}
                        fDDerivativeArr={res.firstDerivative[1]}
                        omegaArr={res.omega}
                    />
                }
                {
                    res !== null && (module === 'iRheoFT') &&
                    <SecondDerivativeVOmega
                        sDerivativeArr={res.secondDerivative[0]}
                        sDDerivativeArr={res.secondDerivative[1]}
                        omegaArr={res.omega}
                    />
                }
                </div>
            </div>
        </div>
    )
}