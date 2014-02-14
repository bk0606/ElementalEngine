/**
 * Created by Kell on 08.02.14.
 */
define(
    function (require) {
        var GameObject = require('../engine/core/GameObject'),
            SystemsEnum = require('../engine/systems/SystemsEnum'),
            TaskManager = require('../engine/managers/TaskManager'),
            GraphicalEngine = require('../engine/systems/GraphicalSystem/GraphicalEngine'),
            Position = require('../engine/components/Position'),
            Display = require('../engine/components/Display'),
            Velocity = require('../engine/components/Velocity');

        /**
         * Простой тест, показывает как можно расширять
         * базовый класс {GameObject}
         * и создавать на его основе конкретные элементы
         * @constructor
         */
        function SimpleSprite() {}

        SimpleSprite.prototype.createBall = function () {
            // Метод extend возвращает новый объект,
            // который умеет создавать конкретные элементы
            var PhysicalGraphicObj = GameObject.extend([
                SystemsEnum.Physics,
                SystemsEnum.Graphics
            ]);

            // Пикси теперь получила фасад, и используется как GraphicalEngine
            var texMetalBall = new GraphicalEngine.Texture.fromImage('./res/ball.png');

            // Создание экземпляра расширенного класса. Каждый элемент из
            // массива компонентов (2 арг-т) определятся системой, которой
            // мы расшири базовый объект, некоторые общие,
            // например Position нужен и для физики и для графики
            PhysicalGraphicObj.createObject('metalBall1', [
                new Position(150, 0, 0),
                new Display(new GraphicalEngine.Sprite(texMetalBall)),
                new Velocity(3, 1)
            ]);

            PhysicalGraphicObj.createObject('metalBall2', [
                new Position(150, 0, 0),
                new Display(new GraphicalEngine.Sprite(texMetalBall)),
                new Velocity(-1, -5)
            ]);

            TaskManager.getInstance().run();
        };

        return SimpleSprite;
    }
);