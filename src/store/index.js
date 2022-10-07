import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './user/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { recoveryPassReducer } from './recoveryPass/reducer';
import { ResetPassReducer } from './resetPass/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user', 'recoveryPass', 'resetPass']
};

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['isAuth']
};

const rootReducer = combineReducers({
    user: persistReducer(authPersistConfig, userReducer),
    recoveryPass: recoveryPassReducer,
    resetPass: ResetPassReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
