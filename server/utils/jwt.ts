import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your-secret-key';

export const generateToken = (payload: object, expiresIn: string | number) => {
  return jwt.sign(payload, secret, { expiresIn });
};

export const verifyToken = (token: string) => {
  try {    
    return jwt.verify(token, secret);
  } catch (error) {
    throw createError({ message: "Token expired. Request a new one" })
  }
};
