window.serverDomain = ''
window.APIUrl = window.serverDomain && window.serverDomain.trim() != '' ? 'http://' + window.serverDomain + ':7979' : null
window.websocketUrl = window.serverDomain && window.serverDomain.trim() != '' ? 'ws://' + window.serverDomain + ':19092/websocket' : null
window.corsWsocketUrl = window.serverDomain && window.serverDomain.trim() != '' ? 'ws://' + window.serverDomain + ':8742/cors-wx' : null