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
        'abl/team-members-block'      => array(
            'slug'				=> 'abl/team-members-block',
            'dest'				=> '/static-blocks/team-members-block',
            'dynamic'           =>  false,
            'name'  			=> __( 'Team Members Block', 'advance-block-library' ),
            'desc'  			=> __( 'Add team members details', 'advance-block-library' )        
        ),
        'abl/hero-banner'      => array(
            'slug'				=> 'abl/hero-banner',
            'dest'				=> '/static-blocks/hero-banner',
            'dynamic'           =>  false,
            'name'  			=> __( 'Hero Banner Block', 'advance-block-library' ),
            'desc'  			=> __('An advance block to create your banner area.', 'advance-block-library' )        
        )
    );
    
    return $blocks;
}
