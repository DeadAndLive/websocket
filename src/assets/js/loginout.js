let loginOutClick = $(".loginOut");
let loginOut = new WebSocket("wss://123.57.19.35:9814/loginOut");
$(loginOutClick).on("click",function() {
	loginOut.send("out");
});
