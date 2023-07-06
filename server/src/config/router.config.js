import JwtPassport from "passport-jwt";
import passport from "passport";
import { UserModel } from "../database/allModels";

const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

// in header when a request is send the token is also sent.
// the token is in the form => Bearer + Token
// so at the time of authenticating token bearer should be removed
// hence to extract only token the option is used

// header : {
//  authorization : bearer+token
//}

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "zomato",
};

export default (passport) => {
  passport.use(
    new JWTStrategy(options, async (jwt_payload, done) => {
      try {
        const doesUserExist = await UserModel.findById(jwt_payload.user);
        if (!doesUserExist) return done(null, false);

        return done(null, doesUserExist);
      } catch (error) {
        throw error;
      }
    })
  );
};
