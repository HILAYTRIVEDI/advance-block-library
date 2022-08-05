<?php
/**
 * 
 * All Block Details Are Listed Here.
 * 
 * @return array $blocks Contains details of all the blocks.
 * 
 */
function abl_blocks_list(){
    
    $blocks = array(
        'abl/our-sponsors'      => array(
            'slug'				=> 'abl/our-sponsors',
            'dest'				=> '/static-blocks/our-sponsors',
            'dynamic'           =>  false,
            'parent-class'      => 'abl_our_sponsor_block',
            'name'  			=> __( 'Our Sponsors', 'advance-block-library' ),
            'desc'  			=> __( 'Display selected images as sponsors slide', 'advance-block-library' )        
        )
    );
    
    return $blocks;
}
