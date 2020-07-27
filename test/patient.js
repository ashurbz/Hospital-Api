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

  describe("POST /api/patient/:id/create_report", () => {
    it("it should POST a new report", (done) => {
      const report = {
        status: "negative",
        createdBy: "ram",
        patient_id: "5eb645480f8a8718f26f7260",
      };
      chai
        .request(server)
        .post("/api/patient/5eb645480f8a8718f26f7260/create_report")

        .send(report)
        .end((err, res) => {
          console.log("response", res);
          res.should.have.status(200);

          res.body.data.should.have.property("patient_id");
          res.body.data.should.have.property("createdBy");
          res.body.data.should.have.property("status");

          done();
        });
    });
  });

  /**
   * Test the GET route
   */
  describe("GET /api/patient/:id/all_report", () => {
    it("it should POST a all patient", (done) => {
      const report = {
        id: "5eb645480f8a8718f26f7260",
      };
      chai
        .request(server)
        .get("/api/patient/5eb645480f8a8718f26f7260/all_report")

        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data[0].should.have.property("status");
          res.body.data[1].should.have.property("createdBy");
          res.body.data[2].should.have.property("patient_id");

          done();
        });
    });
  });
});
