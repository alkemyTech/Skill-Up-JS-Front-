import React, { useEffect } from "react";
import { Formik } from "formik";
import Boton from "../Boton";
import "./transactionsForm.css";
import axios from "axios";
import { useGetTransactionsQuery } from "../../store/transactionApiSlice";
import { useBalanceQuery } from '../../store/userApiSlice'

const TransactionForm = () => {
  // const { data, isSuccess, isLoading, isError, error } = useGetTransactionsQuery({ categoryId: "2" })
  const { data, isSuccess, isLoading, isError, error } = useBalanceQuery({ id: 1 })

  if (isLoading) return <p>Loading....</p>

  if (isSuccess) {
    console.log(data)
  }
  return (
    <div>
      <h1>New transaction</h1>

      <Formik
        initialValues={{
          description: "",
          amount: "",
          currency: "",
          date: "",
          userId: "",
          categoryId: "",
          type: "",
        }}
        validate={(values) => {
          let errores = {};
          !values.description
            ? (errores.description = "description must be completed")
            : null;
          !values.amount ? (errores.amount = "amount must be completed") : null;
          values.amount && values.amount <= 0
            ? (errores.amount = "amount must be greted than 0")
            : null;

          return errores;
        }}
        onSubmit={(formValues) => {
          axios.post('http://localhost:3000/transactions', formValues)
          console.log(formValues);
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, touched, errors }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Description"
                id="description"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.description && errors.description && (
                <div className="error">{errors.description}</div>
              )}
            </div>
            <div>
              <input
                type="number"
                placeholder="Amount"
                id="amount"
                name="amount"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.amount && errors.amount && (
                <div className="error">{errors.amount}</div>
              )}
            </div>
            <div>
              <label>Currency </label>
              <select name="currency" onChange={handleChange}>
                <option value="pesos">Pesos</option>
                <option value="dolares">Dolares</option>
                <option value="euros">Euros</option>
              </select>
            </div>
            <div>
              <input
                type="date"
                placeholder="Date"
                id="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="userId"
                name="userId"
                id="userId"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="categoryId"
                name="categoryId"
                id="categoryId"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="type"
                name="type"
                id="type"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <Boton text="acept" />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default TransactionForm;
