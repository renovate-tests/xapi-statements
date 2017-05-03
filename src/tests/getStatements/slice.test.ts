import * as assert from 'assert';
import { isArray } from 'lodash';
import GetStatementsOptions from '../../service/options/GetStatementsOptions';
import setup from '../utils/setup';
import createStatement from '../utils/createStatement';
import storeStatementsInService from '../utils/storeStatementsInService';

const TEST_ID_1 = '1c86d8e9-f325-404f-b3d9-24c451035582';
const TEST_ID_2 = '1c86d8e9-f325-404f-b3d9-24c451035583';
const TEST_ID_3 = '1c86d8e9-f325-404f-b3d9-24c451035584';
const TEST_STATEMENT_1 = createStatement({ id: TEST_ID_1 });
const TEST_STATEMENT_2 = createStatement({ id: TEST_ID_2 });
const TEST_STATEMENT_3 = createStatement({ id: TEST_ID_3 });

describe('get statements by slicing', () => {
  const service = setup();
  const storeStatements = storeStatementsInService(service);

  const getStatements = (opts: GetStatementsOptions) => {
    return service.getExactStatements(opts);
  };

  const sliceStatements = async (opts: GetStatementsOptions) => {
    await storeStatements([TEST_STATEMENT_1, TEST_STATEMENT_2, TEST_STATEMENT_3]);
    const slicedStatements = await getStatements(opts);
    assert(isArray(slicedStatements));
    return slicedStatements;
  };

  it('should return statements when they are inside the limit', async () => {
    const statements = await sliceStatements({ limit: 1 });
    assert.equal(statements.length, 1);
    assert.equal(statements[0].id, TEST_ID_1);
  });

  it('should return statements when they are not skipped', async () => {
    const statements = await sliceStatements({ skip: 2 });
    assert.equal(statements.length, 1);
    assert.equal(statements[0].id, TEST_ID_3);
  });

  it('should return statements when they are not sliced', async () => {
    const statements = await sliceStatements({ skip: 1, limit: 1 });
    assert.equal(statements.length, 1);
    assert.equal(statements[0].id, TEST_ID_2);
  });
});
