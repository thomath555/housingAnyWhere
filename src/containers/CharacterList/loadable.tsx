import Loadable from 'react-loadable';
import AppLoader from '../../components/Loader';

export default Loadable({
  loader: () => import('./index'),
  loading: AppLoader,
});
