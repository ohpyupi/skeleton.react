import dispatcher from './dispatcher';

import projectStoreGenerator from './project-store';

let stores = {
  projectStore: projectStoreGenerator(dispatcher),
};

export default stores;
