const expect = require("expect");
const app = require("../../../server");
const request = require("supertest");
const Item = require("../../../server/models/Item");
const { seedItems, populateItems, seedUsers } = require("./seed");
const { ObjectId } = require("mongodb");

beforeEach(populateItems);

describe("POST /items", () => {
  it("should create a new item", async () => {
    const body = { title: "Test title" };
    const res = await request(app)
      .post("/items")
      .set("authorization", `Bearer ${seedUsers[0].token}`)
      .send(body)
      .expect(200);
    expect(res.body.title).toBe(body.title);
    const items = await Item.find();
    expect(items.length).toBe(seedItems.length + 1);
    expect(items[seedItems.length].title).toBe(body.title);
  });
  it("should not create a new item with invalid data", async () => {
    await request(app)
      .post("/items")
      .set("authorization", `Bearer ${seedUsers[0].token}`)
      .send({})
      .expect(400);
    const items = await Item.find();
    expect(items.length).toBe(seedItems.length);
  });
  it("shouldn't create an item without authorization header", async () => {
    await request(app)
      .post("/items")
      .expect(401);
  });
  it("shouldn't create an item unless admin", async () => {
    await request(app)
      .post("/items")
      .set("authorization", `Bearer ${seedUsers[2].token}`)
      .expect(403);
  });
});

describe("GET /items", () => {
  it("should get all items", async () => {
    const res = await request(app)
      .get("/items")
      .expect(200);
    expect(res.body.length).toBe(seedItems.length);
  });
});

describe("GET /items/:id", () => {
  it("should return item doc", async () => {
    const res = await request(app)
      .get(`/items/${seedItems[0]._id.toHexString()}`)
      .expect(200);
    expect(res.body.title).toBe(seedItems[0].title);
  });
  it("should return 404 if item not found", async () => {
    await request(app)
      .get(`/items/${new ObjectId().toHexString()}`)
      .expect(404);
  });
  it("should return 404 for invalid ID", async () => {
    await request(app)
      .get("/items/123")
      .expect(404);
  });
});

describe("DELETE /items/:id", () => {
  const hexId = seedItems[1]._id.toHexString();
  it("shouldn't delete item without authorization header", async () => {
    await request(app)
      .delete(`/items/${hexId}`)
      .expect(401);
  });
  it("shouldn't delete item if user is not admin", async () => {
    await request(app)
      .delete(`/items/${hexId}`)
      .set("authorization", `Bearer ${seedUsers[2].token}`)
      .expect(403);
  });
  it("should delete an item", async () => {
    const res = await request(app)
      .delete(`/items/${hexId}`)
      .set("authorization", `Bearer ${seedUsers[0].token}`)
      .expect(200);
    expect(res.body.id).toBe(hexId);
    const item = await Item.findById(hexId);
    expect(item).toBeNull();
  });
  it("should return 404 if item not found", async () => {
    await request(app)
      .delete(`/items/${new ObjectId().toHexString()}`)
      .set("authorization", `Bearer ${seedUsers[0].token}`)
      .expect(404);
  });
  it("should return 404 if object ID is invalid", async () => {
    await request(app)
      .delete("/items/123")
      .set("authorization", `Bearer ${seedUsers[0].token}`)
      .expect(404);
  });
});

describe("PATCH /items/:id", () => {
  const hexId = seedItems[1]._id.toHexString();
  it("shouldn't update item without authorization header", async () => {
    await request(app)
      .patch(`/items/${hexId}`)
      .expect(401);
  });
  it("shouldn't update item if user is not admin", async () => {
    await request(app)
      .delete(`/items/${hexId}`)
      .set("authorization", `Bearer ${seedUsers[2].token}`)
      .expect(403);
  });
  it("should update item", async () => {
    const title = "Updated title";
    const res = await request(app)
      .patch(`/items/${hexId}`)
      .set("authorization", `Bearer ${seedUsers[0].token}`)
      .send({ title })
      .expect(200);
    expect(res.body.title).toBe(title);
    const item = await Item.findById(hexId);
    expect(item.title).toBe(title);
  });
  it("should return 404 if item not found", async () => {
    await request(app)
      .patch(`/items/${new ObjectId().toHexString()}`)
      .set("authorization", `Bearer ${seedUsers[0].token}`)
      .expect(404);
  });
  it("should return 404 if object ID is invalid", async () => {
    await request(app)
      .patch("/items/123")
      .set("authorization", `Bearer ${seedUsers[0].token}`)
      .expect(404);
  });
});
