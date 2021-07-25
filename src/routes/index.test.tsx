// Core
import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router';

// Components
import AppRouter from './index';
import CharacterList from '../containers/CharacterList'

it('Renders correct routes', () => {
    const wrapper = shallow(<AppRouter />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
    expect(pathMap['/']).toBe(CharacterList);
  });