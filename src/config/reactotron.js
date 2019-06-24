import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({ name: 'Sioné' })
  .use(reactotronRedux())
  .useReactNative()
  .connect();

reactotron.clear();

console.tron = reactotron;
export default reactotron;
