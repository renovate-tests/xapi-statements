import CommonTranslator from 'jscommons/dist/translatorFactory/Translator';
import ChangedStatementRef from '../errors/ChangedStatementRef';
import Conflict from '../errors/Conflict';
import DataBeforeFirstBoundary from '../errors/DataBeforeFirstBoundary';
import DataBeyondFinalBoundary from '../errors/DataBeyondFinalBoundary';
import DuplicateId from '../errors/DuplicateId';
import InvalidBoundary from '../errors/InvalidBoundary';
import JsonSyntaxError from '../errors/JsonSyntaxError';
import InvalidContentType from '../errors/InvalidContentType';
import InvalidContentTransferEncoding from '../errors/InvalidContentTransferEncoding';
import InvalidMethod from '../errors/InvalidMethod';
import InvalidVoidType from '../errors/InvalidVoidType';
import MissingAttachments from '../errors/MissingAttachments';
import ExtraAttachments from '../errors/ExtraAttachments';
import MissingLoadedId from '../errors/MissingLoadedId';
import MissingStatementId from '../errors/MissingStatementId';
import NoStatements from '../errors/NoStatements';
import QueryIds from '../errors/QueryIds';
import UnknownParams from '../errors/UnknownParams';
import UnequalStatementId from '../errors/UnequalStatementId';
import VoidingError from '../errors/VoidingError';
import InvalidX5CType from '../errors/InvalidX5CType';
import InvalidX5CChain from '../errors/InvalidX5CChain';
import InvalidJws from '../errors/InvalidJws';
import InvalidSignedStatement from '../errors/InvalidSignedStatement';
import InvalidSignatureAlgorithm from '../errors/InvalidSignatureAlgorithm';

interface Translator extends CommonTranslator {
  readonly changedStatementRefError: (err: ChangedStatementRef) => string;
  readonly conflictError: (err: Conflict) => string;
  readonly dataBeforeFirstBoundaryError: (err: DataBeforeFirstBoundary) => string;
  readonly dataBeyondFinalBoundaryError: (err: DataBeyondFinalBoundary) => string;
  readonly duplicateIdError: (err: DuplicateId) => string;
  readonly invalidBoundaryError: (err: InvalidBoundary) => string;
  readonly invalidContentTypeError: (err: InvalidContentType) => string;
  readonly invalidContentTransferEncodingError: (err: InvalidContentTransferEncoding) => string;
  readonly invalidMethodError: (err: InvalidMethod) => string;
  readonly jsonSyntaxError: (err: JsonSyntaxError) => string;
  readonly invalidVoidTypeError: (err: InvalidVoidType) => string;
  readonly missingAttachmentsError: (err: MissingAttachments) => string;
  readonly extraAttachmentsError: (err: ExtraAttachments) => string;
  readonly missingLoadedIdError: (err: MissingLoadedId) => string;
  readonly missingStatementIdError: (err: MissingStatementId) => string;
  readonly noStatementsError: (err: NoStatements) => string;
  readonly unequalStatementIdError: (err: UnequalStatementId) => string;
  readonly voidingErrorError: (err: VoidingError) => string;
  readonly queryIdsError: (err: QueryIds) => string;
  readonly unknownParamsError: (err: UnknownParams) => string;
  readonly invalidX5CTypeError: (err: InvalidX5CType) => string;
  readonly invalidX5CChainError: (err: InvalidX5CChain) => string;
  readonly invalidJwsError: (err: InvalidJws) => string;
  readonly invalidSignedStatementError: (err: InvalidSignedStatement) => string;
  readonly invalidSignatureAlgorithmError: (err: InvalidSignatureAlgorithm) => string;
}

export default Translator;
