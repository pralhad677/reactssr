
import {Model as User} from '../Model/user'
// import  CatchAsync  from "../utils/CatchAsync"
import CatchAsync from '../utils/CatchAsync'
import AppError from '../utils/AppError'
import  jwt  from 'jsonwebtoken';
 
// // import  AppError  from "../utils/AppError"
const signToken = (id) => {
    return jwt.sign({ id }, 'gwDJ+YFi87Mfo1Ih8M2qe7Jymbns1+h8' , {
          expiresIn:1000000000000000
        });
      };

      const createSendToken = (user, statusCode, res) => {
        const token = signToken(user._id);
        
        console.log(token)
        const cookieOptions = {
          expires: new Date(
            Date.now() + (process.env.JWT_COOKIE_EXPIRES_IN || 3) * 24 * 60 * 60 * 1000
          ),
          httpOnly: true
        };
        if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
        console.log(cookieOptions)
      
        res.cookie('jwt', token, cookieOptions);
      
        // Remove password from output
        user.password = undefined;
      
        res.status(statusCode).json({
          status: 'success',
          token,
          data: {
            user
          }
        });
      };

export const login = CatchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
    // 1) Check if email and password exist
    if (!email || !password) {
      return next(new AppError('Please provide email and password!', 400));
    }
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');

    
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Incorrect email or password', 401));
    }
  
    // 3) If everything ok, send token to client
    createSendToken(user, 200, res);
  });

export const signUp = CatchAsync(async (req, res, next) => {
  const {name,email,password,changepassword:confirmPassword} = req.body
  console.log('name',name)
  console.log('email',email)
  console.log('password',password)
  console.log('confirmPassword',confirmPassword)
  // let emailExist = await User.find({ email }).exec();
  // console.log('emailExist',emailExist)
  // if(emailExist.includes(email)) throw new AppError("User already exist",400)
    const newUser = await User({
      name,
      email,
      password,
      confirmPassword
    });
    console.log('newUser',newUser)
    let user = await newUser.save()
    res.status(201).json({
      user
    })
    // createSendToken(newUser, 201, res);
  });

  export const protect = CatchAsync(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
  
    if (!token) {
      return next(
        new AppError('You are not logged in! Please log in to get access.', 401)
      );
    }
  // 2) Verification token
    const decoded =  jwt.verify(token, 'gwDJ+YFi87Mfo1Ih8M2qe7Jymbns1+h8');
  
    // 3) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        new AppError(
          'The user belonging to this token does no longer exist.',
          401
        )
      );
    }
  // 4) Check if user changed password after the token was issued
  // a=currentUser
  if (currentUser.changedPasswordAfter(decoded.iat)) {//iat =issued at
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
  })

  export const restrictTo = (...arr) => {
    return (req,res,next) => {
        if(!arr.includes(req.user.role)){
        
          return next( new AppError('Your are not authorized to change any resources',403))
        }
        next()
    }
  }
