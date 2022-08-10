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
            'parent-class'      => 'abl_team_members_block',
            'name'  			=> __( 'Team Members Block', 'advance-block-library' ),
            'desc'  			=> __( 'Add team members details', 'advance-block-library' )        
        )
    );
    
    return $blocks;
}
