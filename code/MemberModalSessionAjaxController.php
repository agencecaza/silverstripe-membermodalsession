<?php

class MemberModalSessionAjaxController extends Controller {

  private static $allowed_actions = array(
    'keepalivesession'
  );

  public function keepalivesession() {
  	Session::set('session_start_time', time());
    return true;
  }

}
