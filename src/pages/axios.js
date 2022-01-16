import axios from "axios";
import React from "react";

export default class Axios extends React.Component {
    state = {
        person: [],
        Lod: true,
    };

    constructor() {
        super();
        this.udata();

    }

    udata() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                //console.log(res.data);
                this.setState({ person: res.data });
                //console.log(this.state.person);
                this.setState({ Lod: false });
            });
    }

    render() {
        return (
            <ul>
                {this.state.Lod ? "Loading..." : (
                    this.state.person.map((pers) => (
                        <li style={{
                            listStyleType: "none",
                        }} key={pers.id}>{pers.title}</li>
                    )))
                }

            </ul>
        );
    }
}