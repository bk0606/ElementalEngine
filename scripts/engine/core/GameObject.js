/**
 * Created by Kell on 09.02.14.
 */
define(
    ['../managers/SystemsManager', './GameElement'],
    function (SystemsManager, GameElement) {
        var systemsMgr = SystemsManager.getInstance();

        /**
         * base object to extend its by systems.
         * @constructor
         * @param {Array.<SystemsEnum>} systemsNames
         */
        function GameObject(systemsNames) {
            this.systems = this._getSystemsInstances(systemsNames);
        }
        GameObject.constructor = GameObject;

        /**
         * Create concrete element of the game.
         * @param {string} name
         * @param {Array} components
         * @returns {GameElement}
         */
        GameObject.prototype.createObject = function (name, components) {
            return new GameElement(name, components, this.systems);
        };

        /**
         * Create new GameObject and exend systems from args.
         * @param {Array.<SystemsEnum>} systemsNames
         * @static
         */
        GameObject.extend = function (systemsNames) {
            return new GameObject(systemsNames);
        };

        GameObject.prototype._getSystemsInstances = function (names) {
            var systems = [], i;
            for (i = names.length-1; i >= 0; i--) {
                systems[i] = systemsMgr.getSystem(names[i]);
            }
            return systems;
        };

        return GameObject;
    }
);