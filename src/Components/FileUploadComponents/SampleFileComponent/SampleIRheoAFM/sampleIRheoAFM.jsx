export default function SampleIRHEOAFM({ timeArr, forceArr, indentationArr }){
    return(
        <>
        {
            timeArr.length > 0 && forceArr.length > 0 && indentationArr.length > 0
            &&
            <div className="sample-file-table">
                <div className="sample-file-row">
                    <p className='sample-row-heading'>{timeArr[0]}</p>
                    <p className='sample-row-heading'>{forceArr[0]}</p>
                    <p className='sample-row-heading'>{indentationArr[0]}</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-heading'>{timeArr[1]}</p>
                    <p className='sample-row-heading'>{forceArr[1]}</p>
                    <p className='sample-row-heading'>{indentationArr[1]}</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-heading'>{timeArr[2]}</p>
                    <p className='sample-row-heading'>{forceArr[2]}</p>
                    <p className='sample-row-heading'>{indentationArr[2]}</p>
                </div>
                <div className="sample-file-row last">
                    <p className='sample-row-heading'>{timeArr[3]}</p>
                    <p className='sample-row-heading'>{forceArr[3]}</p>
                    <p className='sample-row-heading'>{indentationArr[3]}</p>
                </div>
            </div>
        }
        {
            timeArr.length === 0 && forceArr.length === 0 && indentationArr.length === 0
            &&
            <div className="sample-file-table">
                <div className="sample-file-row">
                    <p className='sample-row-heading'>Time(seconds)</p>
                    <p className='sample-row-heading'>Force(Newton)</p>
                    <p className='sample-row-heading'>Indentation</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-text'>Time1(seconds)</p>
                    <p className='sample-row-text'>Force1(Newton)</p>
                    <p className='sample-row-text'>Indentation1</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-text'>Time2(seconds)</p>
                    <p className='sample-row-text'>Force2(Newton)</p>
                    <p className='sample-row-text'>Indentation2</p>
                </div>
                <div className="sample-file-row last">
                    <p className='sample-row-text'>Time3(seconds)</p>
                    <p className='sample-row-text'>Force3(Newton)</p>
                    <p className='sample-row-text'>Indentation3</p>
                </div>
            </div>
        }
        </>
    )
}