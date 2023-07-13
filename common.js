(function () {
  window.addEventListener('message', ({ data }) => {
    if (data?.type && data.type == "handleIframeNavigation") {
      const where = parseInt(data?.where)
      window.history.go(where)
    }
  });
})();