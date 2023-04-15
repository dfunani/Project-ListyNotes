import { type } from "os";
import { NextApiRequest, NextApiResponse } from "next";
const validate = require('../../../types/helpers')
const db_context = require('../../../types/helpers')
const hash = require('bcryptjs').hash
import { Db } from "mongodb";

type body = {
	username: string;
	email: string;
	password: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) 
{
	try {
		if (req.method === "POST") {
			const { status, response } = await post(req, res)
			res.status(status).json(response)
		}
		return res.status(405).json({ response: "Error", message: "Request Method Not Supported", validations: { method: req.method } })
	}catch (e: any) {
		return res.status(500).json({ response: "Error", message: "Server Error", validations: { error: e.toString() } })
	}
}

async function post(req: NextApiRequest, res: NextApiResponse): Promise<{ status: number, response: {} }>{
	const { username, email, password }: body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
	const __email: string = email.toLowerCase();
	const __username: string = username.toLowerCase();
	
		
		if (!validate(__username, 'username') || !validate(__email, "email") || !validate(password, "password"))
			return {status: 400, response: { response: "Error", message: "Invalid Request Body", validations: { username: validate(__username, 'username'), email: validate(__email, "email"), password: validate(password, "password")}  }}
		
		else {
			const db: Db = await db_context();

			const checkUser = await db.collection('Users').findOne({ email: __email })
			if (checkUser)
				return {status: 409, response: { response: "Error", message: "User already Exists", validation: { email: __email, exists: true } }}
			
			const createdUser = await db.collection('Users').insertOne({
				username: __username,
				email: __email,
				password: await hash(password, 12),
				is_admin: false,
				is_developer: false
			})
			return {status: 201, response: {response: "Success", message: "User Created Successfully", createdUser: createdUser }}
		}

}

