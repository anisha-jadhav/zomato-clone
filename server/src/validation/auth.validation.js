import joi from "joi";

export const validateSignUp = (userData) => {
  const Schema = joi.object({
    fullName: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    address: joi
      .array()
      .items(joi.object({ details: joi.string(), for: joi.string() })),
    phoneNumber: joi.array().items(joi.number().min(10).max(10).required()),
  });

  return Schema.validateAsync(userData);
};

export const validateSignIn = (userData) => {
  const Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  return Schema.validateAsync(userData);
};
