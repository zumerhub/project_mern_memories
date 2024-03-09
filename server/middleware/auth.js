import jwt from "jsonwebtoken";

const secret = 'test';

// wants to like a post
// click the like button => auth middleware (NEXT) => like controller...

const auth = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const isCustomAuth = token.length < 500;   // It is for Google password

      let decodedData;

      if (token && isCustomAuth) {      
        decodedData = jwt.verify(token, secret);
  
        req.userId = decodedData?.id;       // THIS IS OUR MANUAL TOKEN
    } else {
        decodedData = jwt.decode(token);           // THIS IS GOOGLE TOKEN

        req.userId = decodedData?.sub;           // sub is a google name for a specific id that is differentiate user
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
