import React from 'react';
import { mount } from 'enzyme';
import { expect  } from 'chai';
import simple from 'simple-mock';

import Breadcrumb from '../src/Breadcrumb.jsx';

describe('<Breadcrumb />', function() {
  beforeEach(function() {
    this.wrap = mount(
      <Breadcrumb path="/"/>
    );
  });

  afterEach(function() {
    this.wrap.unmount();
  });

  it('should explode a path in <li/>s', function() {
    this.wrap.setProps({
      path: '/some/random/path',
    });

    expect(this.wrap.find('li')).to.have.lengthOf(3);

    expect(this.wrap.find('li').at(0).text()).to.equal('some');
    expect(this.wrap.find('li').at(1).text()).to.equal('random');
    expect(this.wrap.find('li').at(2).text()).to.equal('path');
  });

  it('should explode a path in <a/>s by default', function() {
    this.wrap.setProps({
      path: '/some/random/path',
    });

    expect(this.wrap.find('a')).to.have.lengthOf(3);
    expect(this.wrap.find('a[href="/some"]')).to.have.lengthOf(1);
    expect(this.wrap.find('a[href="/some/random"]')).to.have.lengthOf(1);
    expect(this.wrap.find('a[href="/some/random/path"]')).to.have.lengthOf(1);
  });

  it('should handle a custom separator', function() {
    this.wrap.setProps({
      path: 'a/path|with|custom/separator',
      pathSeparator: '|',
    });

    expect(this.wrap.find('li')).to.have.lengthOf(3);

    expect(this.wrap.find('li').at(0).text()).to.equal('a/path');
    expect(this.wrap.find('li').at(1).text()).to.equal('with');
    expect(this.wrap.find('li').at(2).text()).to.equal('custom/separator');
  });

  it('should accept a path root', function() {
    this.wrap.setProps({
      path: '/my/path',
      pathRoot: 'aRoot',
    });

    expect(this.wrap.find('li')).to.have.lengthOf(3);
    expect(this.wrap.find('li').at(0).text()).to.equal('aRoot');
    expect(this.wrap.find('li').at(0).find('a[href=""]')).to.have.lengthOf(1);
  });

  it('should handle custom url generator', function() {
    const generatorSpy = simple.spy(pathSegments => `customParser/${pathSegments.join('/')}`);

    this.wrap.setProps({
      path: '/a/custom/path',
      getUrlFromPathSegments: generatorSpy,
    });

    expect(generatorSpy.callCount).to.equal(3);
    expect(generatorSpy.calls[1].args[0]).to.eql(['a', 'custom']);
    expect(this.wrap.find('a[href="customParser/a/custom"]')).to.have.lengthOf(1);
  });

  it('should call onClick prop when provided', function() {
    const clickSpy = simple.spy();

    this.wrap.setProps({
      path: 'any/path/or/else',
      onClick: clickSpy,
    });

    this.wrap.find('li span').at(0).simulate('click');

    expect(clickSpy.callCount).to.equal(1);
  });

  it('should trim and encode path string', function() {
    const generatorSpy = simple.spy(pathSegments => `/${pathSegments.join('/')}`);
    const clickSpy = simple.spy();
    const pathes = [
      '/a%20path%2F%20that',
      '/a%20path%2F%20that/needs%5C%20to%23be%3F',
      '/a%20path%2F%20that/needs%5C%20to%23be%3F/encoded',
    ];
    const pathSegments = [
      'a%20path%2F%20that',
      'needs%5C%20to%23be%3F',
      'encoded',
    ];

    this.wrap.setProps({
      path: ' |a path/ that|needs\\ to#be?|encoded|  ',
      pathSeparator: '|',
      getUrlFromPathSegments: generatorSpy,
    });

    expect(this.wrap.find('a')).to.have.lengthOf(3);

    pathes.forEach((path, id) => {
      expect(this.wrap.find(`a[href="${path}"]`)).to.have.lengthOf(1);
    });

    pathSegments.forEach((segment, id) => {
      expect(generatorSpy.calls[id].args[0]).to.eql(pathSegments.slice(0, id + 1));
    });

    this.wrap.setProps({
      onClick: clickSpy,
    });

    this.wrap.find('li span').at(0).simulate('click');
    this.wrap.find('li span').at(1).simulate('click');
    this.wrap.find('li span').at(2).simulate('click');

    pathSegments.forEach((segment, id) => {
      expect(clickSpy.calls[id].args[0]).to.eql(pathSegments.slice(0, id + 1));
    });
  });
});
