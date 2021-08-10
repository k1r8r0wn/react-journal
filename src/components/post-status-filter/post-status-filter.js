import React from 'react';

export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'liked', label: 'Liked'}
    ];
  }
  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const active = this.props.filter === name;
      const clazz = active ? 'btn-success' : 'btn-outline-secondary';

      return (
        <button
          key={name}
          className={`btn ${clazz}`}
          type="button"
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}