//下方的事件监听器中的函数是直接写入的匿名函数，如果单独提出来会简洁一些
let developDocMouse=document.getElementById("DeveloperDocument");
console.log(developDocMouse);
developDocMouse.addEventListener('mouseenter',function (event) {
    event.target.style.color = 'rgb(255,111,66)';
  });
  developDocMouse.addEventListener('mouseleave',function (event) {
    event.target.style.color = '';
  });

  let communicationCenterMouse=document.getElementById("CommunicationCenter");
console.log(communicationCenterMouse);
communicationCenterMouse.addEventListener('mouseenter',function (event) {
    event.target.style.color = 'rgb(188,22,133)';
  });
communicationCenterMouse.addEventListener('mouseleave',function (event) {
    event.target.style.color = '';
  });

let serverCenterMouse=document.getElementById("ServerMarket");
let serverCenterMouseList=document.getElementById("ServerMarketList");
let serverCenterMouseTable=document.getElementById("ServerMarketTable")
serverCenterMouse.addEventListener('mouseenter',function (event) {
    event.target.style.color = 'rgb(100,199,250)';
    serverCenterMouseList.style.display='inline-flex';
    });
serverCenterMouse.addEventListener('mouseleave',function (event) {
    event.target.style.color = '';
    });
serverCenterMouseTable.addEventListener('mouseleave',function (event) {
    serverCenterMouseList.style.display = 'none';
    });

let openResourceMouse=document.getElementById("OpenSourceAlliance");
openResourceMouse.addEventListener('mouseenter',function (event) {
        event.target.style.color = 'rgb(22,22,66)';
      });
openResourceMouse.addEventListener('mouseleave',function (event) {
        event.target.style.color = '';
      });

let manageCenterMouse=document.getElementById("manageCenter");
manageCenterMouse.addEventListener('mouseenter',function (event) {
        event.target.style.backgroundColor = 'rgb(66,122,166)';
      });
let manageCenterHtmlMouse=document.getElementById("manageCenterHtml");
manageCenterHtmlMouse.href="/homework_manageCenter.html" 
manageCenterMouse.addEventListener('mouseleave',function (event) {
        event.target.style.backgroundColor = '';
      });

