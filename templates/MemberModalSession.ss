<% if currentUser %>
  <div class="MemberModalSession" data-securityid="$SecurityID" data-redirect="$MemberLoginPage.Link" data-timeout="$SiteConfig.MemberModalSessionTimeout" data-timeleft="$SiteConfig.MemberModalSessionTimeleft">
    <div class="content">
      <span class="title"><%t MemberModalSession.KEEPCONNECTED 'Keep connected?' %></span>
      <span class="warning"><%t MemberModalSession.LOGOUTIN 'Logout in' %> <span class="label label-warning" id="seconds">0</span> <%t MemberModalSession.SECONDS 'seconds' %></span>
      <button class="yes"><%t MemberModalSession.KEEPLOGGUEDIN 'Keep loggued in' %></button>
      <a href="{$BaseHref}Security/logout?SecurityID=$SecurityID"><button class="no"><%t MemberModalSession.LOGOUT 'Logout' %></button></a>
    </div>
  </div>
  <% require css("intwebg/silverstripe-membermodalsession:client/css/styles.css") %>
  <% require javascript("intwebg/silverstripe-membermodalsession:client/javascript/script.js") %>
<% end_if %>
