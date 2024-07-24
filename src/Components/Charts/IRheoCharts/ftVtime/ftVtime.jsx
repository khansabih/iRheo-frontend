// style
import './ftVtime.css';
// Highcharts dependency
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// Charts dependencies
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
CategoryScale,
LinearScale,
LogarithmicScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

export default function FtVTime({ ftArr, timeArr }){
  
    const data = timeArr.map((time, index) => [time, ftArr[index]]);  

    const options = {
      chart: {
        type: 'line',
        zoomType: 'xy',
        height:'350',
        width:'500'
      },
      title: {
        text: 'F(t) vs Time',
      },
      xAxis: {
        type: 'logarithmic',
        title: {
          text: 'Time [s]',
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
          text: 'F(t)',
        },
        labels: {
          formatter: function () {
            return this.value.toExponential();
          },
        },
      },
      series: [
        {
          name: 'F(t)',
          data: data,
          color: 'green',
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
        <div className="ft-v-time-container">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}