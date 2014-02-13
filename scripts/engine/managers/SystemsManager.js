/**
 * Created by Kell on 11.02.14.
 */
define(
    function (require) {
        var instance,
            Systems = [
                require('../systems/GraphicalSystem/GraphicalSystem'),
                require('../systems/PhysicalSystem/PhysicalSystem')
            ],
            taskMgr = (require('./TaskManager')).getInstance();

        /**
         * Singlethon class for systems managing.
         * @constructor
         */
        function SystemsManager() {
            this._systems = {};
        }
        SystemsManager.constructor = SystemsManager;

        /**
         * Load (if need) and return system instance.
         * @param {SystemsEnum} name Of system constructor
         * @returns {ISystem} instance
         */
        SystemsManager.prototype.getSystem = function (name) {
            if (this._systems[name] == null) {
                this.loadSystem(name);
            }
            return this._systems[name];
        };

        /**
         * Save System instance
         * @param {SystemsEnum} name Of system constructor
         */
        SystemsManager.prototype.loadSystem = function (name) {
            this._systems[name] = new Systems[name]();
            taskMgr.registerSystem(name, this._systems[name]);
        };

        /**
         * Singleton method.
         * @returns {SystemsManager} instance
         */
        SystemsManager.getInstance = function () {
            if (instance == null) {
                instance = new SystemsManager();
            }
            return instance;
        };

        return SystemsManager;
    }
);