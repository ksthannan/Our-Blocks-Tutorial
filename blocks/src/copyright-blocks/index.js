/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import __ from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,

	supports: {
		// anchor: true,
		// align: [ 'left', 'center', 'right' ],
		// background: {
		// 	backgroundImage: true,
		// 	backgroundSize: true,
		// },
		// className: true,
		// dimensions: {
		// 	aspectRatio: true,
		// 	minHeight: true,
		// },
	},

	attributes: {
		cssStyles: {
			type: 'object',
			default: {
				bgColor: '#aa4e4e',
				color: '#f1e39f',
				padding: '30px',
				border: {
					color: '#c96565',
					style: 'solid',
					width: '15px',
				},
				alignment: 'center',
			},
		},
		content: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
	},
} );
