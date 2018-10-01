<?php

namespace Intwebg\MemberModalSession\Controller;

use SilverStripe\Control\Session;
use SilverStripe\Control\Controller;

class MemberModalSessionAjaxController extends Controller {

  private static $allowed_actions = array(
    'keepalivesession'
  );

  public function keepalivesession() {
  	Session::set('session_start_time', time());
    return true;
  }

}
