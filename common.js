(function () {
  window.addEventListener('message', ({ data }) => {
    console.log("in frame", data)
    const messageData = data.data
    if (messageData?.type && messageData.type == "handleIframeNavigation") {
      const where = parseInt(messageData?.where)
      window.history.go(where)
    }
  });
})();