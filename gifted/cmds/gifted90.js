/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */

(function(_0x531465,_0x4e42d0){const _0x4bf462=_0x35f7,_0x4168a1=_0x531465();while(!![]){try{const _0x4c27c2=-parseInt(_0x4bf462(0x1a1))/0x1+-parseInt(_0x4bf462(0x1ad))/0x2*(parseInt(_0x4bf462(0x199))/0x3)+parseInt(_0x4bf462(0x1ae))/0x4+-parseInt(_0x4bf462(0x1bf))/0x5*(parseInt(_0x4bf462(0x1b0))/0x6)+parseInt(_0x4bf462(0x1b3))/0x7*(parseInt(_0x4bf462(0x1a5))/0x8)+parseInt(_0x4bf462(0x1c6))/0x9*(-parseInt(_0x4bf462(0x1a7))/0xa)+-parseInt(_0x4bf462(0x1ba))/0xb*(-parseInt(_0x4bf462(0x1bd))/0xc);if(_0x4c27c2===_0x4e42d0)break;else _0x4168a1['push'](_0x4168a1['shift']());}catch(_0x21a8dd){_0x4168a1['push'](_0x4168a1['shift']());}}}(_0x4984,0xba269));import _0x5a4ca9 from'axios';function _0x35f7(_0x1c94ec,_0x636e37){const _0x49848f=_0x4984();return _0x35f7=function(_0x35f73c,_0xf3d995){_0x35f73c=_0x35f73c-0x196;let _0x567e7b=_0x49848f[_0x35f73c];return _0x567e7b;},_0x35f7(_0x1c94ec,_0x636e37);}import _0x1c254e,{prepareWAMessageMedia}from'@whiskeysockets/baileys';const {generateWAMessageFromContent,proto}=_0x1c254e,gptResponse=async(_0x2bfb41,_0x152054)=>{const _0x4c6bb9=_0x35f7,_0x1134ea=_0x2bfb41['body'][_0x4c6bb9(0x1a6)](/^[\\/!#.]/),_0x2dee3f=_0x1134ea?_0x1134ea[0x0]:'/',_0x1c9806=_0x2bfb41[_0x4c6bb9(0x1b5)][_0x4c6bb9(0x1c4)](_0x2dee3f)?_0x2bfb41['body'][_0x4c6bb9(0x1b7)](_0x2dee3f[_0x4c6bb9(0x19d)])[_0x4c6bb9(0x1a0)]('\x20')[0x0][_0x4c6bb9(0x1c3)]():'',_0x51f14f=_0x2bfb41[_0x4c6bb9(0x1b5)][_0x4c6bb9(0x1b7)](_0x2dee3f[_0x4c6bb9(0x19d)]+_0x1c9806[_0x4c6bb9(0x19d)])[_0x4c6bb9(0x1bb)](),_0x2dceff=['aidetect',_0x4c6bb9(0x1bc),'detect'];if(_0x2dceff['includes'](_0x1c9806)){if(!_0x51f14f)return _0x2bfb41['reply'](_0x4c6bb9(0x1ac)+_0x2bfb41[_0x4c6bb9(0x197)]+_0x4c6bb9(0x1b4));try{await _0x2bfb41['React']('🕘');const _0x1ae239='https://api.maher-zubair.tech/ai/txtdetect?q='+encodeURIComponent(_0x51f14f),_0x4d3b62=await _0x5a4ca9[_0x4c6bb9(0x196)](_0x1ae239),_0x27f81f=_0x4d3b62[_0x4c6bb9(0x1a4)];if(_0x27f81f&&_0x27f81f[_0x4c6bb9(0x198)][_0x4c6bb9(0x1a4)][_0x4c6bb9(0x1b1)]){const _0xb31da1=_0x27f81f['result']['data'][_0x4c6bb9(0x1b1)],_0x22e845=_0xb31da1[_0x4c6bb9(0x1a6)](/```([\s\S]*?)```/);if(_0x22e845){const _0x431a70=_0x22e845[0x1];let _0x26bad2=generateWAMessageFromContent(_0x2bfb41[_0x4c6bb9(0x1aa)],{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadata':{},'deviceListMetadataVersion':0x2},'interactiveMessage':proto['Message']['InteractiveMessage'][_0x4c6bb9(0x1a9)]({'body':proto[_0x4c6bb9(0x1a3)][_0x4c6bb9(0x1b6)][_0x4c6bb9(0x19f)]['create']({'text':_0xb31da1}),'footer':proto['Message'][_0x4c6bb9(0x1b6)][_0x4c6bb9(0x1b2)][_0x4c6bb9(0x1a9)]({'text':_0x4c6bb9(0x1c1)}),'header':proto[_0x4c6bb9(0x1a3)][_0x4c6bb9(0x1b6)][_0x4c6bb9(0x1a8)][_0x4c6bb9(0x1a9)]({'title':'','subtitle':'','hasMediaAttachment':![]}),'nativeFlowMessage':proto[_0x4c6bb9(0x1a3)][_0x4c6bb9(0x1b6)][_0x4c6bb9(0x1ab)][_0x4c6bb9(0x1a9)]({'buttons':[{'name':_0x4c6bb9(0x19e),'buttonParamsJson':JSON[_0x4c6bb9(0x1a2)]({'display_text':_0x4c6bb9(0x19c),'id':'copy_code','copy_code':_0x431a70})}]})})}}},{});await _0x152054['relayMessage'](_0x26bad2[_0x4c6bb9(0x1c0)][_0x4c6bb9(0x1af)],_0x26bad2[_0x4c6bb9(0x19b)],{'messageId':_0x26bad2[_0x4c6bb9(0x1c0)]['id']});}else await _0x152054[_0x4c6bb9(0x1c5)](_0x2bfb41[_0x4c6bb9(0x1aa)],{'text':_0xb31da1},{'quoted':_0x2bfb41});await _0x2bfb41[_0x4c6bb9(0x1be)]('✅');}else throw new Error(_0x4c6bb9(0x19a));}catch(_0x10f40c){console[_0x4c6bb9(0x1b9)](_0x4c6bb9(0x1c2),_0x10f40c['message']),_0x2bfb41['reply'](_0x4c6bb9(0x1b8)),await _0x2bfb41[_0x4c6bb9(0x1be)]('❌');}}};export default gptResponse;function _0x4984(){const _0x28882c=['1000128avXUdN','stringify','Message','data','10495704LXQfUr','match','4866530LOyaKz','Header','create','from','NativeFlowMessage','Hello\x20*_','3368doYDpc','6055100MZlScb','remoteJid','5242170hOLWdV','feedback','Footer','7bAGomD','_,*\x0a\x20Gifted\x20Ai\x20Text\x20Detector\x20Here.\x0a\x20Please\x20Ask\x20Me\x20a\x20Question.','body','InteractiveMessage','slice','Error\x20getting\x20response\x20from\x20GPT.','error','55tUoQzm','trim','textdetext','2119728hcmmUu','React','5UJjAwd','key','>\x20>\x20*©𝟐𝟎𝟐𝟒\x20𝐆𝐈𝐅𝐓𝐄𝐃\x20𝐌𝐃\x20𝐕𝟓*','Error\x20getting\x20GPT\x20response:','toLowerCase','startsWith','sendMessage','18lVQNsh','get','pushName','result','177QTIsWW','Invalid\x20response\x20from\x20the\x20GPT\x20API.','message','Copy\x20Your\x20Code','length','cta_copy','Body','split'];_0x4984=function(){return _0x28882c;};return _0x4984();}

/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */