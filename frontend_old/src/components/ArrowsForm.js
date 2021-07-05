import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Formik } from "formik";

const ArrowsForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{
          arrow_name: "",
          arrow_length: "",
          arrow_amount: "",
          wrap: "",
          wrap_color: "",
          venis_type: "",
          venis_length: "",
          venis_color: "",
          point_type: "",
          point_weight: "",
          insert_type: "",
          nock_type: "",
          nock_color: "",
          nock_insert_type: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setLoading(true);
          axios
            .post("http://localhost:8000/api/arrows/", values)
            .then((res) => {
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
            });
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="arrow_name"
                  onChange={handleChange}
                  value={values.arrow_name}
                  onBlur={handleBlur}
                  placeholder="Pil Navn.."
                />
              </div>
              <div className="form-group form-group col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Pil Længde.."
                  name="arrow_length"
                  onChange={handleChange}
                  value={values.arrow_length}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Pil Mængede"
                  name="arrow_amount"
                  onChange={handleChange}
                  value={values.eye_x}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Wrap"
                  name="wrap"
                  onChange={handleChange}
                  value={values.wrap}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="wrap_color"
                  name="wrap_color"
                  onChange={handleChange}
                  value={values.wrap_color}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="venis_type"
                  name="venis_type"
                  onChange={handleChange}
                  value={values.venis_type}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-group col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="venis_length"
                  name="venis_length"
                  onChange={handleChange}
                  value={values.venis_length}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group form-group col-md-6">
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  placeholder="venis_color"
                  name="venis_color"
                  onChange={handleChange}
                  value={values.venis_color}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="point_type"
                  name="point_type"
                  onChange={handleChange}
                  value={values.point_type}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="point_weight"
                  name="point_weight"
                  onChange={handleChange}
                  value={values.point_weight}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="insert_type"
                  name="insert_type"
                  onChange={handleChange}
                  value={values.insert_type}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="nock_type"
                  name="nock_type"
                  onChange={handleChange}
                  value={values.nock_type}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="nock_color"
                  name="nock_color"
                  onChange={handleChange}
                  value={values.nock_color}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="nock_insert_type"
                  name="nock_insert_type"
                  onChange={handleChange}
                  value={values.nock_insert_type}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            {loading ? (
              <Loader type="Oval" color="#424242" height={50} width={50} />
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                Opret Streng
              </button>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ArrowsForm;
