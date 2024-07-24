// styles
import './tanDeltaVOmega.css';
// Highcharts dependency
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function TanDeltaVOmega({ tanArr, omegaArr }){

    const data = omegaArr.map((time, index) => [time, tanArr[index][1]]);

    const options = {
        chart: {
          type: 'line',
          zoomType: 'xy',
          height:'350',
          width:'500'
        },
        title: {
          text: 'Tan Delta vs Omega',
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
            text: 'Tan Delta',
          },
          labels: {
            formatter: function () {
              return this.value.toExponential();
            },
          },
        },
        series: [
          {
            name: 'Tan Delta',
            data: data,
            color: 'black',
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
        <div className="tan-delta-v-omega-container">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}