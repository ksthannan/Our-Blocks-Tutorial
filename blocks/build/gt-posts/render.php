<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<h1>Posts</h1>
	<?php
	$args  = array(
		'post_type' => 'post',
	);
	$query = new WP_Query( $args );
	while ( $query->have_posts() ) :
		$query->the_post();

		echo '<a href="' . get_the_permalink() . '">' . get_the_title() . '</a>';

	endwhile;
	?>
</div>
