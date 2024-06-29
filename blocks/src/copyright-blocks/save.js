import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Copyright change Block – from frontend save js' }
		</p>
	);
}
