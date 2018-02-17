import {EventEmitter} from 'fbemitter';

let states = {
  name: 'React Skeleton',
  description: 'This skeleton is designed to give front-end developers to easily and quickly set up React project in ECMASCRIPT6, being powered by Babel and Webpack.',
  release: {
    version: '0.1.0', 
    date: '2018/2/17',
  },
  authors: [
    {
      name: 'Hoseong Lee',
      username: 'ohpyupi',
      email: 'ohpyupi@gmail.com',
      gitUrl: 'https://github.com/ohpyupi',
    }, 
  ],
  dependencies: [
    'react',
    'react-dom',
    '@uirouter/react',
    'bulma',
    'flux',
  ],
};

let storeGenerator = (dispatcher) => {
  let _d = dispatcher;

  let store = new EventEmitter();

  let dispatchToken = _d.register(dispatchCallback(store));

  store.getStates = () => {
    return states; 
  };

  store.getDispatchToken = () => {
    return dispatchToken; 
  };

  store.addAuthor = (author, done=()=>{}) => {
    if (typeof author !== 'object') {
      return done('author should be an object!');
    }
    _d.dispatch({
      type: 'add-author', 
      author,
    }); 
  };

  return store;
};

let dispatchCallback = (store) => {
  return (action) => {
    if (action.type === 'add-author') {
      let author = action.author;
      states.authors.push(author);
      store.emit('change');
    }
  };
};

export default storeGenerator;
