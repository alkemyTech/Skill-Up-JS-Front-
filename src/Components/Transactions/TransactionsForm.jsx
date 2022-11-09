import React from "react";
import { Formik } from "formik";
import Boton from "../Boton";
import axios from "axios";

const TransactionForm = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
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
            ? (errores.description = "Description must be completed")
            : null;
          !values.amount ? (errores.amount = "Amount must be completed") : null;
          values.amount && values.amount <= 0
            ? (errores.amount = "Amount must be greted than 0")
            : null;

          return errores;
        }}
        onSubmit={(formValues) => {
          axios.post("http://localhost:3000/transactions", formValues);
          console.log(formValues);
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, touched, errors }) => (
          <form
            className="flex flex-col items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-3"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border-b rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Description"
                id="description"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.description && errors.description && (
                <div className="text-red-500">{errors.description}</div>
              )}
            </div>
            <div>
              <input
                className="shadow appearance-none border-b rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Amount"
                id="amount"
                name="amount"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.amount && errors.amount && (
                <div className="text-red-500">{errors.amount}</div>
              )}
            </div>
            <div className="flex flex-col justify-center intems-center">
              <label className="text-center text-gray-700">Currency </label>
              <select className="block text-center appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="currency" onChange={handleChange}>
                <option value="pesos">Pesos</option>
                <option value="dolares">Dolares</option>
                <option value="euros">Euros</option>
              </select>
            </div>
            <div>
              <input
                className="shadow appearance-none border-b rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border-b rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border-b rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border-b rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
