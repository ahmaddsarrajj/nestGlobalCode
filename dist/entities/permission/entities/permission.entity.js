"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissionn = void 0;
class Permissionn {
    static parseCondition(condition, variables) {
        if (!condition)
            return null;
        const parsedCondition = {};
        for (const [key, rawValue] of Object.entries(condition)) {
            if (rawValue !== null && typeof rawValue === "object") {
                const value = this.parseCondition(rawValue, variables);
                parsedCondition[key] = value;
                continue;
            }
            if (typeof rawValue !== "string") {
                parsedCondition[key] = rawValue;
                continue;
            }
            const matches = /^\\${([a-zA-Z0-9]+)}$/.exec(rawValue);
            if (!matches) {
                parsedCondition[key] = rawValue;
                continue;
            }
            const value = variables[matches[1]];
            if (typeof value === "undefined") {
                throw new ReferenceError(`Variable ${name} is not defined`);
            }
            parsedCondition[key] = value;
        }
        return parsedCondition;
    }
}
exports.Permissionn = Permissionn;
//# sourceMappingURL=permission.entity.js.map