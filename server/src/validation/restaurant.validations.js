import joi from "joi";

export const validateRestaurantCity = (restaurantObject) => {
  const Schema = joi.object({
    city: joi.string().required(),
  });
  return Schema.validateAsync(restaurantObject);
};

export const validateSearchString = (searchString) => {
  const Schema = joi.object({
    string: joi.string().required(),
  });
  return Schema.validateAsync(searchString);
};
