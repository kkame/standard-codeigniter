<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use DebugBar\DebugBar;
use DebugBar\OpenHandler;
use DebugBar\Storage\FileStorage;

class Debug extends BASE_Controller
{
    public function open_handler()
    {
        $this->output->enable_profiler(FALSE);
        $this->config->load('profiler', TRUE);
        $path = $this->config->item('cache_path', 'profiler');
        $cache_path = ($path === '') ? APPPATH.'cache/debugbar/' : $path;
        $debugbar = new DebugBar();
        $debugbar->setStorage(new FileStorage($cache_path));
        $openHandler = new OpenHandler($debugbar);
        $data = $openHandler->handle(NULL, FALSE, FALSE);

        $this->output
            ->set_content_type('application/json')
            ->set_output($data);
    }
}