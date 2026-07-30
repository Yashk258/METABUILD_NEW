import BSPNode from "./BSPNode.js";
import { splitNode } from "./splitter.js";

export function createTree(plot) {

    const root = new BSPNode(
        0,
        0,
        plot.width,
        plot.length
    );

    splitNode(root);

    return root;

}