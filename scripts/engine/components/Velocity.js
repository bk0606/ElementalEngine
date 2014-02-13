/**
 * Created by Kell on 10.02.14.
 */
define(
    function () {
        /**
         * @param {Point} velocity
         * @constructor
         */
        function Velocity(x, y) {
            this.x = x;
            this.y = y;
        }
        Velocity.position = Velocity;

        return Velocity;
    }
);