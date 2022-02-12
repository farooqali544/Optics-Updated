import axios from "axios";
import { React, useState } from "react";
import "./Preview.css";

const Preview = () => {
  const [nameInput, setNameInput] = useState("");
  const [serialInput, setSerialInput] = useState("");
  const [opticsData, setOpticsData] = useState([]);
  const [showOpticsData, setShowOpticsData] = useState(null);
  const [dataSorted, setDataSorted] = useState(false);

  const handleNameSearch = () => {
    setSerialInput("");
    axios
      .get(`http://localhost:8000/getData?name=${nameInput}`)
      .then((resp) => {
        setOpticsData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSerialSearch = () => {
    setNameInput("");
    axios
      .get(`http://localhost:8000/getData?serial=${serialInput}`)
      .then((resp) => {
        setOpticsData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDate = (date) => {
    const newDate = new Date(Date.parse(date));
    if (newDate != "Invalid Date") return newDate.toLocaleDateString("en-US");
  };

  const sortDate = (dateType) => {
    if (dataSorted) {
      const newArray = opticsData.slice().sort(function (a, b) {
        if (dateType === "oDate") {
          return new Date(b.oDate) - new Date(a.oDate);
        } else {
          return new Date(b.dDate) - new Date(a.dDate);
        }
      });
      setOpticsData(newArray);
    } else if (!dataSorted) {
      const newArray = opticsData.slice().sort(function (a, b) {
        if (dateType === "oDate") return new Date(a.oDate) - new Date(b.oDate);
        else {
          return new Date(a.dDate) - new Date(b.dDate);
        }
      });
      setOpticsData(newArray);
    }

    setDataSorted(!dataSorted);
  };

  const deleteItem = (id) => {
    const alert = window.confirm("Are you sure you want to delete this item");
    if (alert) axios.delete(`http://localhost:8000/deleteItem?id=${id}`).then((res) => {
        if(serialInput) handleSerialSearch();
        else handleNameSearch();
    }).catch(err =>{
        console.log(err);
    })
  };

  return (
    <div className='preview-container'>
      <h1>Preview Data</h1>
      <div className='search-bar'>
        <div className='name-search'>
          <label htmlFor='name'>Search By Name</label>
          <input id='name' type='text' value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
          <button onClick={handleNameSearch}>Search</button>
        </div>

        <div className='serialno-search'>
          <label htmlFor='serial'>Search by Serial No</label>
          <input id='serial' type='number' value={serialInput} onChange={(e) => setSerialInput(e.target.value)} />
          <button onClick={handleSerialSearch}>Search</button>
        </div>
      </div>

      <div className='contact-table'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact No</th>
              <th>srNo</th>
              <th
                onClick={() => {
                  sortDate("oDate");
                }}
              >
                O Date (click to sort)
              </th>
              <th
                onClick={() => {
                  sortDate("dDate");
                }}
              >
                D Date
              </th>
              <th>Frame</th>
              <th>Amount</th>
              <th>Advance</th>
            </tr>
          </thead>

          <tbody>
            {opticsData.map((item) => (
              <>
                <tr
                  className='basic-data'
                  key={item.id}
                  onClick={() => {
                    if (showOpticsData === item.id) {
                      setShowOpticsData(null);
                    } else {
                      setShowOpticsData(item.id);
                    }
                  }}
                >
                  <td>{item.name}</td>
                  <td>{item.contactNo}</td>
                  <td>{item.srNo}</td>
                  <td>{getDate(item.oDate)}</td>
                  <td>{getDate(item.dDate)}</td>
                  <td>{item.frame}</td>
                  <td>{item.amount}</td>
                  <td>{item.advance}</td>
                  <td onClick={() => deleteItem(item.id)}>delete</td>
                </tr>
                {showOpticsData === item.id && (
                  <tr>
                    <td colSpan={8} id='shown-data'>
                      <div className='show-optics-data'>
                        <table className='table table-dark table-bordered border-light  mt-5'>
                          <thead>
                            <tr>
                              <th scope='col'>RE</th>
                              <td className='input-tb ' scope='col'>
                                {item.a}
                              </td>

                              <td className='input-tb ' scope='col'>
                                {item.b}
                              </td>

                              <td className='input-tb ' scope='col'>
                                {item.c}
                              </td>

                              <td className='input-tb ' scope='col'>
                                {item.d}
                              </td>

                              <th scope='col'>DV</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td className='input-tb' scope='col'>
                                {item.e}
                              </td>
                              <th scope='row'>SPH</th>

                              <th scope='row'>CYL</th>

                              <th scope='row'>AX</th>

                              <th scope='row'>Add</th>

                              <th scope='row'>IPD</th>
                            </tr>

                            <tr>
                              <th scope='col'>LE</th>
                              <td className='input-tb' scope='col'>
                                {item.f}
                              </td>

                              <td className='input-tb ' scope='col'>
                                {item.g}
                              </td>

                              <td className='input-tb ' scope='col'>
                                {item.h}
                              </td>

                              <td className='input-tb ' scope='col'>
                                {item.i}
                              </td>

                              <th scope='col'>NV</th>
                            </tr>
                          </tbody>
                        </table>

                        <table className='table table-dark table-bordered border-light  mt-5'>
                          <thead>
                            <tr>
                              <td scope='col'>{item.j}</td>
                              <th scope='col'>H</th>
                              <th scope='col'>V</th>
                              <th scope='col'>B.C</th>
                              <th scope='col'>Dia</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <th scope='row'>RE</th>
                              <td className='input-tb' scope='col'>
                                {item.k}
                              </td>
                              <td className='input-tb' scope='col'>
                                {item.l}
                              </td>
                              <td className='input-tb' scope='col'>
                                {item.l}
                              </td>
                              <td className='input-tb' scope='col'>
                                {item.m}
                              </td>
                            </tr>

                            <tr>
                              <th scope='row'>LE</th>
                              <td className='input-tb' scope='col'>
                                {item.n}
                              </td>
                              <td className='input-tb' scope='col'>
                                {item.o}
                              </td>
                              <td className='input-tb' scope='col'>
                                {item.p}
                              </td>

                              <td className='input-tb' scope='col'>
                                {item.q}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Preview;
