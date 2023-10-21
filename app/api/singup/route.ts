import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import connectMongoDb from "@/libs/mongodb";
import User from "@/models/user";
import IUser from "@/app/interface/interface";
import mongoose from "mongoose";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  connectMongoDb().catch((err) => res.json(err));
try {
  if (!req.body) {
    return res.status(400).json({ error: "Пусті поля" });
  }
  const { name, email, password, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res
      .status(409)
      .json({ error: "Користувач з таким email вже існує" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create(
      {
        name,
        email,
        password: hashedPassword,
        role,
      },
      (error: unknown, data: IUser) => {
        if (error && error instanceof mongoose.Error.ValidationError) {
          for (let field in error.errors) {
            const msg = error.errors[field].message;
            return res.status(409).json({ error: msg });
          }
        }
        const user = {
          email: data.email,
          name: data.name,
          role: data.role,
          _id: data._id,
        };
        return res.status(201).json({ success: true, user });
      }
    );
  }
} catch (error) {
  return res.status(405).json({ error: "Помилка при реєстрації" });
}

   

    

};



