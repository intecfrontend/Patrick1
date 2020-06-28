import React from "react";
import axios from "axios";
import Movie from "../Course";

export default class CourseList extends React.Component {
    state = {
        movies: [],
    }

    constructor(props) {
        super(props);

        this.activateLasers = this.activateLasers.bind(this);
    }

    componentDidMount() {
        console.log('Component mounted.. Loading data...')
        axios.get('http://localhost:8888/content')
            .then(res => {
                console.log(res);
                this.setState({movies: res.data})
            })
    }

    activateLasers() {
        let newMovie = {
            'titel': document.getElementById('Title').value,
            'ondertitel': document.getElementById('Subtitle').value,
            'img': document.getElementById('Image').value,
            'voorkennis': document.getElementById('Knowledge').value
        }

        axios
            .post('http://localhost:8888/content', newMovie)
            .then(res => {
                if (res.status === 200) {
                    let current = this.state;
                    current.movies.push(newMovie);
                    this.setState(current);
                }
            })

    }

    render() {
        return (
            <div className="cardcont">
                <div>
                    <label>
                        Title:
                        <input type="text" id="Title" />
                    </label>
                    <label>
                        Subtitle:
                        <input type="text" id="Subtitle" />
                    </label>
                    <label>
                        Image:
                        <input type="text" id="Image" />
                    </label>
                    <label>
                        Knowledge needed:
                        <input type="text" id="Knowledge" />
                    </label>
                    <button onClick={this.activateLasers}>
                        Activate Lasers
                    </button>
                </div>

                <span className="cardwrap">
                    { this.state.movies.map(movie => (
                        <Movie
                            img={movie.img}
                            titel={movie.titel}
                            ondertitel={movie.ondertitel}
                            key={movie.id}
                        />
                    ))}
                </span>
            </div>
        )
    }
}