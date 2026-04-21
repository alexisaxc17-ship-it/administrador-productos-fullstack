import server from "../server"
import request from "supertest"

describe("GET /api/products", () => {
  it("should send back a json response", async () => {
    const res = await request(server).get("/api/products")

    expect(res.status).toBe(200)
    expect(res.headers["content-type"]).toMatch(/json/)
    expect(res.body).toHaveProperty("data")
  })
})