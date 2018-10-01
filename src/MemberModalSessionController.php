<?php

namespace Intwebg\MemberModalSession\Extension;

use SilverStripe\Control\Session;
use SilverStripe\Core\Extension;
use SilverStripe\Security\Member;

class MemberModalSessionController extends Extension {

	public function onAfterInit() {

		if (Member::currentUser()) {
			Session::set('session_on_page_time', time());
		}

	}

}
