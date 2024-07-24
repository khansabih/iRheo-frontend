// styles
import './ggVOmega.css';
// Highcharts dependency
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default function GGVOmega({ g_dash_array, g_double_dash_array, omega }){
    // Combine omega with G' and G'' values into a format suitable for Highcharts
    const gDashData = omega.map((omegaValue, index) => [omegaValue, g_dash_array[index][1]]);
    const gDoubleDashData = omega.map((omegaValue, index) => [omegaValue, g_double_dash_array[index][1]]);

    const options = {
        chart: {
            type: 'line',
            zoomType: 'xy',
            height:'350',
            width: '500'
        },
        title: {
            text: "G' & G'' vs Omega",
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
                text: "G', G'' [Pa]",
            },
            labels: {
                formatter: function () {
                return this.value.toExponential();
                },
            },
        },
        series: [
            {
                name: "G'",
                data: gDashData,
                color: 'red',
                marker: {
                enabled: false,
                },
            },
            {
                name: "G''",
                data: gDoubleDashData,
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
        <div className="gg-v-omega-container">
          <HighchartsReact highcharts={Highcharts} options={options}  />
            {/* <Line data={data} options={options} /> */}
        </div>
    )
}