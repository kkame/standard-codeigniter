<?php
/**
 * Created by PhpStorm.
 * User: kkame
 * Date: 18. 6. 1
 * Time: 오후 9:10
 */

class BASE_Controller extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->enable_profiler();
    }

    private function enable_profiler()
    {

        $this->load->add_package_path(APPPATH . 'third_party/codeigniter-debugbar');
        $this->load->library('console');
        $this->output->enable_profiler(true);

    }
}