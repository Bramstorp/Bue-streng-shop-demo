import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

const StringsForm = () => {
  const [formData, setFormData] = useState({
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
  });

  const {
    string_type,
    string_length,
    winding_a,
    winding_b,
    winding_c,
    winding_d,
    winding_e,
    winding_f,
    eye_x,
    eye_y,
    material,
    string_amount,
    color,
    twist,
  } = formData;
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setLoading(true);
    axios
      .post(
        "http://localhost:8000/api/strings/",
        {
          string_type,
          string_length,
          winding_a,
          winding_b,
          winding_c,
          winding_d,
          winding_e,
          winding_f,
          eye_x,
          eye_y,
          material,
          string_amount,
          color,
          twist,
        },
        config
      )
      .then((res) => {
        setLoading(false);
        window.scrollTo(0, 0);
        props.setString(res.data);
      })
      .catch((err) => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div class="form-row">
        <div class="form-group form-group col-md-6">
          <input
            type="text"
            class="form-control"
            name="string_type"
            onChange={(e) => onChange(e)}
            value={string_type}
            placeholder="Streng Type.."
          />
        </div>
        <div class="form-group form-group col-md-6">
          <input
            type="number"
            class="form-control"
            placeholder="Streng Længde.."
            name="string_length"
            onChange={(e) => onChange(e)}
            value={string_length}
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
            onChange={(e) => onChange(e)}
            value={eye_x}
          />
        </div>
        <div class="form-group col-md-6">
          <input
            type="number"
            class="form-control"
            placeholder="Øsken Y"
            name="eye_y"
            onChange={(e) => onChange(e)}
            value={eye_y}
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
            onChange={(e) => onChange(e)}
            value={material}
          />
        </div>
        <div class="form-group form-group col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Farve"
            name="color"
            onChange={(e) => onChange(e)}
            value={color}
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
            onChange={(e) => onChange(e)}
            value={string_amount}
          />
        </div>
        <div class="form-group form-group col-md-6">
          <input
            type="number"
            step="0.1"
            class="form-control"
            placeholder="twist"
            name="twist"
            onChange={(e) => onChange(e)}
            value={twist}
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
            onChange={(e) => onChange(e)}
            value={winding_a}
          />
        </div>
        <div class="form-group col-md-4">
          <input
            type="number"
            class="form-control"
            placeholder="Bevikling B"
            name="winding_b"
            onChange={(e) => onChange(e)}
            value={winding_b}
          />
        </div>
        <div class="form-group col-md-4">
          <input
            type="number"
            class="form-control"
            placeholder="Bevikling C"
            name="winding_c"
            onChange={(e) => onChange(e)}
            value={winding_c}
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
            onChange={(e) => onChange(e)}
            value={winding_d}
          />
        </div>
        <div class="form-group col-md-4">
          <input
            type="number"
            class="form-control"
            placeholder="Bevikling E"
            name="winding_e"
            onChange={(e) => onChange(e)}
            value={winding_e}
          />
        </div>
        <div class="form-group col-md-4">
          <input
            type="number"
            class="form-control"
            placeholder="Bevikling F"
            name="winding_f"
            onChange={(e) => onChange(e)}
            value={winding_f}
          />
        </div>
      </div>
      {loading ? (
          <Loader type="Oval" color="#424242" height={50} width={50} />
      ) : (
        <button type="submit" class="btn btn-primary">
        Opret Streng
        </button>
      )}
    </form>
  );
};

export default StringsForm;
