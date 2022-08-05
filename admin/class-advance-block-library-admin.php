<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       advance-block-library
 * @since      1.0.0
 *
 * @package    Advance_Block_Library
 * @subpackage Advance_Block_Library/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Advance_Block_Library
 * @subpackage Advance_Block_Library/admin
 * @author     Smit and Hilay <smitrathod2808@gmail.com>
 */
class Advance_Block_Library_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		//Add the assets of the active blocks.
		add_action( 'init', array( $this, 'abl_load_admin_files' ) );

		//Add the custom admin page to the site.
		add_action( 'admin_menu',  array( $this, 'abl_page_registraion' ) );
		
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/advance-block-library-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/advance-block-library-admin.js', array( 'jquery' ), $this->version, false );

	}

	public function abl_load_admin_files() {
	
		//Get the array of the blocks.
		$blocks 		= abl_blocks_list();

		//Get the active blocks.
		$active_blocks 	= maybe_unserialize( get_option('abl_active_blocks ') );
	
		if( ! is_array( $active_blocks ) ){
			$active_blocks = array();
		}
		
		$block_count = 1;

		foreach( $blocks as $block ){ 
			
			// if( in_array( $block['slug'], $active_blocks ) ){
				
				wp_register_script( 'abl_advance_block_'.$block_count,
					plugin_dir_url(__DIR__) . 'blocks/'.$block['dest'].'/block.build.js',
					array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components' ), false, NULL
				);
	
				wp_enqueue_style(
					'abl_advance_block_'.$block_count,
					plugin_dir_url(__DIR__) . 'blocks/'.$block['dest'].'/css/editor.css'
				);			

				register_block_type( $block['slug'].$block_count, array(
					'editor_script' => 'abl_advance_block_'.$block_count,
					'editor_style'  => 'abl_advance_block_'.$block_count
				) );		
				
			// }
			$block_count++;
		}
	}

	/**
	 * Register the custom admin page for the Advance Block Library plugin.
	 */
	public function abl_page_registraion(){
		add_menu_page( 'Liberary Settings Page', 'Liberary Settings ', 'manage_options', 'abl_admin_setting', array( $this, 'abl_admin_setting_callback' ) );
	}

	/**
	 * Contains the html of the menu page
	 * 
	 * @return html $html returns the html structure of the page.
	 */
	public function abl_admin_setting_callback(){ 	
	
		//Get the array of the blocks.
		$blocks 		= abl_blocks_list();

		// Get the plugin meta data.
		$plugin_details 	= get_plugin_data(plugin_dir_path( __DIR__ ) . 'advance-block-library.php');

		//Get the active blocks.
		$active_blocks 	= maybe_unserialize( get_option('abl_active_blocks ') );
		if( ! is_array( $active_blocks ) ){
			$active_blocks = array();
		} 

		ob_start();

		?>

		<div class="abl-page-wrapper">
			<div class="container">
				<div class="abl-heading">
					<h1 class="abl-heading__title">
						<?php echo esc_html__($plugin_details['Name'],'advance-block-library')?>
					</h1>
					<h3 class="abl-heading__version">

					</h3>
				</div>
			</div>
		</div>
	<?php 
		$html = ob_get_contents();
		return $html;
	}
}
