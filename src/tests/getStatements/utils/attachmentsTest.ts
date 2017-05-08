import { Service } from '../../../Service';
import createAttachment from '../../utils/createAttachment';
import createAttachmentModel from '../../utils/createAttachmentModel';
import createAttachmentStatement from '../../utils/createAttachmentStatement';
import storeStatementsInService from '../../utils/storeStatementsInService';

const TEST_ID_1 = '1c86d8e9-f325-404f-b3d9-24c451035582';
const TEST_ID_2 = '1c86d8e9-f325-404f-b3d9-24c451035583';
const TEST_CONTENT_A = 'A';
const TEST_CONTENT_B = 'B';
const TEST_ATTACHMENT_MODEL_A = createAttachmentModel(TEST_CONTENT_A);
const TEST_ATTACHMENT_MODEL_B = createAttachmentModel(TEST_CONTENT_B);
const TEST_ATTACHMENT_A = createAttachment(TEST_CONTENT_A);
const TEST_FILE_URL_ATTACHMENT = createAttachment(TEST_CONTENT_A, 'http://www.example.com');

export type AttachmentAsserter = (
  expectedIds: string[], expectedAttachments: any[]
) => Promise<void>;

export default (service: Service, assertAttachments: AttachmentAsserter) => {
  const storeStatements = storeStatementsInService(service);

  it('should return an attachment when it is referenced once', async () => {
    const testStatement = createAttachmentStatement([TEST_ATTACHMENT_A], TEST_ID_1);
    await storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A]);
    await assertAttachments([TEST_ID_1], [TEST_ATTACHMENT_MODEL_A]);
  });

  it('should not return an attachment when it is referenced via a fileURL', async () => {
    const testStatement = createAttachmentStatement([TEST_FILE_URL_ATTACHMENT], TEST_ID_1);
    await storeStatements([testStatement], []);
    await assertAttachments([TEST_ID_1], []);
  });

  it('should return an attachment once when it is referenced twice', async () => {
    const testStatement = createAttachmentStatement([TEST_ATTACHMENT_A], TEST_ID_1);
    await storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A, TEST_ATTACHMENT_MODEL_A]);
    await assertAttachments([TEST_ID_1], [TEST_ATTACHMENT_MODEL_A]);
  });

  it('should return an attachment once when it is referenced twice and attached once', async () => {
    const testStatement1 = createAttachmentStatement([TEST_ATTACHMENT_A], TEST_ID_1);
    const testStatement2 = createAttachmentStatement([TEST_ATTACHMENT_A], TEST_ID_2);
    await storeStatements([testStatement1, testStatement2], [TEST_ATTACHMENT_MODEL_A]);
    await assertAttachments([TEST_ID_1, TEST_ID_2], [TEST_ATTACHMENT_MODEL_A]);
  });

  it('should return an attachment once when it is referenced twice in one statement', async () => {
    const testStatement = createAttachmentStatement([
      TEST_ATTACHMENT_A,
      TEST_ATTACHMENT_A,
    ], TEST_ID_1);
    await storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A]);
    await assertAttachments([TEST_ID_1], [TEST_ATTACHMENT_MODEL_A]);
  });

  it('should return one attachment when two are attached and one is referenced', async () => {
    const testStatement = createAttachmentStatement([TEST_ATTACHMENT_A], TEST_ID_1);
    await storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A, TEST_ATTACHMENT_MODEL_B]);
    await assertAttachments([TEST_ID_1], [TEST_ATTACHMENT_MODEL_A]);
  });
};
