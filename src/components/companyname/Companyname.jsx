import React, { useEffect, useRef, useState } from "react";
import "./companyname.css";
import { FaArrowLeft, FaCalendar, FaSearch } from "react-icons/fa";
import ApexCharts from "apexcharts";
import { MdClose } from "react-icons/md";

const Companyname = () => {
  const chartRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([
    { serviceName: "sachin", qty: 300, amount: 2.0 },
    { serviceName: "messi", qty: 300, amount: 2.0 },
    { serviceName: "neymar", qty: 300, amount: 2.0 },
    { serviceName: "santhosh", qty: 300, amount: 2.0 },
    { serviceName: "ashfskaha", qty: 300, amount: 2.0 },
    { serviceName: "sured", qty: 300, amount: 2.0 },
    { serviceName: "service", qty: 300, amount: 2.0 },
    { serviceName: "bus", qty: 300, amount: 2.0 },
    { serviceName: "tembp", qty: 300, amount: 2.0 },
    { serviceName: "som", qty: 300, amount: 2.0 },
  ]);

  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Backspace" && searchTerm === "") {
        setTableData([
          { serviceName: "sachin", qty: 300, amount: 2.0 },
          { serviceName: "messi", qty: 300, amount: 2.0 },
          { serviceName: "neymar", qty: 300, amount: 2.0 },
          { serviceName: "santhosh", qty: 300, amount: 2.0 },
          { serviceName: "ashfskaha", qty: 300, amount: 2.0 },
          { serviceName: "sured", qty: 300, amount: 2.0 },
          { serviceName: "service", qty: 300, amount: 2.0 },
          { serviceName: "bus", qty: 300, amount: 2.0 },
          { serviceName: "tembp", qty: 300, amount: 2.0 },
          { serviceName: "som", qty: 300, amount: 2.0 },
        ]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchTerm]);
  

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const filteredSuggestions = tableData.filter((item) =>
      item.serviceName.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setIsDropdownOpen(true);
  };

  const handleSuggestionClick = (serviceName) => {
    const selectedRow = tableData.find(
      (item) => item.serviceName === serviceName
    );
    setSearchTerm(serviceName); 
    setTableData([selectedRow]);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const dataWithExtraContent = [
      "20%",
      "30%",
      "44%",
      "47%",
      "50%",
      "50%",
      "47%",
      "54%",
      "50%",
      "30%",
    ];
    const formattedData = dataWithExtraContent.map((item) =>
      parseInt(item.replace("%", ""))
    );
    const categories = [
      "Entry fee",
      "SR.Citizen",
      "2/3 wheeler",
      "Four wheeler",
      "Mini Bus",
      "Bus",
      "Four wheeler",
      "SR.Citizen",
      "Mini Bus",
      "Entry fee",
    ];

    const options = {
      series: [{ data: formattedData }],
      chart: {
        zoom: {
          enabled: true,
          type: "x",
          resetIcon: {
            offsetX: -10,
            offsetY: 0,
            fillColor: "#fff",
            strokeColor: "#37474F",
          },
          selection: {
            background: "#90CAF9",
            border: "#0D47A1",
          },
        },
        type: "bar",
        height: 400,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          horizontal: true,
          distributed: true,
          rangeBarOverlap: true,
          dataLabels: {
            position: "top",
            maxItems: 100,
            hideOverflowingLabels: true,
            position: "end",
          },
          barHeight: "35%",
          barWidth: "50%",
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
          paddingRight: "0px",
          fontSize: "13px",
          fontWeight: 500,
          marginLeft: "20px",
        },
        formatter: function (val) {
          return val + "% ";
        },
        offsetX: 1000,
      },
      xaxis: {
        labels: {
          show: false,
          style: {
            colors: "#fff",
            fontSize: "13px",
            fontWeight: 500,
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: categories,
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: "#fff",
            fontSize: "13px",
            fontWeight: 500,
          },
          opposite: true,
        },
      },
      colors: [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff",
      ],
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false,
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);
  const handleClearSearch = () => {
    setSearchTerm("");
    setSuggestions([]);
    setIsDropdownOpen(false);
    setTableData([
      { serviceName: "sachin", qty: 300, amount: 2.0 },
      { serviceName: "messi", qty: 300, amount: 2.0 },
      { serviceName: "neymar", qty: 300, amount: 2.0 },
      { serviceName: "santhosh", qty: 300, amount: 2.0 },
      { serviceName: "ashfskaha", qty: 300, amount: 2.0 },
      { serviceName: "sured", qty: 300, amount: 2.0 },
      { serviceName: "service", qty: 300, amount: 2.0 },
      { serviceName: "bus", qty: 300, amount: 2.0 },
      { serviceName: "tembp", qty: 300, amount: 2.0 },
      { serviceName: "som", qty: 300, amount: 2.0 },
    ]);
  };

  return (
    <div className="companymain">
    <div className="headingcompany">
      <FaArrowLeft className="arrow" height="50px" />
      <p className="heading">Company Name</p>
    </div>
    <div className="layoutcompany" style={{marginTop:"50px"}}>
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
        <div
          className="chart-container"
          style={{
            height: "230px",
            overflowY: "auto",
            width: "100%",
            marginTop: "0px",
          }}
        >
          <div id="chart" ref={chartRef}></div>
        </div>{" "}
      </div>
    </div>
    <div className="table-container">
      <input
        type="text"
        placeholder="Search Service Name"
        value={searchTerm}
        onChange={handleSearch}
        className="filterbox"
      />
       {searchTerm ? (
      <MdClose className="close" onClick={handleClearSearch} />
    ) : (
      <FaSearch className="search" />
    )}
      {isDropdownOpen && searchTerm && (
        <ul className="suggestions">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(item.serviceName)}
            >
              {item.serviceName}
            </li>
          ))}
        </ul>
      )}
    <div className="table-scroll">
  <table>
    <thead style={{position:""}}>
      <tr >
        <th>Service Name</th>
        <th>QTY</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody className="table-body">
      {tableData.map((row, index) => (
        <tr key={index}>
          <td>{row.serviceName}</td>
          <td>{row.qty}</td>
          <td>{row.amount}</td>
        </tr>
      ))}
      <tr style={{ backgroundColor: "white", color: "black" }}>
        <td>Total bills: 1000</td>
        <td>1000</td>
        <td>200</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  </div>
  );
};

export default Companyname;
