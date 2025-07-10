var expect = function (val) {
  return {
    toBe: function (otherVal) {
      if (val === otherVal) {
        return true;
      }
      throw new Error("Not Equal");
    },

    notToBe: function (otherVal) {
      if (val !== otherVal) {
        return true;
      }
      throw new Error("equal");
    },
  };
};

expect(5).toBe(5); // true
expect(5).notToBe(6); // throws "Equal"
