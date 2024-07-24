// styles
import './etaVOmega.css';
// Highcharts dependency
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function EtaVOmega({ etaArr, omegaArr }){

    const data = omegaArr.map((omega, index) => [omega, etaArr[index][1]]);

    const options = {
        chart: {
          type: 'line',
          zoomType: 'xy',
          height:'350',
          width:'500'
        },
        title: {
          text: 'Eta* vs Omega',
        },
        xAxis: {
          type: 'logarithmic',
          title: {
            text: 'Omega',
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
            text: 'Eta*',
          },
          labels: {
            formatter: function () {
              return this.value.toExponential();
            },
          },
        },
        series: [
          {
            name: 'Eta',
            data: data,
            color: 'red',
            marker: {
              enabled: false,
            },
          },
        ],
        tooltip: {
          pointFormat: `Time: <b>{point.x}</b><br/>Stress: <b>{point.y}</b>`,
        },
    };

    return(
        <div className="eta-v-omega-container">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}