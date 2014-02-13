/**
 * Created by Kell on 12.02.14.
 */
define(
    function () {
        /**
         * Manager, contains (mainly static) global values of game.
         * @constructor
         */
        function StateManager() {}

        StateManager.stageBG = 0x000000;
        StateManager.container = document.getElementById('game-container');
        StateManager.width = 800;
        StateManager.height = 500;

        return StateManager;
    }
);