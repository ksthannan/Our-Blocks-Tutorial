import { __ } from '@wordpress/i18n';
import { useState } from 'react';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { ColorPicker, PanelBody, Button } from '@wordpress/components';

import './editor.scss';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { color, background, content, image } = attributes;

	const onChangeColor = ( newColor ) => {
		setAttributes( { color: newColor } );
	};
	const onChangeBgColor = ( newBackground ) => {
		setAttributes( { background: newBackground } );
	};
	const onChangeImage = ( media ) => {
		setAttributes( { image: { url: media.url, alt: media.alt } } );
	};

	console.log( attributes );

	const blockProps = useBlockProps( {
		className: 'our-description',
	} );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
					<label>Background</label>
					<ColorPicker
						color={ background }
						onChange={ ( newBackground ) =>
							onChangeBgColor( newBackground )
						}
						enableAlpha
						defaultValue="#000"
					/>
					<label>Color</label>
					<ColorPicker
						color={ color }
						onChange={ ( newColor ) => onChangeColor( newColor ) }
						enableAlpha
						defaultValue="#000"
					/>
				</PanelBody>
			</InspectorControls>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={ ( media ) => onChangeImage( media ) }
					allowedTypes={ [ 'image' ] }
					value={ image.url }
					render={ ( { open } ) =>
						image ? (
							<img
								onDoubleClick={ open }
								src={ image.url }
								alt={ image.alt }
							/>
						) : (
							''
						)
					}
				/>
			</MediaUploadCheck>

			<RichText
				style={ { color: color, background: background } }
				tagName="p"
				value={ content }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __( 'Content placeholder...' ) }
			/>
		</div>
	);
}
