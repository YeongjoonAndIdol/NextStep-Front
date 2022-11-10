type BridgeType = "navigate";

export interface BrowserActionParameters<T> {
  bridge: BridgeType;
  data: T;
}

export const outLink = (link: string) => {
  const windowThis = window as any;
  if (isMobile.any()) {
    if (isMobile.Android()) {
      windowThis.android.bridge.outLink(link);
    } else if (isMobile.iOS()) {
      windowThis.webkit.messageHandlers.outLink.postMessage(link);
    }
  }
};

export const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i) == null ? false : true;
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null
      ? false
      : true;
  },
  any: function () {
    return isMobile.Android() || isMobile.iOS();
  },
};
