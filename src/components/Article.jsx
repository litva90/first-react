import React, {Component} from 'react'

class Article extends Component {

    state = {
    }

    componentWillMount() {

    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) this.setSatate({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen
    // }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        console.log(this.props)
        const body = isOpen && <section>{article.text}</section>
        return (
            <div className="card">
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={onButtonClick}>
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                    <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                </div>
            </div>
        )
    }
}

export default Article