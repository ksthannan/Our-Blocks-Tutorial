<?php
/**
 * Plugin Name:       Our Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       our-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_gt_posts_block_init() {
	register_block_type( __DIR__ . '/blocks/build/copyright-blocks' );
	register_block_type( __DIR__ . '/blocks/build/gt-posts' );
	register_block_type( __DIR__ . '/blocks/build/another-block' );
	register_block_type( __DIR__ . '/blocks/build/our-description' );
}
add_action( 'init', 'create_block_gt_posts_block_init' );


function myplugin_register_template() {
	$post_type_object                = get_post_type_object( 'post' );
	$post_type_object->template      = array(
		array( 'core/image' ),
		array( 'core/paragraph' ),
		array(
			'core/heading',
			array(
				'lock' => array(
					'move'   => false,
					'remove' => false,
				),
			),
		),
	);
	$post_type_object->template_lock = 'all';
}
add_action( 'init', 'myplugin_register_template' );
