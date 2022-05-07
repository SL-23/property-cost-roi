import { Box, Button, Dialog, DialogContent, TextField, Typography, useTheme } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CostInput = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      propertyPrice: 0,
      stampDuty: 0,
      transfterFee: 0,
      govFee: 0,
      yourSavings: 0,
      availableDeposit: 0,

      loanAmount: 0,
      loanInterestRate: 0,
      loanYear: 30,
      LMIest: 0,
      monthlyRepayments: 0,

      waterRate: 0,
      councilRate: 0,
      titleRate: 0,
      otherRates: 0,

      totalRates: 0,

    },
    onSubmit: (values) => {
      console.log(values);
    },
  })

  return (
    <>

      <TextField
        fullWidth
        variant="standard"
        label="Property price"
        name="propertyPrice"
        placeholder="$0"
        value={formik.values.propertyPrice}
        error={Boolean(formik.errors.propertyPrice)}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        fullWidth
        disabled={true}
        variant="standard"
        label="Stamp duty"
        name="stampDuty"
        placeholder="$0"
        value={formik.values.propertyPrice * 0.07}
        error={Boolean(formik.errors.stampDuty)}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        fullWidth
        variant="standard"
        label="Your savings"
        name="yourSavings"
        placeholder="$0"
        value={formik.values.yourSavings}
        error={Boolean(formik.errors.yourSavings)}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </>
  )
}

export default CostInput;