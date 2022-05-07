import { Box, Button, Dialog, DialogContent, TextField, Typography, useTheme } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getResults } from "../../common/state";
import DateValidation from "./validation/DateValidation";
import ErrorDialog from "./validation/ErrorDialog";

const DateInput = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [validateMsg, setValidateMsg] = useState({ open: false, msg: "" });
  const handleClose = () => setValidateMsg({ open: false, msg: "" });
  const formik = useFormik({
    initialValues: {
      startDate: "",
      endDate: ""
    },
    onSubmit: (values) => {
      console.log(values);
      const startDateSplit = values.startDate.split('/');
      const endDateSplit = values.endDate.split('/');
      const start = {
        day: parseInt(startDateSplit[0]),
        month: parseInt(startDateSplit[1]),
        year: parseInt(startDateSplit[2])
      }
      const end = {
        day: parseInt(endDateSplit[0]),
        month: parseInt(endDateSplit[1]),
        year: parseInt(endDateSplit[2])
      }

      // validate day range
      if (start.year < 1901 || start.year > 2999 || end.year < 1901 || end.year > 2999) {
        setValidateMsg({ open: true, msg: "Please enter dates between 01/01/1901 and 31/12/2999." });
        formik.resetForm();
        return;
      }
      // if start day < end day
      if (start.year > end.year
        || ((start.year == end.year) && start.month > end.month)
        || ((start.year == end.year && start.month == end.month && start.day > end.day))) {
        dispatch(getResults(end, start));
        return;
      }

      dispatch(getResults(start, end));
      // dispatch

      // 
    },
    validationSchema: DateValidation,
    validateOnBlur: true,
    validateOnChange: true,
  })

  return null;

  return (
    <>
      <ErrorDialog
        open={validateMsg.open}
        msg={validateMsg.msg}
        handleClose={handleClose}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: 5
        }}
      >
        <TextField
          variant="standard"
          label="Start Date"
          name="startDate"
          placeholder="DD/MM/YYYY"
          value={formik.values.startDate}
          error={Boolean(formik.errors.startDate)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.startDate &&
          <Typography variant="caption" color={theme.palette.error.main}>
            {formik.errors.startDate}
          </Typography>
        }
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <TextField
          variant="standard"
          label="End Date"
          name="endDate"
          placeholder="DD/MM/YYYY"
          value={formik.values.endDate}
          error={Boolean(formik.errors.endDate)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.endDate &&
          <Typography variant="caption" color={theme.palette.error.main}>
            {formik.errors.endDate}
          </Typography>
        }
      </Box>
      <Button
        type="submit"
        onClick={formik.submitForm}
        variant="text"
        sx={{
          mt: 4
        }}
      >
        Calculate {'>'}
      </Button>
    </>
  )
}

export default DateInput;