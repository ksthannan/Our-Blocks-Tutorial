import { __ } from '@wordpress/i18n';
import { useState } from 'react';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { ColorPicker, PanelBody } from '@wordpress/components';

import './editor.scss';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { color, background, content } = attributes;

	const onChangeColor = ( newColor ) => {
		setAttributes( { color: newColor } );
	};
	const onChangeBgColor = ( newBackground ) => {
		setAttributes( { background: newBackground } );
	};

	console.log( attributes );

	return (
		<div { ...useBlockProps() }>
			<div className="our-description">
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
							onChange={ ( newColor ) =>
								onChangeColor( newColor )
							}
							enableAlpha
							defaultValue="#000"
						/>
					</PanelBody>
				</InspectorControls>
				{ /* <p style={{color:color, background: background}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p> */ }
				<RichText
					style={ { color: color, background: background } }
					tagName="p"
					value={ content }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					onChange={ ( content ) => setAttributes( { content } ) }
					placeholder={ __( 'Content placeholder...' ) }
				/>
			</div>
		</div>
	);
}
