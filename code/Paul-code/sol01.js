let nums = [100, 200, 300, 400, 500];

for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        
        if(element == 400 | element == 500){
                nums.splice(index, 1);
                index--;
        }
}

console.log(nums);