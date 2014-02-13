/**
 * Created by Kell on 10.02.14.
 */
define(
    function () {
        /**
         * Interfase ISystem subscribes main unit of game - System.
         * System performs main computation over nodes of components.
         * @interface
         */
        function ISystem() {}

        /**
         * Main computation loop. Perform neccessary operations over nodes.
         * @param {number} time
         */
        ISystem.prototype.update = function (time) {};

        /**
         * Creates system node and add it to node list.
         * Node - is class (struct) consist of components.
         * @param {SystemsEnum} name
         * @param {Object} components
         */
        ISystem.prototype.createNode = function (name, components) {};

        /**
         * @param {SystemsEnum} name
         * @returns {Object}
         */
        ISystem.prototype.getNode = function (name) {};

        /**
         * Nulls the node, using equating to null node.
         * @param {SystemsEnum} name
         */
        ISystem.prototype.removeNode = function (name) {};

        return ISystem;
    }
);