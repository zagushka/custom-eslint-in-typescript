import { Rule } from 'eslint';
import { Property } from "estree";

const goUpAndFind = (node: Property & Rule.NodeParentExtension) => {
}

const rule: Rule.RuleModule = {
    meta: {
        docs: {
            description: 'This rule is run on typescript!',
        },
    },
    create: (context: Rule.RuleContext) => {
        return {
            Property: (node) => {
                if (node.key.type !== "Identifier" || node.key.name !== "state") {
                    return;
                }

                if ("ObjectExpression" === node.value.type) {
                    context.report({
                        node,
                        message: 'Please use function instead',
                    });
                }
            },
        }
    },
};

export default rule;
