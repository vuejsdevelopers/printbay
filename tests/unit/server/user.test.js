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
    expect(res.body.id).toBe(seedUsers[0]._id.toHexString());
  });
  it("should return 401 if unauthenticated", async () => {
    const res = await request(app)
      .get("/users")
      .expect(401);
    expect(res.body.id).toBeUndefined();
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
    expect(res.body.email).toBe(user.email);
    const doc = await User.findOne({ email: user.email });
    expect(doc).toBeTruthy();
    expect(doc.password).not.toBe(user.password);
  });
  it("should not create an user with invalid data", async () => {
    await request(app)
      .post("/users")
      .send({})
      .expect(400);
    const users = await User.find();
    expect(users.length).toBe(seedUsers.length);
  });
  it("should not create a new user with duplicate email", async () => {
    await request(app)
      .post("/users")
      .send(seedUsers[0])
      .expect(400);
    const users = await User.find();
    expect(users.length).toBe(seedUsers.length);
  });
});

describe("POST /users/login", () => {
  it("should log in user and return auth token", async () => {
    const { _id, email, password } = seedUsers[1];
    const res = await request(app)
      .post("/users/login")
      .send({ email, password })
      .expect(200);
    expect(res.headers.authorization).toBeTruthy();
    const user = await User.findById(_id);
    expect(user.token).toBe(res.headers.authorization.split(" ")[1]);
  });
  it("should reject invalid login", async () => {
    const { _id, email, password } = seedUsers[1];
    const res = await request(app)
      .post("/users/login")
      .send({ email, password: password + "0" })
      .expect(400);
    expect(res.headers.authorization).toBeFalsy();
    const user = await User.findById(_id);
    expect(user.token).toBeUndefined();
  });
});

describe("GET /users/logout", () => {
  it("should remove auth token on logout", async () => {
    const res = await request(app)
      .get("/users/logout")
      .set("authorization", `Bearer ${seedUsers[2].token}`)
      .expect(200);
    expect(res.headers.authorization).toBeFalsy();
    const user = await User.findById(seedUsers[2]._id);
    expect(user.token).toBeNull();
  });
});
