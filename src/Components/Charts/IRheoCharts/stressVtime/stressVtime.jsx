// styles
import './stressVtime.css';
// Highcharts dependency
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// Charts dependencies
// import { Line } from 'react-chartjs-2';
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
import { CircularProgress } from '@mui/material';

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



export default function StressVTime({ stressArr, timeArr, isLoading }){

  const data = timeArr.map((time, index) => [time, stressArr[index]]);

  const options = {
    chart: {
      type: 'line',
      zoomType: 'xy',
      height:'350',
      width:'500'
    },
    title: {
      text: 'Stress vs Time',
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
        text: 'Stress [Pa]',
      },
      labels: {
        formatter: function () {
          return this.value.toExponential();
        },
      },
    },
    series: [
      {
        name: 'Stress',
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
    //         label: 'Stress',
    //         data: stressArr,
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
    //         text: 'Stress (Pa)',
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
        <div className="stress-v-time-container">
          <HighchartsReact highcharts={Highcharts} options={options} />
          {/* <Line data={data} options={options} /> */}
        </div>
    );
}