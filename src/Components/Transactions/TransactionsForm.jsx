import React from "react";
import { useFormik } from "formik";

const TransactionForm = () => {

const formik = useFormik({
    initialValues:{
        description:"",
        amount: "",
        currency:"",
        date:"",

    },
    onSubmit: (formData) =>{
        console.log(formData)
    }
})

  return (
    <div>
        
        <h1>New transaction</h1>
<form action="" onSubmit={formik.handleSubmit}>
    <input type="text" placeholder="Description" name="description" onChange={formik.handleChange} />
    <input type="number" placeholder="Amount" name="amount" onChange={formik.handleChange}/>
    <input type="text" placeholder="Currency" name="currency" onChange={formik.handleChange}/>
    <input type="date" placeholder="Date" name="date" onChange={formik.handleChange}/>
    <button type="submit">crear</button>
</form>
    </div>
  )
}

export default TransactionForm;