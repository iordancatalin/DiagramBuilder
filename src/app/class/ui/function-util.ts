export class FunctionUtil {  public static toggleFullScreen(document, elem): void {    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullScreenElement) {      FunctionUtil.exitFullScreen(document);    } else {      FunctionUtil.enterFullScreen(elem);    }  }  public static exitFullScreen(document): void {    if (document.exitFullscreen) {      document.exitFullscreen();    } else if (document.webkitExitFullscreen) {      document.webkitExitFullscreen();    } else if (document.mozCancelFullScreen) {      document.mozCancelFullScreen();    } else if (document.msExitFullscreen) {      document.msExitFullscreen();    }  }  public static enterFullScreen(elem): void {    if (elem.requestFullscreen) {      elem.requestFullscreen();    } else if (elem.mozRequestFullScreen) {      elem.mozRequestFullScreen();    } else if (elem.webkitRequestFullscreen) {      elem.webkitRequestFullscreen();    } else if (elem.msRequestFullscreen) {      elem.msRequestFullscreen();    }  }}