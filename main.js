const tilesJSON = [
  `{
    "type": "restaurant_collection",
    "title": "百大餐廳",
    "subtitle": "一百間大餐廳",
    "description": "一百間普通但卻大的餐廳",
    "start_date": "2016-01-01 00:00:00",
    "end_date": "2017-01-01 00:00:00",
    "image": "",
    "payload": {
      "restaurants": [
        619,
        753,
        2135,
        1323,
        1,
        2,
        3,
        4,
        5
      ],
      "description": [
        {
          "type": "youtube",
          "video_id": "123123123"
        },
        {
          "type": "text",
          "text": "hi"
        }
      ]
    }
  }`,
  `{
    "type": "external_url",
    "title": "空白廣告",
    "subtitle": "空白的廣告",
    "description": "Goolge好棒棒",
    "start_date": "2016-01-01 00:00:00",
    "end_date": "2017-01-01 00:00:00",
    "image": "",
    "payload": {
      "url": "http://www.google.com"
    }
  }`,
  `{
    "type": "deeplink",
    "title": "深連結",
    "subtitle": "亂連",
    "description": "亂亂連",
    "start_date": "2016-01-01 00:00:00",
    "end_date": "2017-01-01 00:00:00",
    "image": "",
    "payload": {
      "deeplink": "eztable://hi"
    }
  }`,
  `{
    "type": "tile_list",
    "title": "一堆tile",
    "subtitle": "搞不好還會重複",
    "description": "QQ喔",
    "start_date": "2016-01-01 00:00:00",
    "end_date": "2017-01-01 00:00:00",
    "image": "",
    "payload": {
      "tiles": [
        1,
        2,
        0,
        0,
        0,
        1
      ]
    }
  }`
 ]

const tiles = tilesJSON.map(JSON.parse)

const NotSupport = () => {
    return <div style={{color: 'gray'}}>不支援</div>
}

class Tile extends React.Component {
    constructor(props, ...others) {
        super(props, ...others)

        this.supportTypes = ['restaurant_collection','deeplink','external_url','tile_list']
    }

    render() {
        const tile = this.props.tile
        if (this.supportTypes.indexOf(tile.type) < 0) {
            return <NotSupport/>
        }

        const styles = {
            root: {
                width: 70,
                height: 100,
                border: '1px solid black'
            }
        }

        return (
            <div style={styles.root} onClick={transistionToTile.bind(tile)}>
                <p>{tile.title}</p>
                <p>{tile.subtitle}</p>
            </div>
        )
    }
}


class LayoutA extends React.Component {
    constructor(props, ...others) {
        super(props, ...others)

        this.supportTypes = ['tile_list']
    }

    render() {
        const tile = this.props.tile
        if (this.supportTypes.indexOf(tile.type) < 0) {
            return <NotSupport/>
        }

        const styles = {
            root: {
                height: 180,
                backgroundColor: 'lightgray',
                border: '1px solid black'
            },
            row: {
                display: 'flex'
            }
        }

        return (
            <div style={styles.root}>
                <p>{tile.title}</p>
                <div style={styles.row}>
                    {tile.payload.tiles.map((tileId, key) => {
                        return <Tile key={key} tile={tiles[tileId]}/>
                    })}
                </div>
            </div>
        )
    }
}

class LayoutB extends React.Component {
    constructor(props, ...others) {
        super(props, ...others)

        this.supportTypes = ['restaurant_collection','deeplink','external_url','tile_list']
    }

    render() {
        const tile = this.props.tile
        if (this.supportTypes.indexOf(tile.type) < 0) {
            return <NotSupport/>
        }

        const styles = {
            root: {
                width: 200,
                height: 30,
                border: '1px solid black'
            }
        }

        return (
            <div style={styles.root} onClick={transistionToTile.bind(tile)}>
                {'>   ' + tile.title}
            </div>
        )
    }
}

class LayoutC extends React.Component {
    constructor(props, ...others) {
        super(props, ...others)

        this.supportTypes = ['tile_list']
    }

    render() {
        const tile = this.props.tile
        if (this.supportTypes.indexOf(tile.type) < 0) {
            return <NotSupport/>
        }

        const styles = {
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
        }

        return (
            <div style={styles.root}>
                <p>{tile.title}</p>
                <div style={styles.tiles}>
                    {tile.payload.tiles.map((tileId, key) => {
                        return <Tile key={key} tile={tiles[tileId]}/>
                    })}
                </div>
            </div>
        )
    }
}

class RestaurantCollectionPage extends React.Component {
    constructor(props, ...others) {
        super(props, ...others)

        this.supportTypes = ['restaurant_collection']
    }

    render() {
        const tile = this.props.tile
        if (this.supportTypes.indexOf(tile.type) < 0) {
            return <NotSupport/>
        }

        const styles = {
            root: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 500,
                height: 300,
                border: '1px solid black'
            },
            img: {

            }
        }

        return (
            <div style={styles.root}>
                <div style={styles.img}/>
                <p>{tile.title}</p>
                <p>{tile.description}</p>
                <div>
                {tile.payload.restaurants.map(restaurantId => {
                    return <div key={restaurantId}>餐廳編號{restaurantId}...</div>
                })}
                </div>
            </div>
        )
    }   
}

class TileGroup extends React.Component {
    constructor(props, ...others) {
        super(props, ...others)

        this.supportTypes = ['tile_list']
    }

    render() {
        const tile = this.props.tile
        if (this.supportTypes.indexOf(tile.type) < 0) {
            return <NotSupport/>
        }

        const styles = {
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
        }

        return (
            <div style={styles.root}>
                <p>{tile.title}</p>
                <div style={styles.tiles}>
                    {tile.payload.tiles.map((tileId, key) => {
                        return <Tile key={key} tile={tiles[tileId]}/>
                    })}
                </div>
            </div>
        )
    }   
}

function transistionToTile () {
    switch (this.type) {
        case 'restaurant_collection':
            alert('打開RestaurantCollectionPage')
            break
        case 'deeplink':
            alert('打開deeplink')
            break
        case 'external_url':
            alert('打開連結')
            break
        case 'tile_list':
            alert('打開TileGroup')
            break
        default:
            alert('怪怪的')
            break
    }
}


const components = [
    Tile,
    LayoutA,
    LayoutB,
    LayoutC,
    RestaurantCollectionPage,
    TileGroup,
]

const componentKeyMapping = [
    'Tile',
    'LayoutA',
    'LayoutB',
    'LayoutC',
    'RestaurantCollectionPage',
    'TileGroup',
]

const Main = (props) => {
    const result = props.tiles.map((tile, key) => {
        return <div key={key}>
            <h1>Type: {tile.type}</h1>
            <pre>{tilesJSON[key]}</pre>
            <div style={{marginLeft: 20}}>{components.map((Component, componentKey) => {
                return <div key={componentKey}>
                    <h3>{componentKeyMapping[componentKey]}</h3>
                    <div style={{marginLeft: 20}}>
                    <Component tile={tile} key={componentKey}/> 
                    </div>
                </div>
            })}</div>
        </div>
    })

    return <div>{result}</div>
}

ReactDOM.render(<Main tiles={tiles} />, document.getElementById('app'));