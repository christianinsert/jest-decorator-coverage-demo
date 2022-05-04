import * as typeorm from "typeorm"

module.exports = async () => {
	await typeorm.createConnection({
		type: "postgres",
		host: "localhost",
		port: 5432,
		username: "postgres",
		password: `password`,
		database: "template1",
		logging: false,
		cache: false,
		entities: [],
		extra: {
			idleTimeoutMillis: 0,
		},
	})

	const conn = typeorm.getConnection()
	await conn.query(`DROP DATABASE IF EXISTS "unit-test"`)
	await conn.query(`CREATE DATABASE "unit-test"`)

	await conn.close()
}
