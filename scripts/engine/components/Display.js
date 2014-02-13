/**
 * Created by Kell on 10.02.14.
 */
define(
    function () {
        /**
         * @param {GraphicalEngine.DisplayObject} displayObject
         * @constructor
         */
        function Display(displayObject) {
            this.object = displayObject;
        }
        Display.constructor = Display;

        return Display;
    }
);