import clientPromise from '../lib/mongodb'
import { Db, MongoClient } from 'mongodb'

module.exports = function validate(input: string, validator: string): Boolean{
	switch (validator.toLowerCase()) {
		case 'email':
			return /[a-zA-Z0-9]+\.?[a-zA-Z0-9]+@.+\.[A-Za-z]/.test(input);
		case 'username':
			return /.?[a-zA-Z]{6}.?/.test(input);
		case 'password':
			return /.?[a-zA-Z]{6}.?/.test(input) && /@|_|\\|\?|!|\*|\+|\-/.test(input);
		default:
			return false
	}
}

module.exports = async function db_context(): Promise<Db>{
		const client: MongoClient = await clientPromise;
		const db: Db = client.db(process.env.DB_NAME)
		return db
  }