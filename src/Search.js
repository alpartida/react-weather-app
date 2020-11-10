import React from "react";

export default function Search () {
  return (
    <div className="city-form">
          <form>
            <input type="text" placeholder="city" />
            <button type="submit" id="submitButton" class="btn btn-secondary">
              Submit
            </button>
            <button id="localButton" class="btn btn-light">
              Current Location
            </button>
          </form>
        </div>
            );
      }