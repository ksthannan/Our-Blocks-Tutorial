import { __ } from '@wordpress/i18n';
import { useState } from 'react';
import {
	useBlockProps,
	InspectorControls,
	AlignmentToolbar,
	TextColor,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	SelectControl,
	ColorPicker,
	PanelBody,
	__experimentalBorderControl as BorderControl,
} from '@wordpress/components';

import './editor.scss';

const colors = [
	{ name: 'Blue 20', color: '#72aee6' },
	{ name: 'Gray', color: '#dddddd' },
];

const paddingOptions = [
	{ label: 'None', value: '0px' },
	{ label: 'Small', value: '10px' },
	{ label: 'Medium', value: '20px' },
	{ label: 'Large', value: '30px' },
];

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { cssStyles, content } = attributes;

	const onChangePadding = ( newPadding ) => {
		setAttributes( { cssStyles: { ...cssStyles, padding: newPadding } } );
	};
	const onChangeBorder = ( newBorder ) => {
		setAttributes( { cssStyles: { ...cssStyles, border: newBorder } } );
	};
	const onChangeColor = ( newColor ) => {
		setAttributes( { cssStyles: { ...cssStyles, color: newColor } } );
	};
	const onChangeBgColor = ( newBgColor ) => {
		setAttributes( { cssStyles: { ...cssStyles, bgColor: newBgColor } } );
	};
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( {
			cssStyles: { ...cssStyles, alignment: newAlignment },
		} );
	};

	// const [ padding, setPadding ] = useState( attributes.padding );

	console.log( cssStyles );
	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'my-plugin' ) }>
					<label>Background Color</label>
					<ColorPicker
						color={ cssStyles.bgColor }
						onChange={ ( newBgColor ) =>
							onChangeBgColor( newBgColor )
						}
						enableAlpha
						defaultValue="#999"
					/>
					<AlignmentToolbar
						value={ cssStyles.alignment }
						onChange={ ( newAlignment ) =>
							onChangeAlignment( newAlignment )
						}
					/>
					<BorderControl
						colors={ colors }
						label={ __( 'Border' ) }
						onChange={ ( newBorder ) =>
							onChangeBorder( newBorder )
						}
						value={ cssStyles.border }
					/>
					<ColorPicker
						color={ cssStyles.color }
						onChange={ ( newColor ) => onChangeColor( newColor ) }
						enableAlpha
						defaultValue="#000"
					/>
					<SelectControl
						label={ __( 'Padding', 'my-plugin' ) }
						value={ cssStyles.padding }
						options={ paddingOptions }
						onChange={ ( newPadding ) =>
							onChangePadding( newPadding )
						}
					/>
				</PanelBody>
			</InspectorControls>

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
				<BlockControls>
					<AlignmentToolbar
						value={ cssStyles.alignment }
						onChange={ onChangeAlignment }
					/>
				</BlockControls>
				<RichText
					style={ {
						color: cssStyles.color,
					} }
					tagName="h2"
					value={ attributes.content }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					onChange={ ( content ) => setAttributes( { content } ) }
					placeholder={ __( 'Heading text placeholder...' ) }
				/>
			</div>
		</div>
	);
}
