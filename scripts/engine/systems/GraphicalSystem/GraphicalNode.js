/**
 * Created by Kell on 10.02.14.
 */
define(
    function () {
        /**
         * @class GraphicalNode
         * Node is a list of component, used by system
         * @param {Object} components Use next list of components:
         * <b> {@link Position},
         * <b> {@link Display}
         */
        function GraphicalNode(components) {
            this.position = components.Position;
            this.display = components.Display;
        }
        GraphicalNode.constructor = GraphicalNode;

        return GraphicalNode;
    }
);

/**

 * @constructor*/