import React, { Component } from 'react';
import classnames from 'classnames';

import BreadcrumbItem from './BreadcrumbItem.jsx';

export default class Breadcrumb extends Component {
  /**
   * Removes spaces and the given character from both sides of the string
   *
   * @param {String} path The path to be trimed
   * @param {String} char The character trime with spaces
   *
   * @returns {String} The trimed string
   */
  trimPath(path, char = '/') {
    const escapedString = char.replace(/[\[\](){}?*+\^$\\.|\-]/g, '\\$&');

    return path.replace(
      new RegExp(`^[ ${escapedString}]+|[ ${escapedString}]+$`, 'g'),
      ''
    );
  }

  /**
   * Create an array of segments from a path
   *
   * @param {String} path The path
   * @param {String} pathSeparator The separator used in the path
   *
   * @returns {Array} An array of segments
   */
  explodePath(path, pathSeparator) {
    const trimedPath = this.trimPath(path, pathSeparator);

    if (trimedPath === '') {
      return [];
    }

    return trimedPath.split(pathSeparator);
  }

  render() {
    const path = this.explodePath(this.props.path, this.props.pathSeparator);
    const { getUrlFromPathSegments, onClick } = this.props;

    return (
      <ul className={classnames('breadcrumb', this.props.className)}>
        {this.props.pathRoot ? (
          <li
            key="root"
            className="breadcrumb__item breadcrumb__item--root"
          >
            <BreadcrumbItem
              label={this.props.pathRoot}
              pathSegments={[]}
              {...{ getUrlFromPathSegments, onClick }}
            />
          </li>
          ) : null}

        {path.map((segment, id) => {
          const pathSegments = path.map(encodeURIComponent).slice(0, id + 1);

          return (
            <li
              key={id}
              className="breadcrumb__item"
            >
              <BreadcrumbItem
                label={segment}
                pathSegments={pathSegments}
                {...{ getUrlFromPathSegments, onClick }}
              />
            </li>
            );
        })}
      </ul>
    );
  }
}

Breadcrumb.propTypes = {
  path: React.PropTypes.string.isRequired,
  pathSeparator: React.PropTypes.string,
  pathRoot: React.PropTypes.string,
  getUrlFromPathSegments: React.PropTypes.func,
  onClick: React.PropTypes.func,
  className: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]),
};

Breadcrumb.defaultProps = {
  pathSeparator: '/',
  getUrlFromPathSegments: pathSegments => `/${pathSegments.join('/')}`,
};

