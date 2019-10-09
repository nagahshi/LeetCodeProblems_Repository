/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
      if (nums.length * nums[0].length !== r * c) {
    // Both matrices don't hold the same number of elements.
    return nums;
  }

  const traversal = traverse(nums);
  return Array.from({ length: r }, () =>
    Array.from({ length: c }, () => traversal.next().value)
  );
};

function* traverse(matrix) {
  for (const row of matrix) {
    for (const cell of row) {
      yield cell;
    }
  }
}