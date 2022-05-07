import * as Yup from "yup";

const DateValidation = Yup.object().shape( {
  startDate: Yup.string()
  .required("Please enter a date")
  .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ , "please enter a valid date format"),
  endDate: Yup.string()
  .required("Please enter a date")
  .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ , "please enter a valid date format")
})

export default DateValidation;