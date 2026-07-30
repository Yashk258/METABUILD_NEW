import BSPNode from "./BSPNode.js";

export function splitNode(node) {
  if (node.width > node.length) {

    const split = node.width / 2;

    node.left = new BSPNode(
      node.x,
      node.z,
      split,
      node.length
    );

    node.right = new BSPNode(
      node.x + split,
      node.z,
      split,
      node.length
    );

  } else {

    const split = node.length / 2;

    node.left = new BSPNode(
      node.x,
      node.z,
      node.width,
      split
    );

    node.right = new BSPNode(
      node.x,
      node.z + split,
      node.width,
      split
    );

  }

  return node;
}