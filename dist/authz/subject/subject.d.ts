import { InferSubjects } from "@casl/ability";
import { Department } from "src/entities/department/entities/department.entity";
import { HInstituation } from "src/entities/h_instituation/entities/h_instituation.entity";
import { Network } from "src/entities/network/entities/network.entity";
import { User } from "src/entities/user/entities/user.entity";
export declare type Subjects = InferSubjects<typeof User> | InferSubjects<typeof Network> | InferSubjects<typeof HInstituation> | InferSubjects<typeof Department> | 'all';
