/**
 * Created by Kell on 10.02.14.
 */
define(
    function () {
        /**
         * @param {GraphicalEngine.DisplayObject} displayObject
         * Object which can add to rendered stage
         * @constructor
         */
        function Display(displayObject) {
            this.object = displayObject;
        }
        Display.constructor = Display;

        return Display;
    }
);