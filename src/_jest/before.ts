import * as typeorm from "typeorm"
import { v4 } from "uuid"

const DB_PREFIX = `${v4()}-`

beforeAll(async () => {
	await typeorm.createConnection({
		type: "postgres",
		host: "localhost",
		port: 5432,
		username: "postgres",
		password: `password`,
		database: "unit-test",
		logging: false,
		cache: false,
		entities: ["src/entities/index.ts"],
		extra: {
			idleTimeoutMillis: 0,
		},
		entityPrefix: DB_PREFIX,
		synchronize: true,
	})
})

const tables = ["my_main_entity", "my_config_entity"].map((t) => `${DB_PREFIX}${t}`)

beforeEach(async () => {
	const conn = typeorm.getConnection()
	if (!conn.isConnected) {
		await conn.connect()
	}
	for (const table of tables) {
		await conn.query(`DELETE FROM "${table}"`)
	}
})

afterAll(async () => {
	const conn = typeorm.getConnection()
	if (!conn.isConnected) {
		await conn.connect()
	}
	for (const table of tables) {
		await conn.query(`DROP TABLE "${table}"`)
	}
	await conn.close()
})
