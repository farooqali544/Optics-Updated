import axios from "axios";
import React, { useEffect, useState } from "react";

function RevenueByMonth({ year, month }) {
  const [monthlyData, setMonthlyData] = useState([]);
  const getMonthlyRevenue = (year, month) => {
    axios
      .get(`http://localhost:8000/revenueByMonth/${year}?month=${month}`)
      .then((res) => {
        setMonthlyData(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMonthlyRevenue(year, month);
  }, [monthlyData]);

  const dummyData = ["Farooq", "03121511", "0312", "null", "null", "5460", "5464", "16464","null", "5460", "5464", "16464"];
  return (
    <table style={{ margin: "20px auto" }}>
      <thead>
        <tr>
          <th style={{ textAlign: "center" }} colSpan={12}>
            SALE FOR THE MONTH ({month}), Year({year})
          </th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Contact No</th>
          <th>srNo</th>
          <th>O Date (click to sort)</th>
          <th>D Date</th>
          <th>Frame</th>
          <th>Amount</th>
          <th>Advance</th>
        </tr>
      </thead>

      <tbody>
        {dummyData.map((item) => (
          <>
            <tr className='basic-data' key={item.id}>
              <td>{item}</td>
              <td>{item}</td>
              <td>{item}</td>
              <td></td>
              <td></td>
              <td>{item}</td>
              <td>{item}</td>
              <td>{item}</td>
              {/* <td>delete</td> */}
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}

export default RevenueByMonth;
