<?php

namespace AgenceCaza\MemberModalSession;

// use SilverStripe\Control\Session; not working
use SilverStripe\Control\Controller;

class AjaxController extends Controller {

  private static $allowed_actions = array(
    'keepalivesession'
  );

  public function keepalivesession() {
  	//Session::set('session_start_time', time());
    $_SESSION['session_start_time']=time();
    return true;
  }

}
