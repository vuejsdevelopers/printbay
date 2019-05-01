const Item = require("../../../server/models/Item");
const User = require("../../../server/models/User");
const { ObjectId } = require("mongodb");
const faker = require("faker");
const jwt = require("jsonwebtoken");
require("dotenv").config({
  path: "../../../../.env.server"
});

const seedItems = [
  {
    title: "Test item 1",
    _id: new ObjectId()
  },
  {
    title: "Test item 2",
    _id: new ObjectId()
  }
];

const userOneId = new ObjectId();
const userTwoId = new ObjectId();
const userThreeId = new ObjectId();

const seedUsers = [
  {
    _id: userOneId,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET).toString(),
    role: "admin"
  },
  {
    _id: userTwoId,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  },
  {
    _id: userThreeId,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    token: jwt.sign({ _id: userThreeId }, process.env.JWT_SECRET).toString()
  }
];

const populateItems = async () => {
  await Item.deleteMany();
  await Item.insertMany(seedItems);
};

const populateUsers = async () => {
  await User.deleteMany();
  await new User(seedUsers[0]).save();
  await new User(seedUsers[1]).save();
  await new User(seedUsers[2]).save();
};

module.exports = { seedItems, populateItems, seedUsers, populateUsers };
