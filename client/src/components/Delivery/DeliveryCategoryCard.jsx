import React from "react";

const DeliverySmCard = ({ image, title, time }) => {
  return (
    <>
      <div className="lg:hidden  rounded-md w-full">
        <div className="w-full h-26 ">
          <img
            className="w-full h-full object-cover object-center  rounded-full"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="my-1 text-center font-dark">{title}</h3>
        </div>
        <div>
          <h3 className="text-lg my-1 text-center font-light">{time}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryLgCard = ({ image, title, time }) => {
  return (
    <>
      <div className="hidden lg:block rounded-md w-full">
        <div className="w-full h-26">
          <img
            className="w-full h-full object-center object-cover  rounded-full"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="my-1 text-center font-dark">{title}</h3>
        </div>
        <div>
          <h3 className="text-lg my-1 text-center font-light">{time}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryCategoryCard = (props) => {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
};

export default DeliveryCategoryCard;
