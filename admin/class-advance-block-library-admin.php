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

		add_action( 'admin_menu',  array( $this, 'abl_page_registraion' ) );
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Advance_Block_Library_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Advance_Block_Library_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/advance-block-library-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Advance_Block_Library_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Advance_Block_Library_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/advance-block-library-admin.js', array( 'jquery' ), $this->version, false );

	}

	/**
	 * Register the custom admin page for the Advance Block Library plugin.
	 */
	public function abl_page_registraion(){
		add_menu_page( 'Liberary Settings Page', 'Liberary Settings ', 'manage_options', 'abl_admin_setting', array( $this, 'abl_admin_setting_callback' ) );
	}
	public function abl_admin_setting_callback(){ 	
	
		$blocks 		= abl_blocks_list();

		$active_blocks 	= maybe_unserialize( get_option('abl_active_blocks ') );
		if( ! is_array( $active_blocks ) ){
			$active_blocks = array();
		} ?>
		<div class="md_welcome_page_heading">
		<div class="md_welcome_page_heading_img">
			<img src="<?php echo ADVANCE_BLOCK_LIBRARY_URI.'admin/images/mdinc-logo.svg'?>" alt="Logo">
		</div>
		<div class="md_welcome_page_heading_desc">
			<div>
				<h1><?php echo $plugin_data['Name']?> Plugin</h1>
				<h3>Free Version: <?php echo $plugin_data['Version']?></h3>
			</div>
			<div class="md_welcome_page_review">
				<a class="md_welcome_page_review_img" href="https://www.multidots.com/">
					<img src="<?php echo ADVANCE_BLOCK_LIBRARY_URI.'admin/images/like-svgrepo-com.svg'?>" alt="Review Logo">
					<div>FeedBack</div>
				</a>
				<a class="md_welcome_page_review_img" href="https://www.multidots.com/">
					<img src="<?php echo ADVANCE_BLOCK_LIBRARY_URI.'admin/images/support-technology-svgrepo-com.svg'?>" alt="Review Logo">
					<div>Support</div>
				</a>
			</div>
		</div>
	</div><section class="md_settings_page">
		<div class="md_settings_page_heading">
			<h2>MD Essential Blocks</h2>
            <div class="md_total_Active_blocks">
                Total Active Blocks:  <span><?php echo count($active_blocks)?></span>
            </div>
            <div class="md_total_blocks">
                Total  Blocks: <span><?php echo count($blocks)?></span>
            </div>
			<div class="md_settings_page_heading_all button" id="md_settings_page_heading_all_btn">
			<?php 
				if (empty($active_blocks)) {
					echo $btnall = __( 'Activate All', 'md-blocks' );
				} else {
					echo $btnall = __( 'Deactivate All', 'md-blocks' );
				}
			?>
			</div>
		</div>
			<div class="md_settings_page_list">
                <div class="md_settings_page_list_main_heading">
                    <div class="md_settings_page_list_main_heading_item">
                        Block Name
                    </div>
                    <div class="md_settings_page_list_main_heading_item">
                        Parent Class
                    </div>
                    <div class="md_settings_page_list_main_heading_item">
                        Action
                    </div>
                </div>
				<?php 
						foreach($blocks as $block){ 
							?>

						<div class="md_settings_page_list_item">
							<div class="md_settings_page_list_item_title">
									<?php echo esc_html_e($block['name'],'md-blocks')?>
							</div>
                            <div class="md_settings_page_list_item_parent_class">
							        <?php echo esc_html_e($block['parent-class'],'md-blocks')?>
							</div>
							<div class="md_btn">
								<button class="button md_toggle_btn" data-block-slug="<?php echo esc_attr( $block['slug'] )?>">
									<?php 

										if ( ! in_array($block['slug'] ,$active_blocks)) {
											echo $btntitle = __( 'Activate', 'md-blocks' );
										} else {
											echo $btntitle = __( 'Deactivate', 'md-blocks' );
										}

									?>
								</button>
							</div>
						</div>
					<?php	} ?>
			</div>
	</section>

	<?php }
}
