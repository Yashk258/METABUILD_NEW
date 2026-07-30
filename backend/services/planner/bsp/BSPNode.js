export default class BSPNode {
  constructor(x, z, width, length) {
    this.x = x;
    this.z = z;

    this.width = width;
    this.length = length;

    this.left = null;
    this.right = null;

    this.room = null;
  }
}