/**
 * Created by Kell on 10.02.14.
 */
define(
    function () {
        /**
         * Node is a list of component, used by system
         * @param {Object} components Use next list of components:
         * <b> {@link Position},
         * <b> {@link Velocity}
         * @class PhysicalNode
         */
        function PhysicalNode(components) {
            this.position = components.Position;
            this.velocity = components.Velocity;
        }

        return PhysicalNode;
    }
);