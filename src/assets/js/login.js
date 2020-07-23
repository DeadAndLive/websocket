const login_input = $(".login-fcous");
const logins = $("#login");
$(login_input).focus(function() {
	$(logins).removeClass("login-transform");
});

$(login_input).blur(function() {
	$(logins).addClass("login-transform");
});