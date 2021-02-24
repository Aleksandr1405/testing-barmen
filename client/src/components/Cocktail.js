import React, {Component} from "react";

import '../css/Cocktail.css';

class Cocktail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: props.info,
            done: props.done
        }
    }

    _onClick = event => {
        event.preventDefault();
        this.props.handleClick(event, this.props.info.id);
    }


    render () {
        const {info, done} = this.props;
        const classNameCss = done ? "CocktailInfoHighlight" : "CocktailInfo";

        return (
            <div>
                <form className={classNameCss} id={`${info.id}`}>
                    {!done && <button className='done' onClick={this._onClick}>выполнено</button>}
                    <div className="cocktail-name">
                        {info.name}
                        <div className="cocktail-complexity">
                            {info.complexity}
                        </div>
                    </div>
                    <div className="cocktail-compound">
                        {info.compound.map((item) => {
                            return (
                                <div>{item}</div>
                            )})
                        }
                    </div>
                    <div className="cocktail-description">{info.description}</div>
                </form>
        </div>

        )
    }
}

export default Cocktail;