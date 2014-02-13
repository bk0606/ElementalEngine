/**
 * Created by Kell on 12.02.14.
 */
define(
    function () {
        /**
         * Concrete element of the game.
         * @param {string} name Of game object
         * @param {Object.<Object>} components Needed for systems
         * @param {ISystem} systems Instances
         * @constructor
         */
        function GameElement(name, components, systems) {
            this.name = name;
            this.components = arrayToObject(components);
            this.systems = systems;
            this._createNodes();
        }
        GameElement.constructor = GameElement;

        /**
         * Create systems nodes, by components object.
         * @private
         */
        GameElement.prototype._createNodes = function () {
            var i;
            for (i = this.systems.length-1; i >= 0; i--) {
                this.systems[i].createNode(this.name, this.components);
            }
        };

        function arrayToObject(array) {
            var i, obj = {};
            for (i = array.length-1; i >= 0; i--) {
                obj[array[i].constructor.name] = array[i];
            }
            return obj;
        }

        return GameElement;
    }
);