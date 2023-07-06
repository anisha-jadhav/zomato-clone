import joi from "joi";

export const validateStringRequired = (id) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });

  return Schema.validateAsync(id);
};

export const validateCategory = (category) => {
  const Schema = joi.object({
    category: joi.string().required(),
  });

  return Schema.validateAsync(category);
};

// validation for update user route
export const validateUpdateUser = (userData) => {
  const Schema = joi.object({
    fullName: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    address: joi
      .array()
      .items(joi.object({ details: joi.string(), for: joi.string() })),
    phoneNumber: joi.array().items(joi.number().min(10).max(10).required()),
  });

  return Schema.validateAsync(userData);
};
