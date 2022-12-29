const request = require("supertest");
const app = require("../app/index");
const { faker } = require("@faker-js/faker");

const loginDummy = {
  email: "fikri@binar.co.id",
  password: "123456",
};

const dummyToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwibmFtZSI6IkJyaWFuIiwiZW1haWwiOiJicmlhbkBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQ1VTVE9NRVIifSwiaWF0IjoxNjcyMDI0MDI1fQ.83PvebTpKMnmtX_zUmRovRvANMLAFzNcxF84pQq0Hp4";

describe("POST /v1/auth/login", () => {
  it("respond 201", (done) => {
    request(app)
      .post("/v1/auth/login")
      .send(loginDummy)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201, done);
  });

  it("respond 401", (done) => {
    request(app)
      .post("/v1/auth/login")
      .send({
        email: loginDummy.email,
        password: "123",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(401, done);
  });
});

// describe("GET /v1/auth/whoami", () => {
//   it("respond 200", (done) => {
//     request(app)
//       .get("/v1/auth/whoami")
//       .set("Authorization", `Bearer ${dummyToken}`)
//       .expect("Content-Type", "application/json; charset=utf-8")
//       .expect(200, done);
//   }, 10000);
// });

// describe("POST /v1/auth/register");
