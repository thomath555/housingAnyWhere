// Core
import { shallow } from 'enzyme';

// Components
import AppLoader from './index';
import { LoaderWrapper } from './styles'

it('should render the Loader', () => {
  const wrapper = shallow(<AppLoader/>)
  const child = wrapper.find(LoaderWrapper)
  expect(child.exists()).toBe(true);
});