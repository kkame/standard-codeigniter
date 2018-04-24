<?php

declare(strict_types = 1);

/**
 * Class Admin
 */
class Admin extends CI_Controller
{
    public function index()
    {
        return $this->load->view('admin');
    }
}