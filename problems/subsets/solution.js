/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
 if (!nums.length) return [[]];

    const n = nums.pop();
    const sets = subsets(nums);
    const sol = [...sets];
    for (const s of sets) {
        const temp = Array.from(s);
        temp.push(n);
        sol.push(temp);
    }
    return sol;
};