<% if currentUser %>
  <div class="MemberModalSession" data-redirect="$BaseHref" data-timeout="$SiteConfig.MemberModalSessionTimeout" data-timeleft="$SiteConfig.MemberModalSessionTimeleft">
    <div class="content">
      <h3><%t MemberModalSession.KEEPCONNECTED 'Keep connected?' %></h3>
      <p><%t MemberModalSession.LOGOUTIN 'Logout in' %> <span class="label label-warning" id="seconds">0</span> <%t MemberModalSession.SECONDS 'seconds' %></p>
      <button class="yes"><%t MemberModalSession.KEEPLOGGUEDIN 'Keep loggued in' %></button>
      <a href="{$BaseHref}Security/logout"><button class="no"><%t MemberModalSession.LOGOUT 'Logout' %></button></a>
    </div>
  </div>
  <% require css("membermodalsession/css/MemberModalSession.css") %>
  <% require javascript("membermodalsession/javascript/MemberModalSession.js") %>
  <% require javascript("membermodalsession/thirdparty/ifvisible.min.js") %>
<% end_if %>
