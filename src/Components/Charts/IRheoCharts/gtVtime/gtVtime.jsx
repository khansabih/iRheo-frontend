// style
import './gtVtime.css';
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
    Legend
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

export default function GtVTime({ gtArr, timeArr }){
    // console.log(gtArr[1][1]);
    const data = timeArr.map((time, index) => [time, gtArr[index]]);

    const options = {
      chart: {
        type: 'line',
        zoomType: 'xy',
        height:'350',
        width:'500'
      },
      title: {
        text: 'G(t) vs Time',
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
          text: 'G(t)',
        },
        labels: {
          formatter: function () {
            return this.value.toExponential();
          },
        },
      },
      series: [
        {
          name: 'G(t)',
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
    // const data = {
    //     labels: timeArr,
    //     datasets: [
    //       {
    //         label: 'G(t)',
    //         data: gtArr,
    //         borderColor: 'green',
    //         backgroundColor: 'rgba(0, 255, 0, 0.2)',
    //         pointRadius: 0,
    //       },
    //     ],
    // };

    // const options = {
    //   scales: {
    //     x: {
    //       type: 'logarithmic',
    //       title: {
    //         display: true,
    //         text: 'Time (s)',
    //       },
    //       ticks: {
    //         callback: function (value) {
    //           return Number(value).toExponential();
    //         },
    //       },
    //     },
    //     y: {
    //       type: 'logarithmic',
    //       title: {
    //         display: true,
    //         text: 'G(t) (Pa)',
    //       },
    //       ticks: {
    //         callback: function (value) {
    //           return Number(value).toExponential();
    //         },
    //       },
    //     },
    //   },
    //   elements: {
    //     line: {
    //       tension: 0.1,
    //     },
    //   },
    // };

    return(
        <div className="gt-v-time-container">
          <HighchartsReact highcharts={Highcharts} options={options} />
            {/* <Line data={data} options={options} /> */}
        </div>
    );
}