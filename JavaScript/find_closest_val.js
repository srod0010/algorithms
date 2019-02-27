function findClosestValueInBst(tree, target) {
  // Write your code here.
	let closest = tree.value;
	
	while(tree) {
		let diff = Math.abs(closest - target)
		let currentDiff = Math.abs(tree.value - target)
		
		if (currentDiff < diff) {
			closest = tree.value;
		}
		
		if (tree.value === target) {
			return tree.value
		} else if (target < tree.value) {
			tree = tree.left
		} else if (target > tree.value) {
			tree = tree.right
		}
	}
			return closest
		
	}

function findClosestValueInBst(tree, target) {
    // Write your code here.
    let closest = tree.value;

    while (tree) {
        let diff = Math.abs(closest - target)
        let currentDiff = Math.abs(tree.value - target)

        if (currentDiff < diff) {
            closest = tree.value;
        }

        if (tree.value === target) {
            return tree.value
        } else if (target < tree.value) {
            tree = tree.left
        } else if (target > tree.value) {
            tree = tree.right
        }
    }
    return closest

}