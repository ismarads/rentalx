import { inject, injectable } from "tsyringe";
import {deleteFile} from "../../../../utils/file"
import { IUsersRepository } from "../../repositories/IUsersReposotory";

interface IRequest{
    user_id: string;
    avatar_file;
}


@injectable()
class UpdateUserAvatarUseCase{
constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
){}
    async execute({user_id, avatar_file}:IRequest):Promise<void>{
        const user = await this.userRepository.findById(user_id);

        if(user.avatar){
        await deleteFile(`./tmp/avatar/${user.avatar}`)

        }
        user.avatar = avatar_file;

        await this.userRepository.create(user)
    }
}

export { UpdateUserAvatarUseCase}