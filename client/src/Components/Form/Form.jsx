import { React, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [balance, setBalance] = useState();
  const [advance, setAdvance] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    if (advance && amount) {
      setBalance(amount - advance);
    } else {
      setBalance("");
    }
  }, [advance, amount]);

  const isValidDate = function (date) {
    return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
  };

  const onSubmit = (data) => {
    const postData = {
      ...data,
      balance: balance,
      oDate: data.oDate ? data.oDate : null,
      dDate: data.dDate ? data.dDate : null,
    };

    axios.post("http://localhost:8000/postData", postData).then((resp) => {
      console.log(resp);
    });
  };

  return (
    <section className='get-in-touch'>
      <h1 className='title'>Eye Care Optics</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='contact-form row'>
        <div className='form-field col-lg-6'>
          <input id='Contact' name='Contact' placeholder='hidden' className='input-text js-input' type='text' {...register("contactNo")} />
          <label className='label' htmlFor='Contact'>
            Contact Number
          </label>
        </div>

        <div className='form-field col-lg-6 '>
          <input id='Sr. No.' className='input-text js-input' placeholder='hidden' type='number' {...register("srNo")} />
          <label className='label' htmlFor='Sr. No.'>
            Serial Number
          </label>
        </div>

        <div className='form-field col-lg-12'>
          {/* {errors.name && <span style={{ color: "red", marginLeft:80 }}>{errors.name.message}</span>} */}
          <input id='Name' className='input-text js-input' type='text' placeholder='hidden' {...register("name", { required: "Name is must" })} />
          <label className='label' htmlFor='Name' style={{color:errors.name && "red"}}>
            {errors.name?"Name is must":"Name"}
          </label>
        </div>

        <div className='form-field col-lg-6 '>
          <input id='O. Date' className='input-text js-input' type='date' placeholder='hidden' {...register("oDate")} />
          <label className='label' htmlFor='O. Date'>
            Order Date
          </label>
        </div>

        <div className='form-field col-lg-6 '>
          <input id='D. Date' className='input-text js-input' type='date' placeholder='hidden' {...register("dDate")} />
          <label className='label' htmlFor='D. Date'>
          Delivery Date
          </label>
        </div>

        <div className='form-field col-lg-12'>
          <input id='Frame' className='input-text js-input' type='text' placeholder='hidden' {...register("frame")} />
          <label className='label' htmlFor='Frame'>
            Frame
          </label>
        </div>

        <div className='form-field col-lg-12'>
          <input
            id='Amount'
            className='input-text js-input'
            type='number'
            placeholder='hidden'
            {...register("amount")}
            onChange={(e) => setAmount(e.target.value)}
          />
          <label className='label' htmlFor='Amount'>
            Amount
          </label>
        </div>

        <div className='form-field col-lg-6 '>
          <input
            id='Advance'
            className='input-text js-input'
            type='number'
            placeholder='hidden'
            {...register("advance")}
            onChange={(e) => setAdvance(e.target.value)}
          />
          <label className='label' htmlFor='Advance'>
            Advance
          </label>
        </div>

        <div className='form-field col-lg-6 '>
          <input id='Balance' className='input-text js-input' type='number' placeholder='hidden' {...register("balance")} disabled value={balance} />
          <label className='label' htmlFor='Balance'>
            Balance
          </label>
        </div>

        <table className='table table-dark table-bordered border-light  mt-5'>
          <thead>
            <tr>
              <th scope='col'>RE</th>
              <th className='input-tb ' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("a")} type='text' />
                </div>
              </th>

              <th className='input-tb ' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("b")} type='text' />
                </div>
              </th>

              <th className='input-tb ' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("c")} type='text' />
                </div>
              </th>

              <th className='input-tb ' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("d")} type='text' />
                </div>
              </th>

              <th scope='col'>DV</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='input-tb' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("e")} type='text' />
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
              <th className='input-tb' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("f")} type='text' />
                </div>
              </th>

              <th className='input-tb ' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("g")} type='text' />
                </div>
              </th>

              <th className='input-tb ' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("h")} type='text' />
                </div>
              </th>

              <th className='input-tb ' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("i")} type='text' />
                </div>
              </th>

              <th scope='col'>NV</th>
            </tr>
          </tbody>
        </table>

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
              <td className='input-tb' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("j")} type='text' />
                </div>
              </td>
              <td className='input-tb' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("k")} type='text' />
                </div>
              </td>
              <td className='input-tb' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("l")} type='text' />
                </div>
              </td>
              <td className='input-tb' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("m")} type='text' />
                </div>
              </td>
            </tr>

            <tr>
              <th scope='row'>LE</th>
              <td className='input-tb' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("n")} type='text' />
                </div>
              </td>
              <td className='input-tb' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("o")} type='text' />
                </div>
              </td>
              <td className='input-tb' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("p")} type='text' />
                </div>
              </td>

              <td className='input-tb' scope='col'>
                <div className='input-wrapper'>
                  <input {...register("q")} type='text' />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className='form-field col-lg-12 text-center'>
          <input className='submit-btn' type='submit' value='Submit' />
        </div>
      </form>
    </section>
  );
};

export default Form;
