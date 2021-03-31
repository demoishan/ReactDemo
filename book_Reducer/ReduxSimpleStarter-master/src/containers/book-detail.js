import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book... </div>
        }
        return (
            <div>
                <h4>Selected Book : </h4>
                <div>
                    Name: {this.props.book.title}
                </div>
                <div>
                    Pages: {this.props.book.pages}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);