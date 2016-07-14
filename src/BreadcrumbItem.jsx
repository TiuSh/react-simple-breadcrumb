import React, { Component } from 'react';

export default class BreadcrumbItem extends Component {
  render() {
    return (
      this.props.onClick ? (
        <span onClick={e => this.props.onClick(this.props.pathSegments, e)}>
          {this.props.label}
        </span>
      ) : (
        <a href={this.props.getUrlFromPathSegments(this.props.pathSegments)}>
          {this.props.label}
        </a>
      )
    );
  }
}

BreadcrumbItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  pathSegments: React.PropTypes.array.isRequired,
  getUrlFromPathSegments: React.PropTypes.func,
  onClick: React.PropTypes.func,
};

