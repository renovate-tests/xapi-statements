import Agent from '../../../models/Agent'; /* tslint:disable-line:no-unused-variable */
import Group from '../../../models/Group'; /* tslint:disable-line:no-unused-variable */
import Actor from '../../../models/Actor';
import IdFormattedActor from '../../../models/IdFormattedActor';

export interface ActorWithId {
  account?: any;
  mbox?: any;
  mbox_sha1sum?: any;
  openid?: any;
}

export interface ActorWithMembers {
  member?: any[];
}

const getActorWithId = (actor: Actor): ActorWithId => {
  if (actor.account !== undefined) return { account: actor.account };
  if (actor.mbox !== undefined) return { mbox: actor.mbox };
  if (actor.mbox_sha1sum !== undefined) return { mbox_sha1sum: actor.mbox_sha1sum };
  if (actor.openid !== undefined) return { openid: actor.openid };
  return {};
};

const getActorWithMembers = (actor: Actor): ActorWithMembers => {
  return (
    (actor.objectType === 'Group' && actor.member !== undefined) ?
    { member: actor.member.map(formatActor) } :
    {}
  );
};

const formatActor = (actor: Actor): IdFormattedActor => {
  const actorWithId = getActorWithId(actor);
  const actorWithMembers = (
    Object.keys(actorWithId).length > 0 ? {} :
    getActorWithMembers(actor)
  );
  return {
    ...(actor.objectType !== 'Agent' ? {objectType: actor.objectType} : {}),
    ...actorWithId,
    ...actorWithMembers,
  };
};

export default formatActor;
