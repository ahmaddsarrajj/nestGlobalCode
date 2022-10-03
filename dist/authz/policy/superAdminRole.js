"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdminPolicyHandler = void 0;
const action_1 = require("../action");
class SuperAdminPolicyHandler {
    handle(ability) {
        return ability.can(action_1.Action.Manage, "all");
    }
}
exports.SuperAdminPolicyHandler = SuperAdminPolicyHandler;
//# sourceMappingURL=superAdminRole.js.map