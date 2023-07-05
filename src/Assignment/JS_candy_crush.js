/ n is the number (number of candies) as  provided in input
    function findCost(n) {
        // write code here
        // do not console.log the answer
        // return answer as a number
        let cost = 0;
        while(n > 0){
            let groups = Math.ceil(n/3);
            cost += groups * groups;
            n -= groups;
        }
        return cost;


    }