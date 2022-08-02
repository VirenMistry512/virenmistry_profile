/* Add "https://api.ipify.org?format=json" statement
this will communicate with the ipify servers in
order to retrieve the IP address $.getJSON will
load JSON-encoded data from the server using a
GET HTTP request */
$(document).ready(function(){
    // $.getJSON("https://api.ipify.org?format=json", function(data) {
    //     // Setting text of element P with id gfg
    //     console.log(data);
    // })




    // NOTE: window.RTCPeerConnection is "not a constructor" in FF22/23
// var RTCPeerConnection = /*window.RTCPeerConnection ||*/ window.webkitRTCPeerConnection || window.mozRTCPeerConnection;

// if (RTCPeerConnection) (function () {
//     var rtc = new RTCPeerConnection({iceServers:[]});
//     if (1 || window.mozRTCPeerConnection) {      // FF [and now Chrome!] needs a channel/stream to proceed
//         rtc.createDataChannel('', {reliable:false});
//     };
    
//     rtc.onicecandidate = function (evt) {
//         // convert the candidate to SDP so we can run it through our general parser
//         // see https://twitter.com/lancestout/status/525796175425720320 for details
//         if (evt.candidate) grepSDP("a="+evt.candidate.candidate);
//     };
//     rtc.createOffer(function (offerDesc) {
//         grepSDP(offerDesc.sdp);
//         rtc.setLocalDescription(offerDesc);
//     }, function (e) { console.warn("offer failed", e); });
    
    
//     var addrs = Object.create(null);
//     addrs["0.0.0.0"] = false;
//     function updateDisplay(newAddr) {
//         if (newAddr in addrs) return;
//         else addrs[newAddr] = true;
//         var displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
//         console.log(displayAddrs.join(" or perhaps ") || "n/a");
//     }
    
//     function grepSDP(sdp) {
//         var hosts = [];
//         sdp.split('\r\n').forEach(function (line) { // c.f. http://tools.ietf.org/html/rfc4566#page-39
//             if (~line.indexOf("a=candidate")) {     // http://tools.ietf.org/html/rfc4566#section-5.13
//                 var parts = line.split(' '),        // http://tools.ietf.org/html/rfc5245#section-15.1
//                     addr = parts[4],
//                     type = parts[7];
//                 if (type === 'host') updateDisplay(addr);
//             } else if (~line.indexOf("c=")) {       // http://tools.ietf.org/html/rfc4566#section-5.7
//                 var parts = line.split(' '),
//                     addr = parts[2];
//                 updateDisplay(addr);
//             }
//         });
//     }
// })(); else {
//     console.log("<code>ifconfig | grep inet | grep -v inet6 | cut -d\" \" -f2 | tail -n1</code>");
//     console.log("In Chrome and Firefox your IP should display automatically, by the power of WebRTCskull.");
// }



// function showMacAddress() {
//     var obj = new ActiveXObject("WbemScripting.SWbemLocator");
//     var s = obj.ConnectServer(".");
//     var properties = s.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration");
//     var e = new Enumerator(properties);
//     var output=[];
//     // output = '<table border="0" cellPadding="5px" cellSpacing="1px" bgColor="#CCCCCC">';
//     // output = output + '<tr bgColor="#EAEAEA"><td>Caption</td><td>MACAddress</td></tr>';
//     while (!e.atEnd()) {
//         e.moveNext();
//         var p = e.item();
//         if (!p) continue;
//         // output = output + '<tr bgColor="#FFFFFF">';
//         // output = output + '<td>' + p.Caption; +'</td>';
//         // output = output + '<td>' + p.MACAddress + '</td>';
//         // output = output + '</tr>';
//         output.push({"Caption":p.Caption,"MACAddress":p.MACAddress})
//     }
//     // output = output + '</table>';
//     // document.getElementById("box").innerHTML = output;
//     console.table(output);
// }

// showMacAddress();



   
});
