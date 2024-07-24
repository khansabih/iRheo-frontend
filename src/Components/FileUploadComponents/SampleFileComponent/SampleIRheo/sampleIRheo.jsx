export default function SampleIRHEO({ timeArr, stressArr, strainArr }){
    return(
        <>
        {
            timeArr.length > 0 && stressArr.length > 0 && strainArr.length > 0
            &&
            <div className="sample-file-table">
                <div className="sample-file-row">
                    <p className='sample-row-heading'>{timeArr[0]}</p>
                    <p className='sample-row-heading'>{stressArr[0]}</p>
                    <p className='sample-row-heading'>{strainArr[0]}</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-heading'>{timeArr[1]}</p>
                    <p className='sample-row-heading'>{stressArr[1]}</p>
                    <p className='sample-row-heading'>{strainArr[1]}</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-heading'>{timeArr[2]}</p>
                    <p className='sample-row-heading'>{stressArr[2]}</p>
                    <p className='sample-row-heading'>{strainArr[2]}</p>
                </div>
                <div className="sample-file-row last">
                    <p className='sample-row-heading'>{timeArr[3]}</p>
                    <p className='sample-row-heading'>{stressArr[3]}</p>
                    <p className='sample-row-heading'>{strainArr[3]}</p>
                </div>
            </div>
        }
        {
            timeArr.length === 0 && stressArr.length === 0 && strainArr.length === 0
            &&
            <div className="sample-file-table">
                <div className="sample-file-row">
                    <p className='sample-row-heading'>Time(seconds)</p>
                    <p className='sample-row-heading'>Stress(Pascals)</p>
                    <p className='sample-row-heading'>Strain</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-text'>Time1(seconds)</p>
                    <p className='sample-row-text'>Stress1(Pascals)</p>
                    <p className='sample-row-text'>Strain1</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-text'>Time2(seconds)</p>
                    <p className='sample-row-text'>Stress2(Pascals)</p>
                    <p className='sample-row-text'>Strain2</p>
                </div>
                <div className="sample-file-row last">
                    <p className='sample-row-text'>Time3(seconds)</p>
                    <p className='sample-row-text'>Stress3(Pascals)</p>
                    <p className='sample-row-text'>Strain3</p>
                </div>
            </div>
        }
        </>
    )
}