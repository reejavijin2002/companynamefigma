import React, { useEffect, useRef } from "react";
import "./companyname.css";
import { FaArrowLeft, FaCalendar } from "react-icons/fa";
import ApexCharts from 'apexcharts';

const Companyname = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [{
        data: ['20%', '30%', '44%', '47%', '54%', '58%']
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false 
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          horizontal: true,
          distributed: true,
          dataLabels: {
            position: '', 
            formatter: function(val, opts) {
              return val;
            }
          },
          barHeight: '45%', // Adjust the thickness of the bars
       
        }
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        offsetX: 6,
        style: {
          colors: ['#fff'], 
          paddingRight: ['10px'] ,
          fontSize: '15px',
          fontWeight: 600,
        }
      },
      xaxis: {
        labels: {
          show: false,
          style: {
            colors: '#fff',
            fontSize: '15px',
            fontWeight: 600,
          }
        },
        axisBorder: {
          show: false 
        },
        axisTicks: {
          show: false 
        },
        categories: ['Entry fee', 'SR.Citizen', '2/3 wheeler', 'Four wheeler', 'Mini Bus', 'Bus'] 

      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: '#fff',
            fontSize: '15px',
            fontWeight: 600,

          },
          opposite: true 
        },
      },
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
      grid: {
        show: false 
      },
      tooltip: {
        enabled: false 
      },
      legend: {
        show: false 
      }
    };
    
    
    
    
    
    
    
    
    
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
  

    return () => {
    
      if (chart) {
        chart.destroy();
      }
    };
  }, []); 


  return (
    <div className="companymain">
      <div className="headingcompany">
        <FaArrowLeft className="arrow" height="50px" />
        <p className="heading">Company Name</p>
      </div>
      <div className="layoutcompany">
        <div className="bodycompany">
          <div className="bodysub">
            <p>Today sales</p>
            <FaCalendar className="calendar" />
          </div>
          <div className="bodysubsecond">
            <p className="bodysubp">1322.610</p>
            <p className="bodysubp2">INR</p>
          </div>
        </div>
        <div className="bodycompany2">
          <div className="bodysub">
            <p>Today No of Bills </p>
          </div>
          <div className="bodysubsecond">
            <p className="noofbills">115</p>
          </div>
        </div>
      </div>
      <div className="layoutcompany">
        <div className="bodycompany">
          <p className="device">Device 1</p>
          <div className="bodysubsecond">
            <p className="bodysubp3">1322.610</p>
            <p className="bodysubp21">INR</p>
          </div>
          <p className="bodysubp21bill">21 Bill</p>

        </div>
        <div className="bodycompany2">
          <p className="device">Device 2</p>
          <div className="bodysubsecond">
            <p className="bodysubp3">1322.610</p>
            <p className="bodysubp21">INR</p>
          </div>
          <p className="bodysubp21bill">21 Bill</p>

        </div>
      </div>
      <div className="layoutcompany">
        <div className="bodycompany">
          <p className="device">Device 3</p>
          <div className="bodysubsecond">
            <p className="bodysubp3">1322.610</p>
            <p className="bodysubp21">INR</p>
          </div>
          <p className="bodysubp21bill">21 Bill</p>

        </div>
        <div className="bodycompany2">
          <p className="device">Device 4</p>
          <div className="bodysubsecond">
            <p className="bodysubp3">1322.610</p>
            <p className="bodysubp21">INR</p>
          </div>
          <p className="bodysubp21bill">21 Bill</p>

        </div>
      </div>
      <div className="servicewise">
        <h2>Service Wise</h2>
        <div className="servicewisesub">
         
          <div id="chart" ref={chartRef} className="sub1"/>
          <div className="sub3"></div>
        </div>
  
</div>
      <table>
  <thead>
    <tr>
      <th>Service Name</th>
      <th>QTY</th>
    
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ashfskaha</td>
      <td>300</td>
  
      <td>2.00</td>
    </tr>
    <tr>
      <td>ashfskaha</td>
      <td>300</td>
  
      <td>2.00</td>
    </tr>
    <tr>
      <td>ashfskaha</td>
      <td>300</td>
   
      <td>2.00</td>
    </tr>
    <tr>
      <td>ashfskaha</td>
      <td>300</td>
    
      <td>2.00</td>
    </tr>
    <tr>
      <td>ashfskaha</td>
      <td>300</td>
    
      <td>2.00</td>
    </tr>
    <tr>
      <td>ashfskaha</td>
      <td>300</td>
   
      <td>2.00</td>
    </tr>
    <tr>
    <td rowspan="2">Total bills: 1000</td>
      <td>1000</td>
      <td rowspan="2">200</td>
    </tr>
  </tbody>
</table>



    </div>
  );
};

export default Companyname;
