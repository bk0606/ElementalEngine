/**
 * Created by Kell on 08.02.14.
 */
define(
    [
        './GraphicalNode',
        './GraphicalEngine',
        '../../managers/StateManager'
    ],
    function (GraphicalNode, GraphicalEngine, StateMgr) {
        var nullNode = new GraphicalNode({
                Position: {},
                Display: { object: {} }
            });

        /**
         * System perform render of object. Use Graphical Node to it.
         * @implements {ISystem}
         * @constructor
         */
        function GraphicalSystem() {
            /** @type {Array.<GraphicalNode>} */
            this.nodes = [];
            this.nodesEnum = {};
            this.createStage();
        }
        GraphicalSystem.constructor = GraphicalSystem;
        GraphicalSystem.Node = GraphicalNode;

        /**
         * Main rendering loop.
         */
        GraphicalSystem.prototype.update = function () {
            var i, node;
            for (i = this.nodes.length-1; i >= 0; i--) {
                node = this.nodes[i];
                node.display.object.position.x = node.position.x;
                node.display.object.position.y = node.position.y;
            }
            this.renderer.render(this.stage);
        };

        /** @inheritDoc */
        GraphicalSystem.prototype.createNode = function (name, components) {
            var index = this.nodes.length;
            this.nodesEnum[name] = index;
            this.nodes[index] = new GraphicalNode(components);
            this.stage.addChild(this.nodes[index].display.object);
        };

        /** @inheritDoc */
        GraphicalSystem.prototype.getNode = function (name) {
            return this.nodes[this.nodesEnum[name]];
        };

        /** @inheritDoc */
        GraphicalSystem.prototype.removeNode = function (name) {
            this.nodes[this.nodesEnum[name]] = nullNode;
        };

        GraphicalSystem.prototype.createStage = function () {
            this.stage = new GraphicalEngine.Stage(StateMgr.stageBG);
            this.renderer = GraphicalEngine.autoDetectRenderer(
                StateMgr.width, StateMgr.height);
            StateMgr.container.appendChild(this.renderer.view);
        };

        return GraphicalSystem;
    }
);