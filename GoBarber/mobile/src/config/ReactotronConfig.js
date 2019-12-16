import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reacototronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(reacototronSaga())
    .connect();

  console.tron = tron;

  tron.clear();
}
