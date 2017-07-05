import Statement from '../../models/Statement';
import GetStatementsOptions from '../../repoFactory/options/GetStatementsOptions';
import isMatchingRelatedAgent from './isMatchingRelatedAgent';
import isMatchingUnrelatedAgent from './isMatchingUnrelatedAgent';
import matchesModel from './matchesModel';

const matcher = (statement: Statement, opts: GetStatementsOptions): boolean => {
  return (
    opts.agent === undefined ? true :
      (
        opts.relatedAgents === true ?
          isMatchingRelatedAgent(statement, opts.agent) :
          isMatchingUnrelatedAgent(statement, opts.agent)
      )
  );
};

export default matchesModel(matcher);