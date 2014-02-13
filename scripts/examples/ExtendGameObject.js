/**
 * Created by Kell on 11.02.14.
 */
define(
    [
        '../engine/core/GameObject',
        '../engine/systems/SystemsEnum',
        '../engine/components/Position',
        '../engine/components/Display',
        '../engine/components/Collisions',
        '../engine/components/Velocity'
    ],
    function (
        GameObject,
        Systems,
        PositionComponent,
        DisplayComponent,
        CollisionComponent,
        MovingComponent
        ) {
        /**
         * @constructor
         */
        function ExtendGameObject() {

            var Plane = GameObject.extend([
                Systems.GRAPHICAL,
                Systems.PHYSICAL
            ]);

            var EnemyPlane = Plane.extend([
                Systems.AI
            ]);

            var planeDisplay = new DisplayComponent(new Sprite('plane.json'));
            var planeCollision = new Collisions(new CollisionBox(10, 10));

            var planes = [
                Plane.createObject('plane1', [
                    new Position(20, 150, 0),
                    planeDisplay, planeCollision
                ]),
                Plane.createObject('plane2', [
                    new Position(70, 150, 0),
                    planeDisplay, planeCollision
                ])
            ];

            var enPlane1 = EnemyPlane.createObject('enPlane1', [
                new Position(120, 150, 0),
                planeDisplay, planeCollision,
                new StateMachineComponent(new EnemyPlaneStates())
            ]);
        }


        function StateMachineComponent(states) {}
        function EnemyPlaneStates() {}

        function Sprite(textureUrl) {}
        function CollisionBox(a, b) {}

        return SimpleSprite;

        return ExtendGameObject;
    }
);