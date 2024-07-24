// styles
import './secondDerivativeVOmega.css';
// Highcharts dependency
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function SecondDerivativeVOmega({ sDerivativeArr, sDDerivativeArr , omegaArr}){

    // Combine omega with G' and G'' values into a format suitable for Highcharts
    const sDDashData = omegaArr.map((omegaValue, index) => [omegaValue, sDerivativeArr[index][1]]);
    const sDDoubleDashData = omegaArr.map((omegaValue, index) => [omegaValue, sDDerivativeArr[index][1]]);

    const options = {
        chart: {
            type: 'line',
            zoomType: 'xy',
            height:'350',
            width: '500'
        },
        title: {
            text: "Second Derivatives vs Omega",
        },
        xAxis: {
            type: 'logarithmic',
            title: {
                text: 'Omega [rad/s]',
            },
            labels: {
                formatter: function () {
                return this.value.toExponential();
                },
            },
        },
        yAxis: {
            type: 'logarithmic',
            title: {
                text: "Second Derivatives",
            },
            labels: {
                formatter: function () {
                return this.value.toExponential();
                },
            },
        },
        series: [
            {
                name: "secondDerivative[0]",
                data: sDDashData,
                color: 'red',
                marker: {
                enabled: false,
                },
            },
            {
                name: "secondDerivative[1]",
                data: sDDoubleDashData,
                color: 'black',
                marker: {
                enabled: false,
                },
            },
        ],
        tooltip: {
            pointFormat: 'Omega: <b>{point.x}</b><br/>Value: <b>{point.y}</b>',
        },
    };

    return(
        <div className="sd-v-omega-container">
          <HighchartsReact highcharts={Highcharts} options={options}  />
            {/* <Line data={data} options={options} /> */}
        </div>
    )
}