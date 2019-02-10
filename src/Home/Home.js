import React, {Component} from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Prices from '../Prices/Prices';
import Hours from '../Hours/Hours';

class Home extends Component {
    state = {
        current_page: 'home',
    }

    changePage = (event, page) => {
        if(page !== this.state.current_page) {
            this.setState ({
                current_page: page
            });
        }
    }

    generatePage = () => {
        switch(this.state.current_page) {
            case 'home':
                return (
                    <Header />
                )
            case 'prices':
                return (
                    <Prices />
                )
            case 'hours':
                return (
                    <Hours />
                )
            default:
                return (
                    <div>
                        <Header />
                    </div>
                )
        }
    }


    render() {
        return (
            <div>
                <Navigation changePage={this.changePage}/>
                {this.generatePage()}
                <footer>© 2019 Perfect Nails All Rights Reserved</footer>
            </div>
        )
    }
}

export default Home;