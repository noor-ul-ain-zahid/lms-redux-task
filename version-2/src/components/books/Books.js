import React from "react"
import { connect } from "react-redux"
import { addData, editDetails, deleteData } from '../../actions/Actions'
import { bindActionCreators } from 'redux'
import BookList from './BookList'
import BookModal from './BookModal'
class Books extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showBookModal: false,
            action: '',
            error: '',
            lastId: 0
        }
    }
    toggleState = (action) => {
        this.setState({ showBookModal: !this.state.showBookModal, action: action });
    }

    showEditBookModal = (book) => {
        this.setState({ selectedBook: book })
        this.toggleState('edit')
    }

    addBook = (data) => {
        const book = { "id":  this.state.lastId  + 1, ...data },
            { books, addData } = this.props

        if (this.notExisting(books, book.name, book.id)) {
            addData('books', books, book)
            this.toggleState('')
            this.setState({ lastId: book.id, error: '' })
        }
        else { this.setState({ error: 'error' }) }
    }

    editBookDetails = (book) => {
        const updatedData = { "id": this.state.selectedBook.id, ...book },
            { books, editDetails } = this.props

        if (this.notExisting(books, updatedData.name, updatedData.id)) {
            editDetails('books', books, this.state.selectedBook, updatedData)
            this.toggleState('')
            this.setState({ error: '' })
        }
        else { this.setState({ error: 'error' }) }
    }

    notExisting = (books, bookName, bookId) => {
        return (
            books.filter((book) => (
                book.name === bookName && book.id !== bookId)).length == 0)
    }

    deleteBook = (book) => {
        this.setState({ selectedBook: book })
        this.props.deleteData('books', this.props.books, book)
    }

    render() {
        const { books, authors, publishers } = this.props,
            { showBookModal, action, selectedBook, error } = this.state
        return (
            <div>
                <h2>Books</h2>
                <BookList
                    data={books}
                    editData={this.showEditBookModal}
                    deleteData={this.deleteBook}
                />
                {
                    authors.length > 0 && publishers.length > 0 ?
                        <button onClick={() => this.toggleState('add')} >Add book</button>
                        : <p>No Authors or publishers exist</p>
                }
                <BookModal
                    open={showBookModal}
                    action={action}
                    handleClose={() => this.toggleState('')}
                    actionType={action == 'add' ? this.addBook : this.editBookDetails}
                    authors={authors}
                    error={error}
                    data={selectedBook}
                    publishers={publishers}
                />

            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        books: state.bookReducer.books,
        authors: state.authorReducer.authors,
        publishers: state.publisherReducer.publishers,
        error: state.bookReducer.error
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addData,
        editDetails,
        deleteData,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);