function validateBst(tree, min = -Infinity, max = Infinity) {
    if (tree.value < min || tree.value >= max) return false;

    if (tree.left) {
        let res = validateBst(tree.left, min, tree.value);
        if (!res) return false;
    }


    if (tree.right) {
        let res = validateBst(tree.right, tree.value, max);
        if (!res) return false;
    }

    return true;
}