import { index, route } from '@react-router/dev/routes';


export default [
  index('./App.jsx'),
  route('/degree-verification', './components/FilterOption.jsx')
]