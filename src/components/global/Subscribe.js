import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="container p-2 mb-5">
        <div className="text-center">
          <h3
            className="mb-4"
            style={{ fontWeight: "700", letterSpacing: "-1px" }}
          >
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <div className="subscribe">
            <input
              type="text"
              className="subscribeInput"
              placeholder="E-Mail"
            />
            <button className="btn subscribeBtn">SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
