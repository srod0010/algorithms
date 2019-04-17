var invertTree = function (root) {
    if (!root) return null;

    let left = invertTree(root.right);
    let right = invertTree(root.left);
    root.left = left;
    root.right = right;

    return root;
};

var invertedTree = function (root) {
    if (!root) return null;
    let stack = [root];
    while (stack.length !== 0) {
        let current = stack.shift();
        let left = current.left,
            right = current.right;

        if (left) stack.push(left);
        if (right) stack.push(right);

        current.right = left;
        current.left = right;
    }

    return root;
};