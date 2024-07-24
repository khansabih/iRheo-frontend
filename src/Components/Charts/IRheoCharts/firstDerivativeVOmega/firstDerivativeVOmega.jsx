// styles
import './firstDerivativeVOmega.css';
// Highcharts dependency
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function FirstDerivativeVOmega({ fDerivativeArr, fDDerivativeArr , omegaArr}){

    // Combine omega with G' and G'' values into a format suitable for Highcharts
    const fDDashData = omegaArr.map((omegaValue, index) => [omegaValue, fDerivativeArr[index][1]]);
    const fDDoubleDashData = omegaArr.map((omegaValue, index) => [omegaValue, fDDerivativeArr[index][1]]);

    const options = {
        chart: {
            type: 'line',
            zoomType: 'xy',
            height:'350',
            width: '500'
        },
        title: {
            text: "First Derivatives vs Omega",
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
                text: "First Derivatives",
            },
            labels: {
                formatter: function () {
                return this.value.toExponential();
                },
            },
        },
        series: [
            {
                name: "firstDerivative[0]",
                data: fDDashData,
                color: 'red',
                marker: {
                enabled: false,
                },
            },
            {
                name: "firstDerivative[1]",
                data: fDDoubleDashData,
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
        <div className="fd-v-omega-container">
          <HighchartsReact highcharts={Highcharts} options={options}  />
            {/* <Line data={data} options={options} /> */}
        </div>
    )
}