const expect = require("expect");
const app = require("../../../server");
const request = require("supertest");

describe("POST /items", () => {
  it("should create a new item", async () => {
    const body = { title: "Test title" };
    const res = await request(app)
      .post("/items")
      .send(body)
      .expect(200);
    expect(res.body.item.title).toBe(body.title);
  });
});
