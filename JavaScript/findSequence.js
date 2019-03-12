function findSequence(target) {
    function find(current, history) {
        if (current === target) {
            return history;
        } else if (current > target) {
            return null;
        } else if (current < target) {
            return find(current + 5, `${history} + 5`) || find(current*3, `${history} * 3`)
        }
    }

    return find(1,'1')
}

console.log(findSequence(13));