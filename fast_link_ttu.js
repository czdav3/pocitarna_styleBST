var div = document.getElementsByClassName('content-buttons')[0];
var order = document.getElementsByClassName('std-header clipboard-positioned');
var att = order[0].getAttribute('data-clipboard');
var link = 'https://is.turtlelabstudio.cz/Clients/copyFromOrders/' + att;
var button = document.createElement('A');

button.innerHTML = 'Vložit do želvy';
button.setAttribute('href', link);
button.setAttribute('class', 'csrf-post-js btn btn-md btn-default');
button.setAttribute('target', '_blank');
button.setAttribute('style', 'background-color:#20c997;');
div.appendChild(button);

console.log(div);
