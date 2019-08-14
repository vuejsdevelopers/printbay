const app = require("../../server/index");
const { SERVER_PORT } = process.env;

let server;

module.exports = {
  before: async done => {
    try {
      server = await app.listen(SERVER_PORT);
      done();
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  },
  after: async done => {
    server.close(done);
    process.exit();
  }
};
