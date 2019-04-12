import React from "react";

function CastEdit(props) {
  return (
    <div className="container">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input class="form-control" id="name" value={props.person.name} placeholder="Enter name" />
        </div>
        <div class="form-group">
          <label for="height">Height</label>
          <input class="form-control" id="height" placeholder="Enter Height" />
        </div>
        <div class="form-group">
          <label for="mass">Mass</label>
          <input class="form-control" id="mass" placeholder="Enter Mass" />
        </div>
        <div class="form-group">
          <label for="hairColor">Hair Color</label>
          <input
            class="form-control"
            id="hairColor"
            placeholder="Enter Hair Color"
          />
        </div>
        <div class="form-group">
          <label for="skinColor">Skin Color</label>
          <input
            class="form-control"
            id="skinColor"
            placeholder="Enter Skin Color"
          />
        </div>
      </form>
    </div>
  );
}

export default CastEdit;
