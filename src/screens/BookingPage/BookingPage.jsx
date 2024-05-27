import React, { useEffect, useState } from "react";
import { Nav } from "../../components/Navbar/Nav";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./BookingPage.css";
import * as Yup from "yup";
import { fetchAPI } from "../../fakeapi";
const BookingPage = () => {
  const initialValues = {
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  };

  const [dateData, setDateData] = useState([]);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  useEffect(() => {
    let x = fetchAPI(today);
    setDateData(x);
  }, []);

  const validationSchema = Yup.object().shape({
    date: Yup.date()
      .min(today, "Selected date must be today or a future date")
      .required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .required("Number of guests is required")
      .min(1, "Number of guests must be at least 1")
      .max(10, "Number of guests cannot exceed 10"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="booking-page">
      <Nav />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <label htmlFor="date" className="form-label">
              Choose date
            </label>
            <Field type="date" id="date" name="date" className="form-field" />
            <ErrorMessage name="date" component="div" />

            <label htmlFor="time" className="form-label">
              Choose time
            </label>
            <Field as="select" id="time" name="time" className="form-field">
              {dateData.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Field>
            <ErrorMessage name="time" component="div" />

            <label htmlFor="guests" className="form-label">
              Number of guests
            </label>
            <Field
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              className="form-field"
            />
            <ErrorMessage name="guests" component="div" />

            <label htmlFor="occasion" className="form-label">
              Occasion
            </label>
            <Field
              as="select"
              id="occasion"
              name="occasion"
              className="form-field"
            >
              <option value="">Select Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Field>
            <ErrorMessage name="occasion" component="div" />

            <button type="submit" disabled={isSubmitting} className="btn">
              Make Your reservation
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingPage;
