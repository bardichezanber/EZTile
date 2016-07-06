'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tilesJSON = ['{\n    "type": "restaurant_collection",\n    "title": "百大餐廳",\n    "subtitle": "一百間大餐廳",\n    "description": "一百間普通但卻大的餐廳",\n    "start_date": "2016-01-01 00:00:00",\n    "end_date": "2017-01-01 00:00:00",\n    "image": "",\n    "payload": {\n      "restaurants": [\n        619,\n        753,\n        2135,\n        1323,\n        1,\n        2,\n        3,\n        4,\n        5\n      ],\n      "description": [\n        {\n          "type": "youtube",\n          "video_id": "123123123"\n        },\n        {\n          "type": "text",\n          "text": "hi"\n        }\n      ]\n    }\n  }', '{\n    "type": "external_url",\n    "title": "空白廣告",\n    "subtitle": "空白的廣告",\n    "description": "Goolge好棒棒",\n    "start_date": "2016-01-01 00:00:00",\n    "end_date": "2017-01-01 00:00:00",\n    "image": "",\n    "payload": {\n      "url": "http://www.google.com"\n    }\n  }', '{\n    "type": "deeplink",\n    "title": "深連結",\n    "subtitle": "亂連",\n    "description": "亂亂連",\n    "start_date": "2016-01-01 00:00:00",\n    "end_date": "2017-01-01 00:00:00",\n    "image": "",\n    "payload": {\n      "deeplink": "eztable://hi"\n    }\n  }', '{\n    "type": "tile_list",\n    "title": "一堆tile",\n    "subtitle": "搞不好還會重複",\n    "description": "QQ喔",\n    "start_date": "2016-01-01 00:00:00",\n    "end_date": "2017-01-01 00:00:00",\n    "image": "",\n    "payload": {\n      "tiles": [\n        1,\n        2,\n        0,\n        0,\n        0,\n        1\n      ]\n    }\n  }'];

var tiles = tilesJSON.map(JSON.parse);

var NotSupport = function NotSupport() {
    return React.createElement(
        'div',
        { style: { color: 'gray' } },
        '不支援'
    );
};

var Tile = (function (_React$Component) {
    _inherits(Tile, _React$Component);

    function Tile(props) {
        var _get2;

        _classCallCheck(this, Tile);

        for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            others[_key - 1] = arguments[_key];
        }

        (_get2 = _get(Object.getPrototypeOf(Tile.prototype), 'constructor', this)).call.apply(_get2, [this, props].concat(others));

        this.supportTypes = ['restaurant_collection', 'deeplink', 'external_url', 'tile_list'];
    }

    _createClass(Tile, [{
        key: 'render',
        value: function render() {
            var tile = this.props.tile;
            if (this.supportTypes.indexOf(tile.type) < 0) {
                return React.createElement(NotSupport, null);
            }

            var styles = {
                root: {
                    width: 70,
                    height: 100,
                    border: '1px solid black'
                }
            };

            return React.createElement(
                'div',
                { style: styles.root, onClick: transistionToTile.bind(tile) },
                React.createElement(
                    'p',
                    null,
                    tile.title
                ),
                React.createElement(
                    'p',
                    null,
                    tile.subtitle
                )
            );
        }
    }]);

    return Tile;
})(React.Component);

var LayoutA = (function (_React$Component2) {
    _inherits(LayoutA, _React$Component2);

    function LayoutA(props) {
        var _get3;

        _classCallCheck(this, LayoutA);

        for (var _len2 = arguments.length, others = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            others[_key2 - 1] = arguments[_key2];
        }

        (_get3 = _get(Object.getPrototypeOf(LayoutA.prototype), 'constructor', this)).call.apply(_get3, [this, props].concat(others));

        this.supportTypes = ['tile_list'];
    }

    _createClass(LayoutA, [{
        key: 'render',
        value: function render() {
            var tile = this.props.tile;
            if (this.supportTypes.indexOf(tile.type) < 0) {
                return React.createElement(NotSupport, null);
            }

            var styles = {
                root: {
                    height: 180,
                    backgroundColor: 'lightgray',
                    border: '1px solid black'
                },
                row: {
                    display: 'flex'
                }
            };

            return React.createElement(
                'div',
                { style: styles.root },
                React.createElement(
                    'p',
                    null,
                    tile.title
                ),
                React.createElement(
                    'div',
                    { style: styles.row },
                    tile.payload.tiles.map(function (tileId, key) {
                        return React.createElement(Tile, { key: key, tile: tiles[tileId] });
                    })
                )
            );
        }
    }]);

    return LayoutA;
})(React.Component);

var LayoutB = (function (_React$Component3) {
    _inherits(LayoutB, _React$Component3);

    function LayoutB(props) {
        var _get4;

        _classCallCheck(this, LayoutB);

        for (var _len3 = arguments.length, others = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            others[_key3 - 1] = arguments[_key3];
        }

        (_get4 = _get(Object.getPrototypeOf(LayoutB.prototype), 'constructor', this)).call.apply(_get4, [this, props].concat(others));

        this.supportTypes = ['restaurant_collection', 'deeplink', 'external_url', 'tile_list'];
    }

    _createClass(LayoutB, [{
        key: 'render',
        value: function render() {
            var tile = this.props.tile;
            if (this.supportTypes.indexOf(tile.type) < 0) {
                return React.createElement(NotSupport, null);
            }

            var styles = {
                root: {
                    width: 200,
                    height: 30,
                    border: '1px solid black'
                }
            };

            return React.createElement(
                'div',
                { style: styles.root, onClick: transistionToTile.bind(tile) },
                '>   ' + tile.title
            );
        }
    }]);

    return LayoutB;
})(React.Component);

