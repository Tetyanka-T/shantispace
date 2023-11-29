import connectMongoDb from '../../../libs/mongodb'
import User from '../../../models/user'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '../../../libs/prismadb'

export const POST = async (req, res) => {
  try {
    const { name, email, password, role } = await req.json()
    if ((!email, !name, !password)) {
      return new NextResponse('Заповніть всі поля', { status: 400 })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const userExists = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (userExists) {
      return NextResponse.json(
        { message: 'Користувач з таким email вже існує' },
        { status: 404 }
      )
    }
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        role
      }
    })
    // await connectMongoDb()
    // const userExists = await User.findOne({ email })

    // if (userExists) {
    //   return NextResponse.json(
    //     { message: 'Користувач з таким email вже існує' },
    //     { status: 404 }
    //   )
    // }

    // const user = await User.create({
    //   name,
    //   email,
    //   password: hashedPassword,
    //   role
    // })
    return NextResponse.json(
      { user },
      { message: 'Користувач зареєстрований' },
      { status: 201 }
    )
  } catch (error) {
    console.log(error, 'Registration Error')
    return NextResponse.json({ message: 'Error registred' }, { status: 500 })
  }
}
