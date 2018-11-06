<?php

namespace Intwebg\MemberModalSession;

// use SilverStripe\Control\Session; not working
use SilverStripe\Core\Extension;
use SilverStripe\Security\Member;

class Controller extends Extension {

	public function onAfterInit() {

		if (Member::currentUser()) {
			//Session::set('session_on_page_time', time());
			$_SESSION['session_on_page_time']=time();
		}

	}

}
