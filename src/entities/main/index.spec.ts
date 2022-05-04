import { MyConfigEntity, MyMainEntity } from ".."

describe("entities/main", () => {
	test("should create main entity", async () => {
		const config = await MyConfigEntity.create({ metadata: "123" }).save()
		await MyMainEntity.create({ configId: config.id }).save()
		const main = await MyMainEntity.find()
		expect(main.length).toBe(1)
	})
})
