class RTBCountdownWidget {
  constructor(url) {
    let self = this;
    self.promises = [];
    self.url = url;

    window.rtbcountdownwidget = self;

    this.config = {};
  }

  checkInit() {
    let self = this;

    return Promise.all(self.promises);
  }

  checkWidth() {
    var $window = $(window);
    return $window.width();
  }

  loadBanner(el_id) {
    let self = this;

    this.checkInit().then(() => {
      let el = document.getElementById(el_id);

      if (el == null) {
        el = el_id;
      }

      el.style.width = "100%";
      self.banner = document.createElement("iframe");
      self.banner.style.width = "100%";
      self.banner.style.height = "100%";
      self.banner.style.border = "none";
      self.banner.style.overflowY = "hidden";

      // countdown-widget.html
      self.banner.setAttribute("id", "ifrm");
      self.banner.setAttribute(
        "src",
        self.url + "/banner/countdown-widget.html"
      );
      // self.banner.setAttribute('onload', 'autoResize(this);');

      self.banner.addEventListener("load", function (e) {
        self.banner.contentWindow.postMessage(
          { action: "widgetenddate", data: { date: "2021-10-26 00:00:00" } },
          self.url
        );
      });

      el.prepend(self.banner);
    });
  }

  async loadPage() {
    return await (await fetch("home.html")).text();
  }

  _promiseState(p) {
    const t = {};
    return Promise.race([p, t]).then(
      (v) => (v === t ? "pending" : "fulfilled"),
      () => "rejected"
    );
  }

  receiveMessage(event) {
    console.log("Received Message:", event);

    let self = window.rtbcountdownwidget;
    console.log(self);
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}
