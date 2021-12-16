import userModel from '../models/userModel'
import { Request, Response } from 'express'
import md5 from 'md5'
import dotenv from 'dotenv'

dotenv.config()

async function register(req: Request, res: Response) {
  try {
    const user = await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.SECRET as string & { asBytes: true }),
    })

    return res.status(201).send({ msg: 'Success Registered', user })
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!!', error })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await userModel.find({}, 'name email')

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

export default { register, getAll }
