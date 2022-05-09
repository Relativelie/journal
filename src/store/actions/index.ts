import * as sendRequestCreators from './sendRequestActions';
import * as tableCreators from './tableActions';
import * as filterCreators from './filterActions';
import * as paginationCreators from './paginationActions';
import * as searchCreators from './searchActions';

export default {
    ...sendRequestCreators,
    ...tableCreators,
    ...filterCreators,
    ...paginationCreators,
    ...searchCreators,
};
