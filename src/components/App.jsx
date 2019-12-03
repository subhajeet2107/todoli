import React from 'react';
import './App.css';
import TodoList from './TodoList'

export default class App extends React.Component {


    render() {
        return (
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-lg-12">
                            <TodoList/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
