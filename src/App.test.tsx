// Core
import { shallow } from 'enzyme';

// Components
import App from './App';
import Routes from './routes';

it('should render the Routes', () => {
  const wrapper = shallow(<App />)
  const router = wrapper.find(Routes)
  expect(router.exists()).toBe(true);
});