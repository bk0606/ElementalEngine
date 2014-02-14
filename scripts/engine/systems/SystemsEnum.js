/**
 * Created by Kell on 13.02.14.
 */
define(
    function () {
        /**
         * Enum for systems types.
         * @readonly
         * @enum {number}
         */
        return {
            /**
             * Want to components of this node: {@link GraphicalNode}
             */
            Graphics: 0,
            /**
             * Want to components of this node: {@link PhysicalNode}
             */
            Physics: 1
        };
    }
);