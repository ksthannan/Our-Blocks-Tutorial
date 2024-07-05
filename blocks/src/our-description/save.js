import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { color, background, content, image } = attributes;
	const blockProps = useBlockProps.save( {
		className: 'our-description',
	} );

	return (
		<div { ...blockProps }>
			{ image ? <img src={ image.url } alt={ image.alt } /> : '' }
			{ /* <RichText.Content
				style={ { color: color, background: background } }
				tagName="p"
				value={ content }
			/> */ }

			<InnerBlocks.Content />
		</div>
	);
}
