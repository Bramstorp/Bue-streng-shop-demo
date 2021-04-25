import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Formik } from "formik";

const StringsForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{
          string_type: "",
          string_length: "",
          winding_a: "",
          winding_b: "",
          winding_c: "",
          winding_d: "",
          winding_e: "",
          winding_f: "",
          eye_x: "",
          eye_y: "",
          material: "",
          string_amount: "",
          color: "",
          twist: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setLoading(true);
          axios
            .post(
              "http://localhost:8000/api/strings/",
              values
            )
            .then((res) => {
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
            });
          setSubmitting(false);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div class="form-row">
              <div class="form-group form-group col-md-6">
                <input
                  type="text"
                  class="form-control"
                  name="string_type"
                  onChange={handleChange}
                  value={values.string_type}
                  onBlur={handleBlur}
                  placeholder="Streng Type.."
                />
              </div>
              <div class="form-group form-group col-md-6">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Streng Længde.."
                  name="string_length"
                  onChange={handleChange}
                  value={values.string_length}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Øsken X"
                  name="eye_x"
                  onChange={handleChange}
                  value={values.eye_x}
                  onBlur={handleBlur}
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Øsken Y"
                  name="eye_y"
                  onChange={handleChange}
                  value={values.eye_y}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group form-group col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Material"
                  name="material"
                  onChange={handleChange}
                  value={values.material}
                  onBlur={handleBlur}
                />
              </div>
              <div class="form-group form-group col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Farve"
                  name="color"
                  onChange={handleChange}
                  value={values.color}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group form-group col-md-6">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Streng Antal"
                  name="string_amount"
                  onChange={handleChange}
                  value={values.string_amount}
                  onBlur={handleBlur}
                />
              </div>
              <div class="form-group form-group col-md-6">
                <input
                  type="number"
                  step="0.1"
                  class="form-control"
                  placeholder="twist"
                  name="twist"
                  onChange={handleChange}
                  value={values.twist}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Bevikling A"
                  name="winding_a"
                  onChange={handleChange}
                  value={values.winding_a}
                  onBlur={handleBlur}
                />
              </div>
              <div class="form-group col-md-4">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Bevikling B"
                  name="winding_b"
                  onChange={handleChange}
                  value={values.winding_b}
                  onBlur={handleBlur}
                />
              </div>
              <div class="form-group col-md-4">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Bevikling C"
                  name="winding_c"
                  onChange={handleChange}
                  value={values.winding_c}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Bevikling D"
                  name="winding_d"
                  onChange={handleChange}
                  value={values.winding_d}
                  onBlur={handleBlur}
                />
              </div>
              <div class="form-group col-md-4">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Bevikling E"
                  name="winding_e"
                  onChange={handleChange}
                  value={values.winding_e}
                  onBlur={handleBlur}
                />
              </div>
              <div class="form-group col-md-4">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Bevikling F"
                  name="winding_f"
                  onChange={handleChange}
                  value={values.winding_f}
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
                class="btn btn-primary"
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

export default StringsForm;
