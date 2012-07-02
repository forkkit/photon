define(
  'ephox.photon.demo.Popup',

  [
    'ephox.sugar.api.Css',
    'ephox.sugar.api.Element'
  ],

  function (Css, Element) {

    return function (position) {
      var popup = Element.fromTag('div');
      Css.setAll(popup, {
        position: 'absolute',
        left: position.left(),
        top: position.top(),
        width: 100,
        height: 50,
        'background-color': 'black'
      });
      return popup;
    };
  }
);
