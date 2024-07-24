/* eslint-disable react-hooks/exhaustive-deps */
// styles
import './fileUpload.css';
// react states
import { useEffect, useState } from 'react';
// react-router-dom
import { useNavigate, useParams } from 'react-router-dom';
// custom components
import FileUploadingSection from '../../Components/FileUploadComponents/FileUploadingSection/fileUploadingSection';
import SampleFile from '../../Components/FileUploadComponents/SampleFileComponent/sampleFile';
import CustomSwitch from '../../Components/Utilities/Switch/customSwitch';
import { parseFileContent } from '../../Components/FileUploadComponents/FileParsing/fileParsing';
// mui icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTesting } from '../../Hooks/testing';
import { CircularProgress } from '@mui/material';

export default function FileUpload(){

    // FOR GETTING THE RESULTS OF THE QUERY
    const { data, loadingData, getData } = useTesting();

    // To catch error with uploaded file
    const [fileUploadError, setFileUploadError] = useState(null);
    
    const { module } = useParams();
    const [uploadedFile, setUploadedFile] = useState(null);

    console.log(module);

    const fileUploadNav = useNavigate();
    const handleBackToModules = ()=>{
        fileUploadNav('/modules');
    }

    useEffect(()=>{
        if(uploadedFile !== null){
            readUploadedFile();
        }
    },[uploadedFile])

    // To read the uploaded file and get the time, stress and strain array
    const [times, setTimes] = useState([]);
    const [stress, setStress] = useState([]);
    const [strain, setStrain] = useState([]);
    const [gt, setGt] = useState([]);
    const [ft, setFt] = useState([]);
    const [force, setForce] = useState([]);
    const [indentation, setIndentation] = useState([]);
    const [isStrainPercent, setIsStrainPercent] = useState(false);

    const [tempPayloadData, setTempPayloadData] = useState([]);
    const readUploadedFile = ()=>{
        const reader = new FileReader();
        reader.onload = (event) => {
            const content =  event.target.result;
            const parsedValues = parseFileContent(module, content);

            console.log(parsedValues);
            setTempPayloadData(parsedValues);

            switch(module){
                case 'iRheo': if(parsedValues){
                    if(parsedValues.time.length === 0 
                        || parsedValues.stress.length === 0 
                        || parsedValues.strain.length === 0
                    ){
                        setFileUploadError("The file doesn't follow the valid format");
                        return;
                    }
                    setTimes(parsedValues.time);
                    setStress(parsedValues.stress);
                    setStrain(parsedValues.strain);
                }
                break;
                case 'iRheoGT': if(parsedValues){
                    setTimes(parsedValues.time);
                    setGt(parsedValues.gt);
                }
                break;
                case 'iRheoFT': if(parsedValues){
                    setTimes(parsedValues.time);
                    setFt(parsedValues.ft);
                }
                break;
                case 'iRheoAFM': if(parsedValues){
                    setTimes(parsedValues.time);
                    setForce(parsedValues.force);
                    setIndentation(parsedValues.indentations);
                }
                break;
                default : return;

            }
        }
        reader.readAsText(uploadedFile);
    }

    console.log('File error = ',fileUploadError);

    // To send the user to charting page
    const handleSendToChartsPage = ()=>{
        if(uploadedFile !== null){
            // console.log(tempPayloadData.payload);
            getData(
                1, 0, false,
                1, 0,
                false, 0, 0, 0,
                isStrainPercent, true, 'cubic',
                1000, 200,
                tempPayloadData.payload, module
            );

        }else{
            return;
        }
    }

    // As soon as we detect the data we navigate the user to charts page in order to complete the login.
    useEffect(()=>{
        if(data !== null){
            // console.log(data);
            fileUploadNav('/charts_page', {
                state:{
                    'time':times,
                    'stress':stress,
                    'strain':strain,
                    'gt':gt,
                    'ft':ft,
                    'force':force,
                    'indentations':indentation,
                    'module':module,
                    'result': data,
                    'payload':tempPayloadData.payload,
                    'isStrainPercent': isStrainPercent
                }
            });
        }
    },[data])

    const clearData = ()=>{
        setUploadedFile(null);
        setTempPayloadData([]);
        setTimes([]);
        setStress([]);
        setStrain([]);
        setGt([]);
        setFt([]);
        setForce([]);
        setIndentation([]);
        setIsStrainPercent(false);
    }

    return(
        <div className="file-upload-page">
            <div className="back-options-tab">
                <button className='back-to-module-cta'
                        onClick={()=>handleBackToModules()}
                >
                    <ArrowBackIcon/>
                    <p>Back to modules</p>
                </button>
            </div>
            <p className='file-upload-module-heading'>{module}</p>
            <p className='file-upload-module-subheading'>Refer to the Table Below and make sure that the files have only 3 columns, either Tab or Comma separated.</p>
            <FileUploadingSection setFinalUploadedFile={setUploadedFile}/>
            <div className="vertical-space-div"></div>
            <p className='file-upload-module-heading'>Sample Data Representation</p>
            <SampleFile module={module}
                        timeArr={times} 
                        stressArr={stress} 
                        strainArr={strain}
                        gt={gt}
                        ft={ft}
                        forceArr={force}
                        indentationArr={indentation}
            />
            <div className="vertical-space-div"></div>
            <div className='file-uploading-stress-data-confirmation'>
                <p className='stress-data-confirmation-txt'>
                    Is the Strain data in percentage(%) ?
                </p>
                <CustomSwitch isOn={isStrainPercent} setIsOn={setIsStrainPercent}/>
            </div>
            <div className="vertical-space-div"></div>
            <div className="file-upload-actions">
            {
                loadingData === false && 
                <>
                <button className='file-upload-cta'
                        onClick={()=>handleSendToChartsPage()}
                >
                    Next
                </button>
                <button className='file-upload-secondary-cta'
                        onClick={()=>clearData()}
                >
                    Reset
                </button>
                </>
            }
            {
                loadingData === true && 
                <CircularProgress size={24} style={{ color:'var(--deep-blue)' }}/>
            }
            </div>
            <div className="vertical-space-div"></div>
            <div className="vertical-space-div"></div>
        </div>
    )
}