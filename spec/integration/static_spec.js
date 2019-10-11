const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";


describe("routes : static", () => {

//#1
  describe("GET /", () => {

//#2
<<<<<<< HEAD
    it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response", (done) => {
=======
  it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response", (done) => {
>>>>>>> topic-resource

//#3
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Welcome to Bloccit");
<<<<<<< HEAD

=======
>>>>>>> topic-resource
//#4
        done();
      });
    });

  });
});
