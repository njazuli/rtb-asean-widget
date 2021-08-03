### include this script at the bottom of the page

<script src="https://njazuli.github.io/rtb-asean-widget/rtb-countdown-widget.js?nocache"></script>

### initialize class to load banner

<script>
    var rtbaseanwidget = new RTBCountdownWidget(
    "https://njazuli.github.io/rtb-asean-widget/"
    );
    rtbaseanwidget.loadBanner("banner");
</script>

### include this script at the bottom of the page. This script is important to ensure that the widget follow the browser's responsiveness

<script src="https://njazuli.github.io/rtb-asean-widget/banner/js/iframeResizer.min.js"></script>
<script>
    iFrameResize({
    log: false,
    inPageLinks: true,
    onResized: function (messageData) {},
    onMessage: function (messageData) {},
    });
</script>
