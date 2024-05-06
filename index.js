

function countFrequency (arr) {

    const memo = {}
    arr.forEach(element => {
        if(memo.hasOwnProperty(element)) {
            memo[element] += 1;
        }

        else {
            memo[element] = 1;
        }
    });

    return memo;


}

    console.log(countFrequency([1,2,3,1,8]))

module.exports = {
    countFrequency
}