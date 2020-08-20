import React, { Component } from 'react';

class DataTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItems: [],
            editIndex: -1,
            dataEdit: ''
        }
    }

    handleChangeSelectItem = index => {
        const { selectedItems } = this.state;
        const indexSelectedItem = selectedItems.findIndex(selectedItem => selectedItem === index);
        if (indexSelectedItem > -1)
            selectedItems.splice(indexSelectedItem, 1);
        else
            selectedItems.push(index);
        this.setState({ selectedItems });
    }

    handleClickEditTodo = (value, index) => {
        this.setState({ dataEdit: value, editIndex: index });
    }

    handleChangeDataEdit = e => {
        this.setState({ dataEdit: e.target.value });
    }

    handleKeyPressDataEdit = (e, key) => {
        const { onChangeItem } = this.props;
        if (e.key === 'Enter') {
            onChangeItem(key, e.target.value);
            this.setState({ editIndex: -1 });
        }
    }

    handleClickCancelEditTodo = () => {
        this.setState({ editIndex: -1 });
    }

    render () {
        // Data
        const { items, field, fieldKey } = this.props;
        const { selectedItems, editIndex, dataEdit } = this.state;

        // Function
        const { onRemoveItem } = this.props;

        return items.length > 0 && (
            <table className="table mt-3">
                <tbody>
                    { items.map((item, index) => {
                        return (
                            <tr key={item[fieldKey]}>
                                <td className="align-middle" style={{ width: '5%' }}><input className="" type="checkbox" checked={item.selected} onChange={() => this.handleChangeSelectItem(index)} /></td>
                                <td className="align-middle text-left">
                                    { editIndex !== index
                                        ? ( selectedItems.includes(index)
                                                ? <p className="font-weight-bold mb-0 text-muted"><s>{item[field]}</s></p>
                                                : <p className="font-weight-bold mb-0">{item[field]}</p>
                                            )
                                        : <input className="form-control form-control-sm" type="text" placeholder="Input task name then tap Enter to edit" value={dataEdit} onChange={this.handleChangeDataEdit} onKeyPress={e => this.handleKeyPressDataEdit(e, item[fieldKey])} />
                                    }
                                </td>
                                <td className="align-middle" style={{ width: '10%' }}>
                                    { editIndex !== index
                                        ? <button className="btn btn-transparent btn-sm" onClick={() => this.handleClickEditTodo(item[field], index)}><span className="material-icons">create</span></button>
                                        : <button className="btn btn-transparent btn-sm" onClick={this.handleClickCancelEditTodo}><span className="material-icons">cancel</span></button>
                                    }
                                    <button className="btn btn-transparent btn-sm" onClick={onRemoveItem ? () => onRemoveItem(item[fieldKey]) : null}><span className="material-icons">delete</span></button>
                                </td>
                            </tr>
                        );
                    }) }
                </tbody>
            </table>
        )
    }
}

export default DataTable;
