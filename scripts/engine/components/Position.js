/**
 * Created by Kell on 10.02.14.
 */
define(
    function () {
        /**
         * @constructor
         */
        function Position(x, y, rotation) {
            this.x = x;
            this.y = y;
            this.rotation = rotation;
        }
        Position.constructor = Position;

        return Position;
    }
);