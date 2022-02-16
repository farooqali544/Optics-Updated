import React from 'react'
import "./Temp.css"


function Temp() {
  return ( 
    <section className='previewtable'>



{/* previewtable1 */}
  <table className='table table-dark table-bordered border-light  mt-5'>
  <thead>
    <tr>
      <th scope='col'>RE</th>
      <th className='previewtable-tb ' scope='col'>
        <div className='previewtable-wrapper'>
          <input type='text' />
        </div>
      </th>

      <th className='previewtable-tb ' scope='col'>
        <div className='previewtable-wrapper'>
          <input type='text' />
        </div>
      </th>

      <th className='previewtable-tb ' scope='col'>
        <div className='previewtable-wrapper'>
          <input type='text' />
        </div>
      </th>

      <th className='previewtable-tb ' scope='col'>
        <div className='previewtable-wrapper'>
          <input type='text' />
        </div>
      </th>

      <th scope='col'>DV</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td className='previewtable-tb' scope='col'>
        <div className='previewtable-wrapper'>
          <input type='text' />
        </div>
      </td>
      <th scope='row'>SPH</th>

      <th scope='row'>CYL</th>

      <th scope='row'>AX</th>

      <th scope='row'>Add</th>

      <th scope='row'>IPD</th>
    </tr>

    <tr>
      <th scope='col'>LE</th>
      <th className='previewtable-tb' scope='col'>
        <div className='previewtable-wrapper'>
          <input type='text' />
        </div>
      </th>

      <th className='previewtable-tb ' scope='col'>
        <div className='previewtable-wrapper'>
          <input type='text' />
        </div>
      </th>

      <th className='previewtable-tb ' scope='col'>
        <div className='previewtable-wrapper'>
          <input type='text' />
        </div>
      </th>

      <th className='previewtable-tb ' scope='col'>
        <div className='previewtable-wrapper'>
          <input type='text' />
        </div>
      </th>

      <th scope='col'>NV</th>
    </tr>
  </tbody>
</table>




{/* previewtable2 */}

<table className='table table-dark table-bordered border-light  mt-5'>
          <thead>
            <tr>
              <th scope='col'></th>
              <th scope='col'>H</th>
              <th scope='col'>V</th>
              <th scope='col'>B.C</th>
              <th scope='col'>Dia</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope='row'>RE</th>
              <td className='previewtable-tb' scope='col'>
                <div className='previewtable-wrapper'>
                  <input type='text' />
                </div>
              </td>
              <td className='previewtable-tb' scope='col'>
                <div className='previewtable-wrapper'>
                  <input type='text' />
                </div>
              </td>
              <td className='previewtable-tb' scope='col'>
                <div className='previewtable-wrapper'>
                  <input type='text' />
                </div>
              </td>
              <td className='previewtable-tb' scope='col'>
                <div className='previewtable-wrapper'>
                  <input type='text' />
                </div>
              </td>
            </tr>

            <tr>
              <th scope='row'>LE</th>
              <td className='previewtable-tb' scope='col'>
                <div className='previewtable-wrapper'>
                  <input type='text' />
                </div>
              </td>
              <td className='previewtable-tb' scope='col'>
                <div className='previewtable-wrapper'>
                  <input type='text' />
                </div>
              </td>
              <td className='previewtable-tb' scope='col'>
                <div className='previewtable-wrapper'>
                  <input type='text' />
                </div>
              </td>

              <td className='previewtable-tb' scope='col'>
                <div className='previewtable-wrapper'>
                  <input type='text' />
                </div>
              </td>
            </tr>
          </tbody>
        </table>


</section>





  )
}

export default Temp