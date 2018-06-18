<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends BASE_Controller {


    public function __construct()
    {
        parent::__construct();
    }


    /**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{

        $this->console->exception(new Exception('test exception'));
        $this->console->debug('Debug message');
        $this->console->info('Info message');
        $this->console->warning('Warning message');
        $this->console->error('Error message');

		$this->load->view('welcome_message');
	}
}
