const Item = require("../../../server/models/Item");

const seedItems = [
  {
    title: "Test item 1"
  },
  {
    title: "Test item 2"
  }
];

const populateItems = async () => {
  await Item.deleteMany();
  await Item.insertMany(seedItems);
};

module.exports = { seedItems, populateItems };
