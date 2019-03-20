function maxDuffelBagValue(cakeTypes, weightCapacity, memo={}) {
    let key = cakeTypes + '-' + weightCapacity;
    if (key in memo) return memo[key];
    // Calculate the maximum value we can carry
    if (weightCapacity === 0) return 0;
    if (cakeTypes.length == 0) return false;
    let currentCake = cakeTypes[cakeTypes.length - 1];
    let currentWeight = currentCake.weight;
    let currentVal = currentCake.value;
    let max = 0;

    for (let i = 0; i * currentWeight <= weightCapacity; i++) {
        let minusWeight = i * currentWeight;
        let frameWeight = i * currentVal;
        let sol = frameWeight + maxDuffelBagValue(cakeTypes.slice(0, -1), weightCapacity - minusWeight, memo);

        if (sol > max) {
            max = sol;
        }
    }
    memo[key] =  max;
    return memo[key];
}

  const cakeTypes = [{
          weight: 7,
          value: 160
      },
      {
          weight: 3,
          value: 90
      },
      {
          weight: 2,
          value: 15
      },
  ];

  const capacity = 30;
  console.log(maxDuffelBagValue(cakeTypes, capacity));