import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addData, deleteData, editDetails } from '../../actions/Actions';
import AuthorsList from './AuthorsList'
import AuthorModal from './AuthorModal'

class Authors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAuthorModal: false,
            action: '',
            error: '',
            lastId: 0
        }
    }
    toggleState = (action) => {
        this.setState({ showAuthorModal: !this.state.showAuthorModal, action: action });
    }

    showEditAuthorModal = (author) => {
        this.setState({ selectedAuthor: author })
        this.toggleState('edit')
    }

    addAuthor = (data) => {

        const author = { "id": this.state.lastId + 1, ...data },
            { authors, addData } = this.props

        if (this.notExisting(authors, author.name, author.id)) {
            addData('authors', authors, author)
            this.toggleState('')
            this.setState({ lastId: author.id, error: '' })
        }
        else { this.setState({ error: 'error' }) }
    }

    editAuthorDetails = (author) => {
        const updatedData = { "id": this.state.selectedAuthor.id, ...author },
            { authors, editDetails } = this.props

        if (this.notExisting(authors, updatedData.name, updatedData.id)) {
            editDetails('authors', authors, this.state.selectedAuthor, updatedData)
            this.toggleState('')
            this.setState({ error: '' })
        }
        else { this.setState({ error: 'error' }) }
    }

    notExisting = (authors, authorName, authorId) => {
        return (
            authors.filter((author) => (
                author.name === authorName && author.id !== authorId)).length == 0)
    }

    deleteAuthor = (author) => {
        this.setState({ selectedAuthor: author })
        this.props.deleteData('authors', this.props.authors, author)
    }

    render() {
        const { authors } = this.props,
            { showAuthorModal, action, selectedAuthor } = this.state
        return (
            <div>
                <h2>Authors</h2>
                <AuthorsList
                    authors={authors}
                    editData={this.showEditAuthorModal}
                    deleteData={this.deleteAuthor}
                />
                <button onClick={() => this.toggleState('add')}>Add Author</button>
                <AuthorModal
                    open={showAuthorModal}
                    action={action}
                    handleClose={this.toggleState}
                    actionType={action == 'add' ? this.addAuthor : this.editAuthorDetails}
                    author={selectedAuthor}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authors: state.authorReducer.authors
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addData,
        editDetails,
        deleteData,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Authors);