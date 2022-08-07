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
        'abl/timeline-block'      => array(
            'slug'				=> 'abl/timeline-block',
            'dest'				=> '/static-blocks/timeline-block',
            'dynamic'           =>  false,
            'parent-class'      => 'abl_timeline_block',
            'name'  			=> __( 'Timeline Block', 'advance-block-library' ),
            'desc'  			=> __( 'Enter details and it will display in timeline', 'advance-block-library' )        
        )
    );
    
    return $blocks;
}
