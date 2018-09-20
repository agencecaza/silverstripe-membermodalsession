<?php

class MemberModalSessionController extends Extension {

	public function onAfterInit() {

		if (Member::currentUser()) {
			Session::set('session_on_page_time', time());
		}

	}

}
