/**
 * Created by Kell on 12.02.14.
 */
define(
    function () {
        /**
         * Main container of the game objects.
         * @constructor
         */
        function Stage() {
            this.gameObjects = {};
        }

        Stage.prototype.addChild = function (name, gameObject) {
            this.gameObjects[name] = gameObject;
        };

        return Stage;
    }
);