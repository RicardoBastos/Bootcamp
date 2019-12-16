import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
// import { toast } from 'react-toastify';
import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    debugger;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      // toast.error('Usuário não é um prestador');
      Alert.alert('Erro no Login', 'Usuário não pode ser prestador de serviço');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield delay(3000);

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch {
    Alert.alert('Falha na autenticação', 'Verifique seus dados');
    // toast.error('Falha na autenticação');

    yield put(signInFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    // history.push('/');
  } catch {
    // toast.error('Falha no cadastro');
    Alert.alert('Falha no cadastro', 'Verifique seus dados');

    yield put(signInFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
