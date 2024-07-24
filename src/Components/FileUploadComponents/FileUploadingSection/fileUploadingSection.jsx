// styles
import './fileUploadingSection.css';
// react states
import { useState, useRef } from 'react';
// mui icons
import UploadIcon from '@mui/icons-material/Upload';

export default function FileUploadingSection({ setFinalUploadedFile }){

    const wrapperRef = useRef(null);
    // utility function to change the styles of drop file input area
    const onDragEnter = ()=> wrapperRef.current.classList.add('dragover');
    const onDragLeave = ()=> wrapperRef.current.classList.remove('dragover');
    const onDrop = ()=> wrapperRef.current.classList.remove('dragover');

    const [uploadFile, setUploadFile] = useState(null);
    // const [fileUploading, setFileUploading] = useState(false);


    const onFileDrop = (e)=>{
        const newFile = e.target.files[0];
        if(newFile){
            setUploadFile(newFile);
            setFinalUploadedFile(newFile);
        }
    }

    console.log(uploadFile);

    return(
        <div className="file-upload-section">
            <p className='file-upload-heading'>Upload file here</p>
            <div className='drop-file-input'
                    ref={wrapperRef}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <UploadIcon style={{ 'color':'var(--deep-blue)', 
                                            'fontSize':'75px'
                                        }}/>
                    <p className='file-upload-input-text'>Drag and drop your image here OR Click to select image from computer</p>
                </div>
                <input type="file"
                        accept='.txt, .csv'
                        // disabled={ fileUploading === true ? true : false }
                        onChange={(e)=>onFileDrop(e)}
                />
            </div>
        </div>
    );
}