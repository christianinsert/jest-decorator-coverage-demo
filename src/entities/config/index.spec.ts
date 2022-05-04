import { MyConfigEntity } from ".."

describe("entities/config", () => {
	test("should create config entity", async () => {
		await MyConfigEntity.create({ metadata: "123" }).save()
		const configs = await MyConfigEntity.find()
		expect(configs.length).toBe(1)
	})
})
