import { describe, it, expect } from "vitest";
import fc from "fast-check";

describe("setup", () => {
  it("runs vitest", () => expect(1 + 1).toBe(2));
  it("runs fast-check", () => {
    fc.assert(fc.property(fc.integer(), fc.integer(), (a, b) => a + b === b + a));
  });
});
