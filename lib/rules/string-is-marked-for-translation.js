/*

*/
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = function(context) {
	function reportUnTranslatedString(node) {
		context.report({
			node: node,
			message: 'Found string literal inside JSX, should be inside a <Formatted* /> component'
		});
	}

	// --------------------------------------------------------------------------
	// Public
	// --------------------------------------------------------------------------

	return {
	    Literal: function(node) {
	    	if (
	    		!/^[\s]+$/.test(node.value) &&
	        	node.parent &&
				node.parent.type.indexOf('JSX') !== -1 &&
				node.parent.type !== 'JSXAttribute' 
	    	) {
				reportUnTranslatedString(node);
	    	}
	    }

	};
};

module.exports.schema = [{
	type: 'object',
	properties: {},
	additionalProperties: false
}];
