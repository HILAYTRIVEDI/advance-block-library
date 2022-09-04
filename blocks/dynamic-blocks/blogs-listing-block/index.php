<?php

add_action( 'init', 'blogs_listing_dynamic_block' );

/**
 * Register dynamic block.
 *
 * @since 1.0.0
 */
function blogs_listing_dynamic_block() {
    /**
     * Blog Listing Block.
     */
    register_block_type(
        'abl/blogs-listing-block',
        array(
            'attributes' => array(
                'selectedPostType' => array(
                    'type' => 'string',
                    'default' => null
                ),
                'selectedPostStatus' => array(
                    'type' => 'string',
                    'default' => null
                ),
                'selectedOrderBy' => array(
                    'type' => 'string',
                    'default' => null
                ),
                'selectedOrder' => array(
                    'type' => 'string',
                    'default' => null
                ),
                'displayFeatureImg'  => array(
					'type'    => 'boolean',
					'default' => true,
				),
                'displayTitle'  => array(
					'type'    => 'boolean',
					'default' => true,
				),
                'displayDesc'  => array(
					'type'    => 'boolean',
					'default' => true,
				),
                'displayLink'  => array(
					'type'    => 'boolean',
					'default' => true,
				),
                'titleColor' => array(
                    'type' => 'string',
                    'default' => '#000'
                ),
                'descColor' => array(
                    'type' => 'string',
                    'default' => '#000'
                ),
                'linkColor' => array(
                    'type' => 'string',
                    'default' => '#000'
                ),
            ),
            'render_callback' => 'blogs_listing_dynamic_block_callback',
        )
    );

    function blogs_listing_dynamic_block_callback($attributes){
        $post_types_values = ! empty( $attributes['selectedPostType'] ) ? $attributes['selectedPostType'] : "post";
        $post_status_values = ! empty( $attributes['selectedPostStatus'] ) ? $attributes['selectedPostStatus'] : "any";
        $post_orderby = ! empty( $attributes['selectedOrderBy'] ) ? $attributes['selectedOrderBy'] : "title";
        $post_order = ! empty( $attributes['selectedOrder'] ) ? $attributes['selectedOrder'] : "DESC";
        //echo $post_status_values;
        $args = array(
            'posts_per_page'   => -1,
            'post_type'        => $post_types_values,
            'post_status'      => $post_status_values,
            'orderby'       => $post_orderby,
            'order'   => $post_order
        );
        $the_query = new WP_Query( $args );
        ob_start();
        ?>
        <div class="blog-listing-section">
            <div class="container">
                <div class="post-lists">
                    <?php
                        if( $the_query->have_posts()){

                            while ( $the_query->have_posts() ) {

                                $the_query->the_post();
                                ?>
                                <div class="post-wrapper">
                                    <?php if ($attributes['displayFeatureImg']) { ?> 
                                        <div class="post-wrapper__image">
                                            <a href="<?php echo get_permalink(); ?>">
                                                <?php echo get_the_post_thumbnail(); ?>
                                            </a>
                                        </div>
                                    <?php } ?>
                                    <div class="post-wrapper__details">
                                        <?php if ($attributes['displayTitle']) { ?>
                                            <a href="<?php echo get_permalink(); ?>">
                                                <h3 style="color: <?php echo $attributes['titleColor'] ?>"><?php echo get_the_title(); ?></h3>
                                            </a>
                                        <?php } ?>
                                        <?php if ($attributes['displayDesc']) { ?>
                                            <p style="color: <?php echo $attributes['descColor'] ?>"><?php echo get_the_excerpt(); ?></p>
                                        <?php } ?>
                                        <?php if ($attributes['displayLink']) { ?>
                                            <a href="<?php echo get_permalink(); ?>">
                                                <p style="color: <?php echo $attributes['linkColor'] ?>">Read More</p>
                                            </a>
                                        <?php } ?>
                                    </div>
                                </div>
                                <?php
                            }
                        } else { ?>
                            <p>No posts found.</p>
                        <?php }
                    ?>
                </div>
            </div>
        </div>
        <?php
        $html = ob_get_clean();
        return $html;
    }
}