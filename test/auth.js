const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

// Assertion style
let should = chai.should();

chai.use(chaiHttp);

describe("Hospital API", () => {
  /**
   * Test the POST route
   */

  describe("POST /api/doctor/register_patient", () => {
    it("it should POST a new patient", (done) => {
      const patient = {
        phoneNo: 1234567890,
      };
      chai
        .request(server)
        .post("/api/doctor/register_patient")

        .send(patient)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.patient.should.have.property("phoneNo");

          done();
        });
    });
  });
});
