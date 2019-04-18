const expect = require("expect");
const app = require("../../../server");
const request = require("supertest");
const User = require("../../../server/models/User");
const { seedUsers, populateUsers } = require("./seed");
const { ObjectId } = require("mongodb");
const faker = require("faker");

beforeEach(populateUsers);

describe("GET /users", () => {
  it("should return user if authenticated", async () => {
    const res = await request(app)
      .get("/users")
      .set("authorization", `Bearer ${seedUsers[0].token}`)
      .expect(200);
    expect(res.body.user._id).toBe(seedUsers[0]._id.toHexString());
  });
  it("should return 401 if unauthenticated", async () => {
    const res = await request(app)
      .get("/users")
      .expect(401);
    expect(res.body.user).toBeUndefined();
  });
});

describe("POST /users", () => {
  it("should create a user", async () => {
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    const res = await request(app)
      .post("/users")
      .send(user)
      .expect(200);
    expect(res.header.authorization).toBeDefined();
    expect(res.body.user.email).toBe(user.email);
    const doc = await User.findOne({ email: user.email });
    expect(doc).toBeTruthy();
  });
  it("should not create an user with invalid data", async () => {
    await request(app)
      .post("/users")
      .send({})
      .expect(400);
    const users = await User.find();
    expect(users.length).toBe(2);
  });
  it("should not create a new user with duplicate email", async () => {
    await request(app)
      .post("/users")
      .send(seedUsers[0])
      .expect(400);
    const users = await User.find();
    expect(users.length).toBe(2);
  });
});
