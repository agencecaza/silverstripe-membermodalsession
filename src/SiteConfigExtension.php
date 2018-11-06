<?php

namespace Intwebg\MemberModalSession;

use SilverStripe\ORM\DataExtension;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\NumericField;

class SiteConfigExtension extends DataExtension {

  private static $db = array(
    'MemberModalSessionTimeout' => 'Int',
    'MemberModalSessionTimeleft' => 'Int'
  );

  public function populateDefaults() {
    $this->owner->MemberModalSessionTimeout = "30"; // 30 minutes
    $this->owner->MemberModalSessionTimeleft = "60"; // 60 seconds
    parent::populateDefaults();
  }


	function updateCMSFields(FieldList $fields) {

		$fields->addFieldToTab( 'Root.MemberModalSession', NumericField::create('MemberModalSessionTimeout', _t('MemberModalSession.TIMEOUT','Timeout before modal'))->setDescription(_t('MemberModalSession.INMINUTES','In minutes')) );
		$fields->addFieldToTab( 'Root.MemberModalSession', NumericField::create('MemberModalSessionTimeleft', _t('MemberModalSession.TIMELEFT','Timeout after modal in displayed'))->setDescription(_t('MemberModalSession.INSECONDS','In seconds')));

		return $fields;

	}

}
