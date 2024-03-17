import React from "react";

const RoomSection = ({ roomId, adultCount, childCount, handleHotelGuest }) => {
  return (
    <>
      <div className="passengers-type">
        <div className="text">
          <span className="count pcount">{adultCount}</span>
          <div className="type-label">
            <p>Adult</p>
            <span>12+ yrs</span>
          </div>
        </div>
        <div className="button-set">
          <button
            type="button"
            className="btn-add"
            onClick={() => handleHotelGuest("adult", "add", roomId)}
          >
            <i className="fas fa-plus"></i>
          </button>
          <button
            type="button"
            className="btn-add"
            onClick={() => handleHotelGuest("adult", "subtract", roomId)}
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <div className="passengers-type">
        <div className="text">
          <span className="count ccount">{childCount}</span>
          <div className="type-label">
            <p className="fz14 mb-xs-0">Children</p>
            <span>2 - Less than 12 yrs</span>
          </div>
        </div>
        <div className="button-set">
          <button
            type="button"
            className="btn-add"
            onClick={() => handleHotelGuest("child", "add", roomId)}
          >
            <i className="fas fa-plus"></i>
          </button>
          <button
            type="button"
            className="btn-add"
            onClick={() => handleHotelGuest("child", "subtract", roomId)}
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomSection;
