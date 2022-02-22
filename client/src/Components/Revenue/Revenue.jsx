import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Revenue.css";
import RevenueByMonth from "./RevenueByMonth/RevenueByMonth";
function Revenue() {
  const [years, setYears] = useState([]);
  const [year, setYear] = useState(2022);
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(1);

  const months = [
    { id: 1, month: "January" },
    { id: 2, month: "February" },
    { id: 3, month: "March" },
    { id: 4, month: "April" },
    { id: 5, month: "May" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
    { id: 10, month: "October" },
    { id: 11, month: "November" },
    { id: 12, month: "December" },
  ];

  const getYears = () => {
    axios
      .get("http://localhost:8000/years")
      .then((res) => {
        setYears(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRevenueByYear = (year) => {
    axios
      .get(`http://localhost:8000/revenue?year=${year}`)
      .then((res) => {
        sumRevenue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sumRevenue = (data) => {
    let temp = [];
    for (let i = 1; i <= 12; i++) {
      let sum = 0;
      for (let j = 0; j < data.length; j++) {
        if (data[j].month == i) {
          sum += data[j].amount;
        }
      }
      temp.push(sum);
    }
    setMonthlyRevenue(temp);
  };

  useEffect(() => {
    getYears();
    getRevenueByYear(2022);
  }, []);

  const dummyData = ["Farooq", "03121511", "0312", "null", "null", "5460", "5464", "16464","null", "5460", "5464", "16464"];

  return (
    <div className='revenue-container'>
      <div className='revenue-select'>
        <h3>Select Year To Get Monthly Revenue</h3>
        <select
          style={{ margin: "20px 0px", width: 200, padding: "10px 25px" }}
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            getRevenueByYear(e.target.value);
          }}
        >
          {years.map((item) => (
            <option value={item.year}>{item.year}</option>
          ))}
        </select>
      </div>
      <h3>Click Month Heading to Generate monthly sales table</h3>
      <table style={{ margin: "20px auto" }}>
        <thead>
          <tr>
            <th style={{textAlign:'center'}} colSpan={12}>
              TOTAL MONTHLY REVENUE ({year})
            </th>
          </tr>
          <tr>
            {months.map((month, index) => (
              <th
                className={selectedMonth == index + 1 ? "select-month select-month-active" : "select-month"}
                onClick={() => {
                  setSelectedMonth(index + 1);
                }}
              >
                {month.month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {dummyData.map((revenue) => (
              <td>{revenue}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <RevenueByMonth year={year} month={selectedMonth} />
    </div>
  );
}

export default Revenue;
