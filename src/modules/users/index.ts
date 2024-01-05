import { PrismaUserRepository } from "./repositories/implementations/prisma-user.repository";
import { FindUserController } from "./controllers/find-user.controller";
import { FindUser } from "./services/find-user.service";
import { CreateUserController } from "./controllers/create-user.controller";
import { CreateUser } from "./services/create-user.service";
import { RemoveUserController } from "./controllers/remove-user.controller";
import { RemoveUser } from "./services/remove-user.service";
import { UpdateUserController } from "./controllers/update-user.controller";
import { UpdateUser } from "./services/update-user.service";

const repository = new PrismaUserRepository();

const findUser = new FindUser(repository);
const findUserController = new FindUserController(findUser);

const createUser = new CreateUser(repository);
const createUserController = new CreateUserController(createUser);

const removeUser = new RemoveUser(repository);
const removeUserController = new RemoveUserController(removeUser);

const updateUser = new UpdateUser(repository);
const updateUserController = new UpdateUserController(updateUser);

export {

    createUserController,
    findUserController,
    removeUserController,
    updateUserController,

};