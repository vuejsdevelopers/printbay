const expect = require("expect");
const app = require("../../../server");
const request = require("supertest");
const Item = require("../../../server/models/Item");

beforeEach(async () => Item.deleteMany());

describe("POST /items", () => {
  it("should create a new item", async () => {
    const body = { title: "Test title" };
    const res = await request(app)
      .post("/items")
      .send(body)
      .expect(200);
    expect(res.body.item.title).toBe(body.title);
    const items = await Item.find();
    expect(items.length).toBe(1);
    expect(items[0].title).toBe(body.title);
  });
});
