# Fri Jul 28

## Trees
* made up of nodes
* root > branch > leaf

`debugger;` will for it to stop there

Stack: last in, first out

## depth first traversal

```js
function traverse(node, indent = '') {
    console.log(indent + node.data);
    indent += '  ';
    node.children.forEach(child => traverse(child, indent));
}
traverse(A);
```

## binary tree node
* at least two children: left & right

depth first: in-order
* left child
* then parent
* then right child

depth first: pre-order

breadth first
* have to keep track of levels

  [-]
[5] [2]

* infix notation: 5 - 2
* reverse polish notation: 5 2 -
* post fix notation ?

```js
function travserse(node) {
    if(!node) return '';
    let str = '';
    str += traverse(node.left);
    str += node.data;
    str += traverse(node.right);
    return str;
}

return node ?`${traverse(node.left)} ${traverse(node.data)} ${traverse(node.right)}` : '';

```