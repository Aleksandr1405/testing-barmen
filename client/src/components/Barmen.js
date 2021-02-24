import React, {Component} from 'react';
import '../css/Barmen.css';
import CocktailsStore from "../stores/cocktails-store";
import Cocktail from "./Cocktail";

function createpointsRepresentation(points) {

    return (<ul className='barmen-points'>
        <div className='barmen-points_name'>Мой результат</div>
        <div className="bar-container">
            <div className="bar-1"></div>
        </div>
        <div className='barmen-points_amount' id='barmen-amount'>{CocktailsStore.getScore(points)} / 30</div>

    </ul>)
}

class Barmen extends Component {
    constructor(props) {
        super(props);
        console.log(props.userLogin)
        this.state = {
            name: props.userInfo,
            login: props.userLogin,
            points: [],
            cocktails: CocktailsStore.getCocktails()
        };

        this._onClick = this._onClick.bind(this);
    }

    componentDidMount() {
        fetch(`/api/barmen?userLogin=${this.state.login}`,
            {method: 'GET'})
            .then(res => res.json())
            .then(res => this.setState({name: this.state.name, points: res}));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userInfo !== this.props.userInfo) {
            if (this.props.userInfo === '') {
                this.setState({
                    name: '',
                    points: []
                });
            }
            this.forceUpdate();
        }
    }

    _onClick (event, id) {
        fetch(`/api/barmen?userLogin=${this.state.login}&cocktail=${id}`,
            {
                method: 'POST'
            })
            .then(res => res.json())

        let {points} = this.state;
        points[id-1] = true;
        this.setState({points});
        event.preventDefault();
    }

    render() {
        const { cocktails } = this.state;
        if (this.state.login === '') {
            return <div className='App-text'>
                <div className='App-text_item' id='barmen-empty'>Вам нужно авторизироваться</div>
            </div>
        }

        return (<div className='barmen'>
                {createpointsRepresentation(this.state.points)}
                {
                    cocktails.map(cocktail => {
                        const info = {
                            id: cocktail.id,
                            name: cocktail.name,
                            compound: cocktail.compound,
                            description: cocktail.description,
                            complexity: cocktail.complexity
                        }
                        const done = this.state.points[cocktail.id - 1];
                        const classNameCss = done ? "CocktailInfoHighlight" : "CocktailInfo";

                        return (
                            <div className={classNameCss} key={cocktail.id}>
                                <Cocktail info={info} done={done} handleClick={this._onClick}/>
                            </div>

                        )
                    })
                }
            </div>
        );
    }
}

export default Barmen;