/**
 * Created by Kell on 10.02.14.
 */
define(
    function () {
        /**
         * @param {Position.Point} components.Position
         * @param {Velocity.Point} components.Velocity
         * @constructor
         */
        function PhysicalNode(components) {
            this.position = components.Position;
            this.velocity = components.Velocity;
        }

        return PhysicalNode;
    }
);