import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
	save,
	attributes: {
		color: {
			type: 'string',
			default: '#000',
		},
		background: {
			type: 'string',
			default: '#eeee',
		},
		image: {
			type: 'object',
			default: {
				url: 'http://gutenberg-block-development-from-scratch.local/wp-content/uploads/2024/06/1520176215199.jpg',
				alt: 'Beautiful Bangladesh',
			},
		},
		content: {
			type: 'string',
		},
	},
} );
