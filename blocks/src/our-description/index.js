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
		content: {
			type: 'string',
		},
	},
} );
