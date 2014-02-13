/**
 * Created by Kell on 08.02.14.
 */

var ElementalEngine = ElementalEngine || {};

// Базовые конфиги requirejs
requirejs.config({
    baseUrl: './scripts',
    paths:{
        'PIXI': '../libs/pixijs/bin/pixi'
    },
    // Шим это специальная обёртка для библиотек, которые не написаны в стиле AMD,
    // а просто кучей классов.
    shim: {
        // Ключь - новое глобальное имя для либы
        'PIXI': {
            // А это старое имя
            exports: 'PIXI'
        }
    }
});

// Главная точка входа в приложение
// Использование require начинается с этой дерективы, потом только define
require(
    ['./examples/SimpleSprite'],
    function (SimpleSprite) {
        var sprite = new SimpleSprite();
        sprite.createBall();
    }
);