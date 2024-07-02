import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { cssStyles, content } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<div
				style={ {
					backgroundColor: cssStyles.bgColor,
					padding: cssStyles.padding,
					textAlign: cssStyles.alignment,
					color: cssStyles.color,
					borderColor: cssStyles.border.color,
					borderWidth: cssStyles.border.width,
					borderStyle: cssStyles.border.style,
				} }
			>
				<RichText.Content
					style={ {
						color: cssStyles.color,
					} }
					tagName="h2"
					value={ content }
				/>
			</div>
		</div>
	);
}
