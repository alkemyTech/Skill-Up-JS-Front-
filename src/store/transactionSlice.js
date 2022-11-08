import { createEntityAdapter } from "@reduxjs/toolkit/dist";
import { apiSlice } from "./apislice";


const transactionAdapter = createEntityAdapter({})

const initialState = transactionAdapter.getInitialState()

export const transactionApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createTransaction: builder.mutation({
      query: initialData => ({
        url: '/transactions',
        method: 'POST',
        body: {
          ...initialData
        }
      }),
      invalidateTags: [
        { type: 'transaction', id: "transaction" }
      ]
    }),
    getTransactions: builder.query({
      query: () => ({
        url: '/transactions',
        method: 'GET',
      }),
      provideTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "transaction", id: 'transaction' },
            ...result.ids.map(id => ({ type: 'transaction', id }))
          ]
        } else return [{ type: "transaction", id: 'transaction' }]
      }
    }),
  })
})


export const { useCreateTransactionMutation, useGetTransactionsQuery } = transactionApiSlice