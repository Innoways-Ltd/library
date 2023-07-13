(function () {
  window.addEventListener('message', ({ data }) => {
    console.log("in frame", data)
    if (data?.type && data.type == "handleIframeNavigation") {
      const where = parseInt(data?.where)
      window.history.go(where)
    }
  });
})();