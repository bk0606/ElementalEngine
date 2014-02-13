/**
 * Created by Kell on 08.02.14.
 */
define(
    ['../systems/SystemsEnum', '../systems/NullSystem'],
    function (SystemsEnum, NullSystem) {
        var instance,
            sytemsNamesOrder = [
                SystemsEnum.Physics,
                SystemsEnum.Graphics
            ];

        /**
         * Manager controlls the systems updating.
         * @constructor
         */
        function TaskManager() {
            this.usedSystems = this._getNullSystems();
            this.time = 1;
        }

        /**
         * Main cycle of the game. Call in the order method update
         * on each created system instance.
         */
        TaskManager.prototype.run = function () {
            window.requestAnimFrame(this._run.bind(this));
        };

        /**
         * Method for bind requestAnimFrame.
         * @private
         */
        TaskManager.prototype._run = function () {
            for (var i = sytemsNamesOrder.length-1; i >= 0; i--) {
                this.usedSystems[sytemsNamesOrder[i]].update(this.time++);
            }
            window.requestAnimFrame(this._run.bind(this));
        }

        /**
         * Method for register system in used systems list.
         * @param {SystemsEnum} name Number in enum
         * @param {ISystem} system Instance (!) of the system.
         */
        TaskManager.prototype.registerSystem = function (name, system) {
            this.usedSystems[sytemsNamesOrder[name]] = system;
        };

        /**
         * Singleton method
         * @returns {TaskManager} Instance
         */
        TaskManager.getInstance = function () {
            if (instance == null) {
                instance = new TaskManager();
            }
            return instance;
        };

        TaskManager.prototype._getNullSystems = function () {
            var i, usedSystems = {};
            for (i = sytemsNamesOrder.length-1; i >= 0; i--) {
                usedSystems[sytemsNamesOrder[i]] = NullSystem;
            }
            return usedSystems;
        };

        return TaskManager;
    }
);