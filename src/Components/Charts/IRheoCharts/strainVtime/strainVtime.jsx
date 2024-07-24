// styles
import './strainVtime.css';
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

export default function StrainVTime({ strainArr, timeArr }){

  const data = timeArr.map((time, index) => [time, strainArr[index]]);

  const options = {
    chart: {
      type: 'line',
      zoomType: 'xy',
      height:'350',
      width:'500'
    },
    title: {
      text: 'Strain vs Time',
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
        text: 'Strain [~]',
      },
      labels: {
        formatter: function () {
          return this.value.toExponential();
        },
      },
    },
    series: [
      {
        name: 'Strain',
        data: data,
        color: 'orange',
        marker: {
          enabled: false,
        },
      },
    ],
    tooltip: {
      pointFormat: 'Time: <b>{point.x}</b><br/>Strain: <b>{point.y}</b>',
    },
  };

    // const data = {
    //     labels: timeArr,
    //     datasets: [
    //       {
    //         label: 'Strain',
    //         data: strainArr,
    //         borderColor: 'orange',
    //         backgroundColor: 'orange',
    //         pointRadius: 0,
    //       },
    //     ],
    // };

    // const options = {
    //     scales: {
    //       x: {
    //         type: 'logarithmic',
    //         title: {
    //           display: true,
    //           text: 'Time (s)',
    //         },
    //         ticks: {
    //           callback: function (value) {
    //             return Number(value).toExponential();
    //           },
    //         },
    //       },
    //       y: {
    //         type: 'logarithmic',
    //         title: {
    //           display: true,
    //           text: 'Strain (~)',
    //         },
    //         ticks: {
    //           callback: function (value) {
    //             return Number(value).toExponential();
    //           },
    //         },
    //       },
    //     },
    // };

    return(
        <div className="strain-v-time-container">
          <HighchartsReact highcharts={Highcharts} options={options} />
            {/* <Line data={data} options={options} /> */}
        </div>
    );
}