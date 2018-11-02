import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addData, deleteData, editDetails } from '../../actions/Actions';
import PublishersList from './PublishersList'
import PublisherModal from './PublisherModal'

class Publishers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showPublisherModal: false,
            action: '',
            error: '',
            lastId: 0
        }
    }
    toggleState = (action) => {
        this.setState({ showPublisherModal: !this.state.showPublisherModal, action: action });
    }

    showEditPublisherModal = (publisher) => {
        this.setState({ selectedPublisher: publisher })
        this.toggleState('edit')
    }

    addPublisher = (data) => {
        const publisher = { "id":  this.state.lastId + 1, ...data },
            { publishers, addData } = this.props

        if (this.notExisting(publishers, publisher.name, publisher.id)) {
            addData('publishers',publishers, publisher)
            this.toggleState('')
            this.setState({
                lastId: publisher.id,
                error: ''
            })
        }
        else { this.setState({ error: 'error' }) }
    }

    editPublisherDetails = (publisher) => {
        const updatedData = { "id": this.state.selectedPublisher.id, ...publisher },
            { publishers, editDetails } = this.props

        if (this.notExisting(publishers, updatedData.name, updatedData.id)) {
            editDetails('publishers',publishers, this.state.selectedPublisher, updatedData)
            this.toggleState('')
            this.setState({ error: '' })
        }
        else { this.setState({ error: 'error' }) }
    }

    notExisting = (publishers, publisherName, publisherId) => {
        return (
            publishers.filter((publisher) => (
                publisher.name === publisherName && publisher.id !== publisherId)).length == 0)
    }

    deletePublisher = (publisher) => {
        this.setState({ selectedPublisher: publisher })
        this.props.deleteData('publishers',this.props.publishers, publisher)
    }

    render() {
        const { publishers } = this.props,
            { showPublisherModal, action, selectedPublisher, error } = this.state
        return (
            <div>
                <h2>Publishers</h2>
                <PublishersList
                    publishers={publishers}
                    editData={this.showEditPublisherModal}
                    deleteData={this.deletePublisher}
                />
                <button onClick={() => this.toggleState('add')}>Add Publisher</button>
                <PublisherModal
                    open={showPublisherModal}
                    action={action}
                    handleClose={this.toggleState}
                    actionType={action == 'add' ? this.addPublisher : this.editPublisherDetails}
                    publisher={selectedPublisher}
                    error={error}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        publishers: state.publisherReducer.publishers
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addData,
        editDetails,
        deleteData,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Publishers);