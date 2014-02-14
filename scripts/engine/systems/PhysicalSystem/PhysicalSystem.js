/**
 * Created by Kell on 08.02.14.
 */
define(
    ['./PhysicalNode'],
    function (PhysicalNode) {
        var nullNode = new PhysicalNode({
                Position: {}, Velocity: {}
            });

        /**
         * Class provies physical logic for game objects.
         * @implements {ISystem}
         * @constructor
         */
        function PhysicalSystem() {
            this.nodes = [];
            this.nodesEnum = {};
        }
        PhysicalSystem.constructor = PhysicalSystem;
        PhysicalSystem.Node = PhysicalNode;

        /**
         * (!!!) So far use just velocity to move objects
         * in future performs more operations (!!!)
         *
         * Main loop for compute physical properties.
         * @param {number} time
         */
        PhysicalSystem.prototype.update = function (time) {
            var i, node;
            for (i = this.nodes.length-1; i >= 0; i--) {
                node = this.nodes[i];
                node.position.x += node.velocity.x;
                node.position.y += node.velocity.y;
            }
        };

        /** @inheritDoc */
        PhysicalSystem.prototype.createNode = function (name, objComponents) {
            this.nodesEnum[name] = this.nodes.length;
            this.nodes[this.nodes.length] = new PhysicalNode(objComponents);
        };

        /** @inheritDoc */
        PhysicalSystem.prototype.getNode = function (name) {
            return this.nodes[this.nodesEnum[name]];
        };

        /** @inheritDoc */
        PhysicalSystem.prototype.removeNode = function (name) {
            this.nodes[this.nodesEnum[name]] = nullNode;
        };

        return PhysicalSystem;
    }
);