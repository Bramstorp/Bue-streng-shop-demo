
import React from "react";

const StringsForm = () => {
  return (
    <form>
      <div class="form-row">
        <div class="form-group form-group col-md-6">
          <input type="text" class="form-control" placeholder="Streng Type.." />
        </div>
        <div class="form-group form-group col-md-6">
          <input
            type="number"
            class="form-control"
            placeholder="Streng Længde.."
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <input type="number" class="form-control" placeholder="Øsken X" />
        </div>
        <div class="form-group col-md-6">
          <input type="number" class="form-control" placeholder="Øsken Y" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group form-group col-md-6">
          <input type="text" class="form-control" placeholder="Material" />
        </div>
        <div class="form-group form-group col-md-6">
          <input type="text" class="form-control" placeholder="Farve" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group form-group col-md-6">
          <input type="number" class="form-control" placeholder="Streng Antal" />
        </div>
        <div class="form-group form-group col-md-6">
          <input type="text" class="form-control" placeholder="Twist" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <input type="number" class="form-control" placeholder="Bevikling A" />
        </div>
        <div class="form-group col-md-4">
          <input type="number" class="form-control" placeholder="Bevikling B" />
        </div>
        <div class="form-group col-md-4">
          <input type="number" class="form-control" placeholder="Bevikling C" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <input type="number" class="form-control" placeholder="Bevikling D" />
        </div>
        <div class="form-group col-md-4">
          <input type="number" class="form-control" placeholder="Bevikling E" />
        </div>
        <div class="form-group col-md-4">
          <input type="number" class="form-control" placeholder="Bevikling F" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        Opret Streng
      </button>
    </form>
  );
};

export default StringsForm;
