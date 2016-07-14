import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import hjs from 'highlight.js';
import reactElementToJSXString from 'react-element-to-jsx-string';

import Breadcrumb from '../../lib/Breadcrumb.js';

const examples = [{
  title: 'Basic example',
  code: <Breadcrumb path="/a/random/path"/>,
}, {
  title: 'With a path root',
  code: <Breadcrumb path="/a/random/path" pathRoot="still" />,
}, {
  title: 'With a different path format',
  code: <Breadcrumb path="another:random:path" pathSeparator=":"/>,
}, {
  title: 'With a custom URL generator',
  code: <Breadcrumb
          path="example/src/example4.jsx"
          getUrlFromPathSegments={pathSegments => (
            `https://github.com/TiuSh/react-simple-breadcrumb/tree/master/${pathSegments.join('/')}`
          )}
        />,
}, {
  title: 'Changing separator with SASS',
  code: <Breadcrumb className="custom-separator" path="/my/random/path"/>,
  style: `.custom-separator {
  .breadcrumb__item + .breadcrumb__item:before {
    content: "\\00A0" "\\00BB" "\\00A0";
  }
}`,
}, {
  title: 'onClick event listener',
  code: <Breadcrumb
          path="a/path/with/events/"
          onClick={pathSegments => alert(pathSegments.join('/'))}
        />,
}];

class Example extends Component {
  componentDidMount() {
    hjs.initHighlighting();
  }

  render() {
    return (
      <div>
        <h2>
          React simple breadcrumb
        </h2>
        {examples.map((example, id) => (
          <div key={id}>
            <h4>{example.title}</h4>
            <pre>
              <code className="jsx">
                {reactElementToJSXString(example.code, { showDefaultProps: false })}
              </code>
            </pre>
            {example.style ?
              (
                <div>
                  <pre>
                    <code className="sass">
                      {example.style}
                    </code>
                  </pre>
                </div>
              ) : ''}
            {example.code}
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('example-root')
);

