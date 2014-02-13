/**
 * Created by Kell on 10.02.14.
 */
define(
    function () {
        /**
         * Node is a list of component, used by system
         * @param {Position.Point} components.Position
         * @param {Display.Point} components.Display
         * @constructor
         */
        function GraphicalNode(components) {
            this.position = components.Position;
            this.display = components.Display;
        }
        GraphicalNode.constructor = GraphicalNode;

        return GraphicalNode;
    }
);