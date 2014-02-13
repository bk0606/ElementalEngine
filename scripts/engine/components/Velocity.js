/**
 * Created by Kell on 10.02.14.
 */
define(
    function () {
        /**
         * @param {number} x Velocity
         * @param {number} y Velocity
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