const request = require("supertest");
const app = require("../app/index");
// const Sequelize = require("sequelize");
const { faker } = require("@faker-js/faker");

const dummyToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywibmFtZSI6IkZpa3JpIiwiZW1haWwiOiJmaWtyaUBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoyLCJuYW1lIjoiQURNSU4ifSwiaWF0IjoxNjcyMDIzNjE3fQ.vg8llHkBCzdgN2SIxfZ6RGuICCdzVnw-iSv4XIsoaKY";

describe("GET /v1/cars", () => {
  it("respond 200", (done) => {
    request(app)
      .get("/v1/cars")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, done);
  });
});

describe("GET /v1/cars/:id", () => {
  it("respond 200", (done) => {
    request(app)
      .get("/v1/cars/102")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, done);
  });
});

describe("POST /v1/cars", () => {
  it("respond 201", (done) => {
    request(app)
      .post("/v1/cars")
      .set("Authorization", "Bearer " + dummyToken)
      .send({
        name: faker.name.fullName(),
        price: faker.random.numeric(),
        image: faker.image.imageUrl(),
        size: faker.random.numeric(),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201, done);
  });
});

describe("POST /v1/cars/:id/rent", () => {
  it("respond 500", (done) => {
    request(app)
      .post("/v1/cars/93/rent")
      .set(
        "Authorization",
        "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwibmFtZSI6IkJyaWFuIiwiZW1haWwiOiJicmlhbkBiaW5hci5jby5pZCIsImltYWdlIjpudWxsLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQ1VTVE9NRVIifSwiaWF0IjoxNjcyMDI0MDI1fQ.83PvebTpKMnmtX_zUmRovRvANMLAFzNcxF84pQq0Hp4"
      )
      // .send({
      //   rentStartedAt: "2023-01-20T04:26:17.180Z",
      //   rentEndedAt: "2023-01-22T04:26:17.180Z",
      // })
      .send("anjas")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(500, done);
  });
});

describe("PUT /v1/cars/:id", () => {
  it("respond 200", (done) => {
    request(app)
      .put("/v1/cars/93")
      .set("Authorization", `Bearer ${dummyToken}`)
      .send({
        name: faker.name.fullName(),
        price: faker.random.numeric(),
        image: faker.image.imageUrl(),
        size: faker.random.numeric(),
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, done);
  });
});
