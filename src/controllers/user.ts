// src/controller/user.ts
// import { Request,Response,NextFunction } from 'express';
// import { getUserByUsername } from '../utils/dbHelper';

// export const getUser = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const username = req.params.username;
//         const user = await getUserByUsername(username);
//         // if(user.length === 0){
//         //     res.status(404).json({message: 'User not found'});
//         // } else {
//         //     res.status(200).json(user);
//         // }
//     } catch (err) {
//         next(err);
//     }
// };
// src/controllers/user.ts
import { Request, Response, NextFunction } from 'express';
// import { getUserByUsername } from '../utils/dbHelper';
import { getUserByUsername } from '../helpers/userHelpers';
import { User } from '../types';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const username = req.params.username;
    const user: User[] = await getUserByUsername(username);

    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user[0]);
  } catch (error) {
    next(error);
  }
};
