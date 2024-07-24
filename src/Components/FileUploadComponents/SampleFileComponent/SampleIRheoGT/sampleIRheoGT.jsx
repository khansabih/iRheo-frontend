export default function SampleIRHEOGT({ timeArr, gt }){
    return(
        <>
        {
            timeArr.length > 0 && gt.length > 0 &&
            <div className="sample-file-table">
                <div className="sample-file-row">
                    <p className='sample-row-heading'>{timeArr[0]}</p>
                    <p className='sample-row-heading'>{gt[0]}</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-heading'>{timeArr[1]}</p>
                    <p className='sample-row-heading'>{gt[1]}</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-heading'>{timeArr[2]}</p>
                    <p className='sample-row-heading'>{gt[2]}</p>
                </div>
                <div className="sample-file-row last">
                    <p className='sample-row-heading'>{timeArr[3]}</p>
                    <p className='sample-row-heading'>{gt[3]}</p>   
                </div>
            </div>
        }
        {
            timeArr.length === 0 && gt.length === 0 &&
            <div className="sample-file-table">
                <div className="sample-file-row">
                    <p className='sample-row-heading'>Time(seconds)</p>
                    <p className='sample-row-heading'>G(t) (pascals)</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-heading'>Time(seconds)</p>
                    <p className='sample-row-heading'>G(t) (pascals)</p>
                </div>
                <div className="sample-file-row">
                    <p className='sample-row-heading'>Time(seconds)</p>
                    <p className='sample-row-heading'>G(t) (pascals)</p>
                </div>
                <div className="sample-file-row last">
                    <p className='sample-row-heading'>Time(seconds)</p>
                    <p className='sample-row-heading'>G(t) (pascals)</p>
                </div>
            </div>
        }
        </>
    )
}