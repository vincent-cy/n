import { getTreeRepository, Repository } from "typeorm";
import { Actors } from "../model/actor_c/entities/Actors";
import { Globaluser } from "../model/mmo_account/entities/Globaluser";


let actor_service: ActorService

export class ActorService {
    readonly actorRepository: Repository<Actors>
    readonly globalUserRepository: Repository<Globaluser>
    constructor() {
        this.actorRepository = getTreeRepository(Actors, 'actor_1');
        this.globalUserRepository = getTreeRepository(Globaluser, 'account');
    }

    findActor = async ({ actorid }: { actorid: number }) => {
        return await this.actorRepository.findOne({ where: { actorid } })
    }

    allActors = async () => {
        return await this.actorRepository.find({ select: ['accountid','accountname','circle','mountexp','level','logindays', 'actorname','actorid','energy', 'onlinestatus', 'totalonlinesecond', 'serverindex', 'job','checkins','killmonstercount'] })
    }

    findUserActor = async ({ accountid }) => {
        return await this.actorRepository.findAndCount({ where: { accountid } })
    }

    updateActorInfo = async ({ actorid }: { actorid: number }) => {
        return await this.actorRepository.update(actorid, {})
    }

}

export function init_actor_service() {
    if (!actor_service) {
        actor_service = new ActorService()
    }
}

export {
    actor_service
}