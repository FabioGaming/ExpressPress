import request from "supertest";
import app from "../../app";

describe("Account Routes", () => {
  describe("GET /api/account/me", () => {
    it("should return a successful user response", async () => {
      // TODO
    });

    it("should fail the user response with an unauthenticated message", async () => {
      const response = await request(app).get("/api/account/me");
      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty("error");
      expect(response.body).toHaveProperty("code");
      expect(response.body).toHaveProperty("timestamp");
    });
  });

  describe("PUT /api/account/me", () => {
    it("should accept the changes and return updated user data", async () => {
      // TODO
    });
    it("should fail the request with an unauthenticated message", async () => {
      const response = await request(app).put("/api/account/me");
      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty("error");
      expect(response.body).toHaveProperty("code");
      expect(response.body).toHaveProperty("timestamp");
    });
    it("should fail the request because the given user slug already exists", async () => {
      const response = await request(app).put("/api/account/me"); // TODO
    });
  });
});
