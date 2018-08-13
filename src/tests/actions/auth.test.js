import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
  const uid = 'fuhf4uy73ru9u';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});