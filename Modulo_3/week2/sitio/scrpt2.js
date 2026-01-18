const product = {
    id : "",
    nombre : "",
    precio : ""
};

const nums = new Set([1, 6, 4, 2, 5, 3, 5, 2, 4]);

console.log(nums);
nums.add(7);
nums.add(4);
console.log(nums.has(2));
console.log(nums);
nums.delete(1);
for (const num of nums) {
    console.log(num);
}