var LayoutC = (function (_React$Component4) {
    _inherits(LayoutC, _React$Component4);

    function LayoutC(props) {
        var _get5;

        _classCallCheck(this, LayoutC);

        for (var _len4 = arguments.length, others = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            others[_key4 - 1] = arguments[_key4];
        }

        (_get5 = _get(Object.getPrototypeOf(LayoutC.prototype), 'constructor', this)).call.apply(_get5, [this, props].concat(others));

        this.supportTypes = ['tile_list'];
    }

    _createClass(LayoutC, [{
        key: 'render',
        value: function render() {
            var tile = this.props.tile;
            if (this.supportTypes.indexOf(tile.type) < 0) {
                return React.createElement(NotSupport, null);
            }

            var styles = {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 300,
                    backgroundColor: 'lightgray',
                    border: '1px solid black'
                },
                tiles: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: 200
                }
            };

            return React.createElement(
                'div',
                { style: styles.root },
                React.createElement(
                    'p',
                    null,
                    tile.title
                ),
                React.createElement(
                    'div',
                    { style: styles.tiles },
                    tile.payload.tiles.map(function (tileId, key) {
                        return React.createElement(Tile, { key: key, tile: tiles[tileId] });
                    })
                )
            );
        }
    }]);

    return LayoutC;
})(React.Component);

var RestaurantCollectionPage = (function (_React$Component5) {
    _inherits(RestaurantCollectionPage, _React$Component5);

    function RestaurantCollectionPage(props) {
        var _get6;

        _classCallCheck(this, RestaurantCollectionPage);

        for (var _len5 = arguments.length, others = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            others[_key5 - 1] = arguments[_key5];
        }

        (_get6 = _get(Object.getPrototypeOf(RestaurantCollectionPage.prototype), 'constructor', this)).call.apply(_get6, [this, props].concat(others));

        this.supportTypes = ['restaurant_collection'];
    }

    _createClass(RestaurantCollectionPage, [{
        key: 'render',
        value: function render() {
            var tile = this.props.tile;
            if (this.supportTypes.indexOf(tile.type) < 0) {
                return React.createElement(NotSupport, null);
            }

            var styles = {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 500,
                    height: 300,
                    border: '1px solid black'
                },
                img: {}
            };

            return React.createElement(
                'div',
                { style: styles.root },
                React.createElement('div', { style: styles.img }),
                React.createElement(
                    'p',
                    null,
                    tile.title
                ),
                React.createElement(
                    'p',
                    null,
                    tile.description
                ),
                React.createElement(
                    'div',
                    null,
                    tile.payload.restaurants.map(function (restaurantId) {
                        return React.createElement(
                            'div',
                            { key: restaurantId },
                            '餐廳編號',
                            restaurantId,
                            '...'
                        );
                    })
                )
            );
        }
    }]);

    return RestaurantCollectionPage;
})(React.Component);

var TileGroup = (function (_React$Component6) {
    _inherits(TileGroup, _React$Component6);

    function TileGroup(props) {
        var _get7;

        _classCallCheck(this, TileGroup);

        for (var _len6 = arguments.length, others = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            others[_key6 - 1] = arguments[_key6];
        }

        (_get7 = _get(Object.getPrototypeOf(TileGroup.prototype), 'constructor', this)).call.apply(_get7, [this, props].concat(others));

        this.supportTypes = ['tile_list'];
    }

    _createClass(TileGroup, [{
        key: 'render',
        value: function render() {
            var tile = this.props.tile;
            if (this.supportTypes.indexOf(tile.type) < 0) {
                return React.createElement(NotSupport, null);
            }

            var styles = {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 300,
                    backgroundColor: 'lightgray',
                    border: '1px solid black'
                },
                tiles: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: 200
                }
            };

            return React.createElement(
                'div',
                { style: styles.root },
                React.createElement(
                    'p',
                    null,
                    tile.title
                ),
                React.createElement(
                    'div',
                    { style: styles.tiles },
                    tile.payload.tiles.map(function (tileId, key) {
                        return React.createElement(Tile, { key: key, tile: tiles[tileId] });
                    })
                )
            );
        }
    }]);

    return TileGroup;
})(React.Component);

function transistionToTile() {
    switch (this.type) {
        case 'restaurant_collection':
            alert('打開RestaurantCollectionPage');
            break;
        case 'deeplink':
            alert('打開deeplink');
            break;
        case 'external_url':
            alert('打開連結');
            break;
        case 'tile_list':
            alert('打開TileGroup');
            break;
        default:
            alert('怪怪的');
            break;
    }
}

var components = [Tile, LayoutA, LayoutB, LayoutC, RestaurantCollectionPage, TileGroup];

var componentKeyMapping = ['Tile', 'LayoutA', 'LayoutB', 'LayoutC', 'RestaurantCollectionPage', 'TileGroup'];

var Main = function Main(props) {
    var result = props.tiles.map(function (tile, key) {
        return React.createElement(
            'div',
            { key: key },
            React.createElement(
                'h1',
                null,
                'Type: ',
                tile.type
            ),
            React.createElement(
                'pre',
                null,
                tilesJSON[key]
            ),
            React.createElement(
                'div',
                { style: { marginLeft: 20 } },
                components.map(function (Component, componentKey) {
                    return React.createElement(
                        'div',
                        { key: componentKey },
                        React.createElement(
                            'h3',
                            null,
                            componentKeyMapping[componentKey]
                        ),
                        React.createElement(
                            'div',
                            { style: { marginLeft: 20 } },
                            React.createElement(Component, { tile: tile, key: componentKey })
                        )
                    );
                })
            )
        );
    });

    return React.createElement(
        'div',
        null,
        result
    );
};

ReactDOM.render(React.createElement(Main, { tiles: tiles }), document.getElementById('app'));
