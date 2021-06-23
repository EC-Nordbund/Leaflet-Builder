// plugins/Leaflet.TimeDimension.js
import { Transformation as L_ebd0dafab7c0066d99b114f8fccf5a8ace1456826c65cc32013b25228, transformation as L_0293ef77f15cd9eb053f73aa3b075e5ffd965ac6a703f1a25086f0948, LineUtil as L_266f9147ed443d2edabfdf796926552bf002a2388416eae6084499e18, PolyUtil as L_efef47e3821bccf34ac69951fb64896e23557f14c88fa29a8651e30a8, DomUtil as L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d8, CRS as L_85cd7f8ce301010e22d8224defa25c4d75e48d642d030cba811437478, Projection as L_d8778464af87a645c56302d5525521a2d05ec51be4aafa32531d6da18, LatLng as L_d52b298b451f5520d94fc2e7147c5440944b61d073e465a693369b828, latLng as L_0b56ce4c72e3d6c2f979f6ee370722ee0b456b57372a5cb53dd08a818, LatLngBounds as L_0cbac6d81422a00e2d87eb1ca87081daef2cbf7abb095dec040d16048, latLngBounds as L_0a155777958de74c0e686a888e75fa65b36a7a39929e3e10911b6e5a8, Point as L_c899fa22bd0d675250768a745766be3ba081f8c95a0aab5f31ea549d8, point as L_9d474a0f7fe07343485f2372060a8eeb15adf0d3fc02491a7c577a848, Bounds as L_47f109572aca9aa3b6f67c82276076e7fdb49b06dcd8527e8fbc6b078, bounds as L_ccb506dadd117f17c12bd50e69cbccde659ab004377a5608814ce39d8, Evented as L_eae2154ddb91569f009fbac25b09e1f739c7a7045f40e4dc6e4a174e8, Draggable as L_3c1eb89d427952697b697cb582fb7790b92682bb8da406459b8c5e928, Layer as L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b8, GridLayer as L_38fc076b7b329e6d352621cd95ea4f9fd7e59f649e26c416615dfc8c8, gridLayer as L_d06f44961865bff1911683a51edd32095bf0fdf72a83f26ee64f97328, TileLayer as L_0b1b41a278636456630b44b44676cfcdfc967420129ff80221ae51528, tileLayer as L_1bd4e460f8121a05ea42068d815e6b9078b4a85db871337cc53cfcbb8, ImageOverlay as L_3e7ca3d5e10541b730b051537c743510ed7239a740ac371d33e600218, imageOverlay as L_850159928c8e489de8ebe4a836ac090f7a3a8f61cf56088205bf70168, SVGOverlay as L_7d8ac7c9fbfff1e7c089f0111927f7fd02cfdbb5e33ddeb4a18105238, svgOverlay as L_b389633aac5bf25c98aef3ddcb13bbdcd4b473a6b5ebc7403a8b77e28, VideoOverlay as L_0c8a9f1de4fb7b9da6ec7ac5f142d9178e94f7fb5889db3a800002528, videoOverlay as L_568b5fb300bf40bc260890fc0c969f38ac068f10ec39def59cfd7f998, Path as L_27ab70c442349adc82ee5beec2b48676f78a6c916ef3895ab560d7e78, Polyline as L_fadcbf49b43503e6a04af89998e6469f19f2e4e496735536681f39998, polyline as L_467ddd954f8e511523920796a6df23a82b60bd18cb11e2e7d4d48d568, Polygon as L_64238a40bb66ab22a1df0db2bf90d94df0457cd31127e6bce50673308, polygon as L_bd8a20a1cfb4cdc02b83e1bb8fe720d98b722c0fb92f5a9da76395b58, Rectangle as L_5553aee4e6a692071f00d3af9e3b0012b174d5a53d68b6a28035519f8, rectangle as L_7c3ff5cd48d8a51152161b2f94853f2f0cf5f9f2b725644266af62e58, CircleMarker as L_c1a7b49f62e9e9052833f38cc11a50d4f36142798f3edd0b038203c68, circleMarker as L_3c5f0e992eeb0f31cc13697f60f3f3457221e8c2b7f68492a79f345f8, Class as L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e787356113158, Mixin as L_32af09c03bb0eec2eb529af247f7c7769c029aaeca539eebf7b6448c8, Map as L_d10d0aae5197be376bc45de611fa3a47fcff41585936639651a003868, setOptions as L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e33118, UI as L_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be8, Control as L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe8, control as L_bcb990d7e2300a10dd151103bc92f4a2ed4ef48e7d0e033504da8cff8, DomEvent as L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995818, geoJson as L_5df34d4e45745909e0e7726d5780e16434c2f013b80eb484be7e7a7c8, bind as L_832c078372a67773b87420e48708d10a3f9d3ed373dbf33778ce78b18, extend as L_164aa3682f870cec8843bd5d0811b06b6ec857efcabbdffb3cb6224b8, Util as L_956477de3174c5bcdb8de3b006776efe154801b3b201ba2575a41ae48 } from "leaflet";

// plugins/Leaflet.TimeDimension/src/leaflet.timedimension.js
import { Transformation as L_ebd0dafab7c0066d99b114f8fccf5a8ace1456826c65cc32013b2522, transformation as L_0293ef77f15cd9eb053f73aa3b075e5ffd965ac6a703f1a25086f094, LineUtil as L_266f9147ed443d2edabfdf796926552bf002a2388416eae6084499e1, PolyUtil as L_efef47e3821bccf34ac69951fb64896e23557f14c88fa29a8651e30a, DomUtil as L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d, CRS as L_85cd7f8ce301010e22d8224defa25c4d75e48d642d030cba81143747, Projection as L_d8778464af87a645c56302d5525521a2d05ec51be4aafa32531d6da1, LatLng as L_d52b298b451f5520d94fc2e7147c5440944b61d073e465a693369b82, latLng as L_0b56ce4c72e3d6c2f979f6ee370722ee0b456b57372a5cb53dd08a81, LatLngBounds as L_0cbac6d81422a00e2d87eb1ca87081daef2cbf7abb095dec040d1604, latLngBounds as L_0a155777958de74c0e686a888e75fa65b36a7a39929e3e10911b6e5a, Point as L_c899fa22bd0d675250768a745766be3ba081f8c95a0aab5f31ea549d, point as L_9d474a0f7fe07343485f2372060a8eeb15adf0d3fc02491a7c577a84, Bounds as L_47f109572aca9aa3b6f67c82276076e7fdb49b06dcd8527e8fbc6b07, bounds as L_ccb506dadd117f17c12bd50e69cbccde659ab004377a5608814ce39d, Evented as L_eae2154ddb91569f009fbac25b09e1f739c7a7045f40e4dc6e4a174e, Draggable as L_3c1eb89d427952697b697cb582fb7790b92682bb8da406459b8c5e92, Layer as L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b, GridLayer as L_38fc076b7b329e6d352621cd95ea4f9fd7e59f649e26c416615dfc8c, gridLayer as L_d06f44961865bff1911683a51edd32095bf0fdf72a83f26ee64f9732, TileLayer as L_0b1b41a278636456630b44b44676cfcdfc967420129ff80221ae5152, tileLayer as L_1bd4e460f8121a05ea42068d815e6b9078b4a85db871337cc53cfcbb, ImageOverlay as L_3e7ca3d5e10541b730b051537c743510ed7239a740ac371d33e60021, imageOverlay as L_850159928c8e489de8ebe4a836ac090f7a3a8f61cf56088205bf7016, SVGOverlay as L_7d8ac7c9fbfff1e7c089f0111927f7fd02cfdbb5e33ddeb4a1810523, svgOverlay as L_b389633aac5bf25c98aef3ddcb13bbdcd4b473a6b5ebc7403a8b77e2, VideoOverlay as L_0c8a9f1de4fb7b9da6ec7ac5f142d9178e94f7fb5889db3a80000252, videoOverlay as L_568b5fb300bf40bc260890fc0c969f38ac068f10ec39def59cfd7f99, Path as L_27ab70c442349adc82ee5beec2b48676f78a6c916ef3895ab560d7e7, Polyline as L_fadcbf49b43503e6a04af89998e6469f19f2e4e496735536681f3999, polyline as L_467ddd954f8e511523920796a6df23a82b60bd18cb11e2e7d4d48d56, Polygon as L_64238a40bb66ab22a1df0db2bf90d94df0457cd31127e6bce5067330, polygon as L_bd8a20a1cfb4cdc02b83e1bb8fe720d98b722c0fb92f5a9da76395b5, Rectangle as L_5553aee4e6a692071f00d3af9e3b0012b174d5a53d68b6a28035519f, rectangle as L_7c3ff5cd48d8a51152161b2f94853f2f0cf5f9f2b725644266af62e5, CircleMarker as L_c1a7b49f62e9e9052833f38cc11a50d4f36142798f3edd0b038203c6, circleMarker as L_3c5f0e992eeb0f31cc13697f60f3f3457221e8c2b7f68492a79f345f, Class as L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e78735611315, Mixin as L_32af09c03bb0eec2eb529af247f7c7769c029aaeca539eebf7b6448c, Map as L_d10d0aae5197be376bc45de611fa3a47fcff41585936639651a00386, setOptions as L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e3311, UI as L_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be, Control as L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe, control as L_bcb990d7e2300a10dd151103bc92f4a2ed4ef48e7d0e033504da8cff, DomEvent as L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d99581, geoJson as L_5df34d4e45745909e0e7726d5780e16434c2f013b80eb484be7e7a7c, bind as L_832c078372a67773b87420e48708d10a3f9d3ed373dbf33778ce78b1, extend as L_164aa3682f870cec8843bd5d0811b06b6ec857efcabbdffb3cb6224b, Util as L_956477de3174c5bcdb8de3b006776efe154801b3b201ba2575a41ae4 } from "leaflet";
L.TimeDimension = (L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b || L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e78735611315).extend({
  includes: L_eae2154ddb91569f009fbac25b09e1f739c7a7045f40e4dc6e4a174e || L_32af09c03bb0eec2eb529af247f7c7769c029aaeca539eebf7b6448c.Events,
  initialize: function(options) {
    L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e3311(this, options);
    this._availableTimes = this._generateAvailableTimes();
    this._currentTimeIndex = -1;
    this._loadingTimeIndex = -1;
    this._loadingTimeout = this.options.loadingTimeout || 3e3;
    this._syncedLayers = [];
    if (this._availableTimes.length > 0) {
      this.setCurrentTime(this.options.currentTime || this._getDefaultCurrentTime());
    }
    if (this.options.lowerLimitTime) {
      this.setLowerLimit(this.options.lowerLimitTime);
    }
    if (this.options.upperLimitTime) {
      this.setUpperLimit(this.options.upperLimitTime);
    }
  },
  getAvailableTimes: function() {
    return this._availableTimes;
  },
  getCurrentTimeIndex: function() {
    if (this._currentTimeIndex === -1) {
      return this._availableTimes.length - 1;
    }
    return this._currentTimeIndex;
  },
  getCurrentTime: function() {
    var index = -1;
    if (this._loadingTimeIndex !== -1) {
      index = this._loadingTimeIndex;
    } else {
      index = this.getCurrentTimeIndex();
    }
    if (index >= 0) {
      return this._availableTimes[index];
    } else {
      return null;
    }
  },
  isLoading: function() {
    return this._loadingTimeIndex !== -1;
  },
  setCurrentTimeIndex: function(newIndex) {
    var upperLimit = this._upperLimit || this._availableTimes.length - 1;
    var lowerLimit = this._lowerLimit || 0;
    newIndex = Math.min(Math.max(lowerLimit, newIndex), upperLimit);
    if (newIndex < 0) {
      return;
    }
    this._loadingTimeIndex = newIndex;
    var newTime = this._availableTimes[newIndex];
    console.log("INIT -- Current time: " + new Date(newTime).toISOString());
    if (this._checkSyncedLayersReady(this._availableTimes[this._loadingTimeIndex])) {
      this._newTimeIndexLoaded();
    } else {
      this.fire("timeloading", {
        time: newTime
      });
      setTimeout(function(index) {
        if (index == this._loadingTimeIndex) {
          console.log("Change time for timeout");
          this._newTimeIndexLoaded();
        }
      }.bind(this, newIndex), this._loadingTimeout);
    }
  },
  _newTimeIndexLoaded: function() {
    if (this._loadingTimeIndex === -1) {
      return;
    }
    var time = this._availableTimes[this._loadingTimeIndex];
    console.log("END -- Current time: " + new Date(time).toISOString());
    this._currentTimeIndex = this._loadingTimeIndex;
    this.fire("timeload", {
      time
    });
    this._loadingTimeIndex = -1;
  },
  _checkSyncedLayersReady: function(time) {
    for (var i = 0, len = this._syncedLayers.length; i < len; i++) {
      if (this._syncedLayers[i].isReady) {
        if (!this._syncedLayers[i].isReady(time)) {
          return false;
        }
      }
    }
    return true;
  },
  setCurrentTime: function(time) {
    var newIndex = this._seekNearestTimeIndex(time);
    this.setCurrentTimeIndex(newIndex);
  },
  seekNearestTime: function(time) {
    var index = this._seekNearestTimeIndex(time);
    return this._availableTimes[index];
  },
  nextTime: function(numSteps, loop) {
    if (!numSteps) {
      numSteps = 1;
    }
    var newIndex = this._currentTimeIndex;
    var upperLimit = this._upperLimit || this._availableTimes.length - 1;
    var lowerLimit = this._lowerLimit || 0;
    if (this._loadingTimeIndex > -1) {
      newIndex = this._loadingTimeIndex;
    }
    newIndex = newIndex + numSteps;
    if (newIndex > upperLimit) {
      if (!!loop) {
        newIndex = lowerLimit;
      } else {
        newIndex = upperLimit;
      }
    }
    if (newIndex < lowerLimit) {
      if (!!loop) {
        newIndex = upperLimit;
      } else {
        newIndex = lowerLimit;
      }
    }
    this.setCurrentTimeIndex(newIndex);
  },
  prepareNextTimes: function(numSteps, howmany, loop) {
    if (!numSteps) {
      numSteps = 1;
    }
    var newIndex = this._currentTimeIndex;
    var currentIndex = newIndex;
    if (this._loadingTimeIndex > -1) {
      newIndex = this._loadingTimeIndex;
    }
    for (var i = 0, len = this._syncedLayers.length; i < len; i++) {
      if (this._syncedLayers[i].setMinimumForwardCache) {
        this._syncedLayers[i].setMinimumForwardCache(howmany);
      }
    }
    var count = howmany;
    var upperLimit = this._upperLimit || this._availableTimes.length - 1;
    var lowerLimit = this._lowerLimit || 0;
    while (count > 0) {
      newIndex = newIndex + numSteps;
      if (newIndex > upperLimit) {
        if (!!loop) {
          newIndex = lowerLimit;
        } else {
          break;
        }
      }
      if (newIndex < lowerLimit) {
        if (!!loop) {
          newIndex = upperLimit;
        } else {
          break;
        }
      }
      if (currentIndex === newIndex) {
        break;
      }
      this.fire("timeloading", {
        time: this._availableTimes[newIndex]
      });
      count--;
    }
  },
  getNumberNextTimesReady: function(numSteps, howmany, loop) {
    if (!numSteps) {
      numSteps = 1;
    }
    var newIndex = this._currentTimeIndex;
    if (this._loadingTimeIndex > -1) {
      newIndex = this._loadingTimeIndex;
    }
    var count = howmany;
    var ready = 0;
    var upperLimit = this._upperLimit || this._availableTimes.length - 1;
    var lowerLimit = this._lowerLimit || 0;
    while (count > 0) {
      newIndex = newIndex + numSteps;
      if (newIndex > upperLimit) {
        if (!!loop) {
          newIndex = lowerLimit;
        } else {
          count = 0;
          ready = howmany;
          break;
        }
      }
      if (newIndex < lowerLimit) {
        if (!!loop) {
          newIndex = upperLimit;
        } else {
          count = 0;
          ready = howmany;
          break;
        }
      }
      var time = this._availableTimes[newIndex];
      if (this._checkSyncedLayersReady(time)) {
        ready++;
      }
      count--;
    }
    return ready;
  },
  previousTime: function(numSteps, loop) {
    this.nextTime(numSteps * -1, loop);
  },
  registerSyncedLayer: function(layer) {
    this._syncedLayers.push(layer);
    layer.on("timeload", this._onSyncedLayerLoaded, this);
  },
  unregisterSyncedLayer: function(layer) {
    var index = this._syncedLayers.indexOf(layer);
    if (index != -1) {
      this._syncedLayers.splice(index, 1);
    }
    layer.off("timeload", this._onSyncedLayerLoaded, this);
  },
  _onSyncedLayerLoaded: function(e) {
    if (e.time == this._availableTimes[this._loadingTimeIndex] && this._checkSyncedLayersReady(e.time)) {
      this._newTimeIndexLoaded();
    }
  },
  _generateAvailableTimes: function() {
    if (this.options.times) {
      return L.TimeDimension.Util.parseTimesExpression(this.options.times);
    } else if (this.options.timeInterval) {
      var tiArray = L.TimeDimension.Util.parseTimeInterval(this.options.timeInterval);
      var period = this.options.period || "P1D";
      var validTimeRange = this.options.validTimeRange || void 0;
      return L.TimeDimension.Util.explodeTimeRange(tiArray[0], tiArray[1], period, validTimeRange);
    } else {
      return [];
    }
  },
  _getDefaultCurrentTime: function() {
    var index = this._seekNearestTimeIndex(new Date().getTime());
    return this._availableTimes[index];
  },
  _seekNearestTimeIndex: function(time) {
    var newIndex = 0;
    var len = this._availableTimes.length;
    for (; newIndex < len; newIndex++) {
      if (time < this._availableTimes[newIndex]) {
        break;
      }
    }
    if (newIndex > 0) {
      newIndex--;
    }
    return newIndex;
  },
  setAvailableTimes: function(times, mode) {
    var currentTime = this.getCurrentTime(), lowerLimitTime = this.getLowerLimit(), upperLimitTime = this.getUpperLimit();
    if (mode == "extremes") {
      var period = this.options.period || "P1D";
      this._availableTimes = L.TimeDimension.Util.explodeTimeRange(new Date(times[0]), new Date(times[times.length - 1]), period);
    } else {
      var parsedTimes = L.TimeDimension.Util.parseTimesExpression(times);
      if (this._availableTimes.length === 0) {
        this._availableTimes = parsedTimes;
      } else if (mode == "intersect") {
        this._availableTimes = L.TimeDimension.Util.intersect_arrays(parsedTimes, this._availableTimes);
      } else if (mode == "union") {
        this._availableTimes = L.TimeDimension.Util.union_arrays(parsedTimes, this._availableTimes);
      } else if (mode == "replace") {
        this._availableTimes = parsedTimes;
      } else {
        throw "Merge available times mode not implemented: " + mode;
      }
    }
    if (lowerLimitTime) {
      this.setLowerLimit(lowerLimitTime);
    }
    if (upperLimitTime) {
      this.setUpperLimit(upperLimitTime);
    }
    this.setCurrentTime(currentTime);
    this.fire("availabletimeschanged", {
      availableTimes: this._availableTimes,
      currentTime
    });
    console.log("available times changed");
  },
  getLowerLimit: function() {
    return this._availableTimes[this.getLowerLimitIndex()];
  },
  getUpperLimit: function() {
    return this._availableTimes[this.getUpperLimitIndex()];
  },
  setLowerLimit: function(time) {
    var index = this._seekNearestTimeIndex(time);
    this.setLowerLimitIndex(index);
  },
  setUpperLimit: function(time) {
    var index = this._seekNearestTimeIndex(time);
    this.setUpperLimitIndex(index);
  },
  setLowerLimitIndex: function(index) {
    this._lowerLimit = Math.min(Math.max(index || 0, 0), this._upperLimit || this._availableTimes.length - 1);
    this.fire("limitschanged", {
      lowerLimit: this._lowerLimit,
      upperLimit: this._upperLimit
    });
  },
  setUpperLimitIndex: function(index) {
    this._upperLimit = Math.max(Math.min(index, this._availableTimes.length - 1), this._lowerLimit || 0);
    this.fire("limitschanged", {
      lowerLimit: this._lowerLimit,
      upperLimit: this._upperLimit
    });
  },
  getLowerLimitIndex: function() {
    return this._lowerLimit;
  },
  getUpperLimitIndex: function() {
    return this._upperLimit;
  }
});
L_d10d0aae5197be376bc45de611fa3a47fcff41585936639651a00386.addInitHook(function() {
  if (this.options.timeDimension) {
    this.timeDimension = L.timeDimension(this.options.timeDimensionOptions || {});
  }
});
L.timeDimension = function(options) {
  return new L.TimeDimension(options);
};

// plugins/Leaflet.TimeDimension/src/leaflet.timedimension.control.js
import { Transformation as L_ebd0dafab7c0066d99b114f8fccf5a8ace1456826c65cc32013b25222, transformation as L_0293ef77f15cd9eb053f73aa3b075e5ffd965ac6a703f1a25086f0942, LineUtil as L_266f9147ed443d2edabfdf796926552bf002a2388416eae6084499e12, PolyUtil as L_efef47e3821bccf34ac69951fb64896e23557f14c88fa29a8651e30a2, DomUtil as L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2, CRS as L_85cd7f8ce301010e22d8224defa25c4d75e48d642d030cba811437472, Projection as L_d8778464af87a645c56302d5525521a2d05ec51be4aafa32531d6da12, LatLng as L_d52b298b451f5520d94fc2e7147c5440944b61d073e465a693369b822, latLng as L_0b56ce4c72e3d6c2f979f6ee370722ee0b456b57372a5cb53dd08a812, LatLngBounds as L_0cbac6d81422a00e2d87eb1ca87081daef2cbf7abb095dec040d16042, latLngBounds as L_0a155777958de74c0e686a888e75fa65b36a7a39929e3e10911b6e5a2, Point as L_c899fa22bd0d675250768a745766be3ba081f8c95a0aab5f31ea549d2, point as L_9d474a0f7fe07343485f2372060a8eeb15adf0d3fc02491a7c577a842, Bounds as L_47f109572aca9aa3b6f67c82276076e7fdb49b06dcd8527e8fbc6b072, bounds as L_ccb506dadd117f17c12bd50e69cbccde659ab004377a5608814ce39d2, Evented as L_eae2154ddb91569f009fbac25b09e1f739c7a7045f40e4dc6e4a174e2, Draggable as L_3c1eb89d427952697b697cb582fb7790b92682bb8da406459b8c5e922, Layer as L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b2, GridLayer as L_38fc076b7b329e6d352621cd95ea4f9fd7e59f649e26c416615dfc8c2, gridLayer as L_d06f44961865bff1911683a51edd32095bf0fdf72a83f26ee64f97322, TileLayer as L_0b1b41a278636456630b44b44676cfcdfc967420129ff80221ae51522, tileLayer as L_1bd4e460f8121a05ea42068d815e6b9078b4a85db871337cc53cfcbb2, ImageOverlay as L_3e7ca3d5e10541b730b051537c743510ed7239a740ac371d33e600212, imageOverlay as L_850159928c8e489de8ebe4a836ac090f7a3a8f61cf56088205bf70162, SVGOverlay as L_7d8ac7c9fbfff1e7c089f0111927f7fd02cfdbb5e33ddeb4a18105232, svgOverlay as L_b389633aac5bf25c98aef3ddcb13bbdcd4b473a6b5ebc7403a8b77e22, VideoOverlay as L_0c8a9f1de4fb7b9da6ec7ac5f142d9178e94f7fb5889db3a800002522, videoOverlay as L_568b5fb300bf40bc260890fc0c969f38ac068f10ec39def59cfd7f992, Path as L_27ab70c442349adc82ee5beec2b48676f78a6c916ef3895ab560d7e72, Polyline as L_fadcbf49b43503e6a04af89998e6469f19f2e4e496735536681f39992, polyline as L_467ddd954f8e511523920796a6df23a82b60bd18cb11e2e7d4d48d562, Polygon as L_64238a40bb66ab22a1df0db2bf90d94df0457cd31127e6bce50673302, polygon as L_bd8a20a1cfb4cdc02b83e1bb8fe720d98b722c0fb92f5a9da76395b52, Rectangle as L_5553aee4e6a692071f00d3af9e3b0012b174d5a53d68b6a28035519f2, rectangle as L_7c3ff5cd48d8a51152161b2f94853f2f0cf5f9f2b725644266af62e52, CircleMarker as L_c1a7b49f62e9e9052833f38cc11a50d4f36142798f3edd0b038203c62, circleMarker as L_3c5f0e992eeb0f31cc13697f60f3f3457221e8c2b7f68492a79f345f2, Class as L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e787356113152, Mixin as L_32af09c03bb0eec2eb529af247f7c7769c029aaeca539eebf7b6448c2, Map as L_d10d0aae5197be376bc45de611fa3a47fcff41585936639651a003862, setOptions as L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e33112, UI as L_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be2, Control as L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe2, control as L_bcb990d7e2300a10dd151103bc92f4a2ed4ef48e7d0e033504da8cff2, DomEvent as L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995812, geoJson as L_5df34d4e45745909e0e7726d5780e16434c2f013b80eb484be7e7a7c2, bind as L_832c078372a67773b87420e48708d10a3f9d3ed373dbf33778ce78b12, extend as L_164aa3682f870cec8843bd5d0811b06b6ec857efcabbdffb3cb6224b2, Util as L_956477de3174c5bcdb8de3b006776efe154801b3b201ba2575a41ae42 } from "leaflet";
L_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be2.Knob = L_3c1eb89d427952697b697cb582fb7790b92682bb8da406459b8c5e922.extend({
  options: {
    className: "knob",
    step: 1,
    rangeMin: 0,
    rangeMax: 10
  },
  initialize: function(slider, options) {
    L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e33112(this, options);
    this._element = L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.create("div", this.options.className || "knob", slider);
    L_3c1eb89d427952697b697cb582fb7790b92682bb8da406459b8c5e922.prototype.initialize.call(this, this._element, this._element);
    this._container = slider;
    this.on("predrag", function() {
      this._newPos.y = 0;
      this._newPos.x = this._adjustX(this._newPos.x);
    }, this);
    this.on("dragstart", function() {
      L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(slider, "dragging");
    });
    this.on("dragend", function() {
      L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.removeClass(slider, "dragging");
    });
    L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995812.on(this._element, "dblclick", function(e) {
      this.fire("dblclick", e);
    }, this);
    L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995812.disableClickPropagation(this._element);
    this.enable();
  },
  _getProjectionCoef: function() {
    return (this.options.rangeMax - this.options.rangeMin) / (this._container.offsetWidth || this._container.style.width);
  },
  _update: function() {
    this.setPosition(L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.getPosition(this._element).x);
  },
  _adjustX: function(x) {
    var value = this._toValue(x) || this.getMinValue();
    return this._toX(this._adjustValue(value));
  },
  _adjustValue: function(value) {
    value = Math.max(this.getMinValue(), Math.min(this.getMaxValue(), value));
    value = value - this.options.rangeMin;
    value = Math.round(value / this.options.step) * this.options.step;
    value = value + this.options.rangeMin;
    value = Math.round(value * 100) / 100;
    return value;
  },
  _toX: function(value) {
    var x = (value - this.options.rangeMin) / this._getProjectionCoef();
    return x;
  },
  _toValue: function(x) {
    var v = x * this._getProjectionCoef() + this.options.rangeMin;
    return v;
  },
  getMinValue: function() {
    return this.options.minValue || this.options.rangeMin;
  },
  getMaxValue: function() {
    return this.options.maxValue || this.options.rangeMax;
  },
  setStep: function(step) {
    this.options.step = step;
    this._update();
  },
  setPosition: function(x) {
    L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.setPosition(this._element, L_9d474a0f7fe07343485f2372060a8eeb15adf0d3fc02491a7c577a842(this._adjustX(x), 0));
    this.fire("positionchanged");
  },
  getPosition: function() {
    returnL_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d.getPosition(this._element).x;
  },
  setValue: function(v) {
    this.setPosition(this._toX(v));
  },
  getValue: function() {
    return this._adjustValue(this._toValue(this.getPosition()));
  }
});
L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe2.TimeDimension = L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe2.extend({
  options: {
    styleNS: "leaflet-control-timecontrol",
    position: "bottomleft",
    title: "Time Control",
    backwardButton: true,
    forwardButton: true,
    playButton: true,
    playReverseButton: false,
    loopButton: false,
    displayDate: true,
    timeSlider: true,
    timeSliderDragUpdate: false,
    limitSliders: false,
    limitMinimumRange: 5,
    speedSlider: true,
    minSpeed: 0.1,
    maxSpeed: 10,
    speedStep: 0.1,
    timeSteps: 1,
    autoPlay: false,
    playerOptions: {
      transitionTime: 1e3
    },
    timeZones: ["UTC", "Local"]
  },
  initialize: function(options) {
    L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e33112(options);
    L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe2.prototype.initialize.call(this, options);
    this._timeZoneIndex = 0;
    this._timeDimension = this.options.timeDimension || null;
  },
  onAdd: function(map) {
    var container;
    this._map = map;
    if (!this._timeDimension && map.timeDimension) {
      this._timeDimension = map.timeDimension;
    }
    this._initPlayer();
    container = L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.create("div", "leaflet-bar leaflet-bar-horizontal leaflet-bar-timecontrol");
    if (this.options.backwardButton) {
      this._buttonBackward = this._createButton("Backward", container);
    }
    if (this.options.playReverseButton) {
      this._buttonPlayReversePause = this._createButton("Play Reverse", container);
    }
    if (this.options.playButton) {
      this._buttonPlayPause = this._createButton("Play", container);
    }
    if (this.options.forwardButton) {
      this._buttonForward = this._createButton("Forward", container);
    }
    if (this.options.loopButton) {
      this._buttonLoop = this._createButton("Loop", container);
    }
    if (this.options.displayDate) {
      this._displayDate = this._createButton("Date", container);
    }
    if (this.options.timeSlider) {
      this._sliderTime = this._createSliderTime(this.options.styleNS + " timecontrol-slider timecontrol-dateslider", container);
    }
    if (this.options.speedSlider) {
      this._sliderSpeed = this._createSliderSpeed(this.options.styleNS + " timecontrol-slider timecontrol-speed", container);
    }
    this._steps = this.options.timeSteps || 1;
    this._timeDimension.on("timeload", this._update, this);
    this._timeDimension.on("timeload", this._onPlayerStateChange, this);
    this._timeDimension.on("timeloading", this._onTimeLoading, this);
    this._timeDimension.on("limitschanged availabletimeschanged", this._onTimeLimitsChanged, this);
    L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995812.disableClickPropagation(container);
    return container;
  },
  addTo: function() {
    L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe2.prototype.addTo.apply(this, arguments);
    this._onPlayerStateChange();
    this._onTimeLimitsChanged();
    this._update();
    return this;
  },
  onRemove: function() {
    this._player.off("play stop running loopchange speedchange", this._onPlayerStateChange, this);
    this._player.off("waiting", this._onPlayerWaiting, this);
    this._timeDimension.off("timeload", this._update, this);
    this._timeDimension.off("timeload", this._onPlayerStateChange, this);
    this._timeDimension.off("timeloading", this._onTimeLoading, this);
    this._timeDimension.off("limitschanged availabletimeschanged", this._onTimeLimitsChanged, this);
  },
  _initPlayer: function() {
    if (!this._player) {
      if (this.options.player) {
        this._player = this.options.player;
      } else {
        this._player = new L.TimeDimension.Player(this.options.playerOptions, this._timeDimension);
      }
    }
    if (this.options.autoPlay) {
      this._player.start(this._steps);
    }
    this._player.on("play stop running loopchange speedchange", this._onPlayerStateChange, this);
    this._player.on("waiting", this._onPlayerWaiting, this);
    this._onPlayerStateChange();
  },
  _onTimeLoading: function(data) {
    if (data.time == this._timeDimension.getCurrentTime()) {
      if (this._displayDate) {
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(this._displayDate, "loading");
      }
    }
  },
  _onTimeLimitsChanged: function() {
    var lowerIndex = this._timeDimension.getLowerLimitIndex(), upperIndex = this._timeDimension.getUpperLimitIndex(), max = this._timeDimension.getAvailableTimes().length - 1;
    if (this._limitKnobs) {
      this._limitKnobs[0].options.rangeMax = max;
      this._limitKnobs[1].options.rangeMax = max;
      this._limitKnobs[0].setValue(lowerIndex || 0);
      this._limitKnobs[1].setValue(upperIndex || max);
    }
    if (this._sliderTime) {
      this._sliderTime.options.rangeMax = max;
      this._sliderTime._update();
    }
  },
  _onPlayerWaiting: function(evt) {
    if (this._buttonPlayPause && this._player.getSteps() > 0) {
      L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(this._buttonPlayPause, "loading");
      this._buttonPlayPause.innerHTML = this._getDisplayLoadingText(evt.available, evt.buffer);
    }
    if (this._buttonPlayReversePause && this._player.getSteps() < 0) {
      L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(this._buttonPlayReversePause, "loading");
      this._buttonPlayReversePause.innerHTML = this._getDisplayLoadingText(evt.available, evt.buffer);
    }
  },
  _onPlayerStateChange: function() {
    if (this._buttonPlayPause) {
      if (this._player.isPlaying() && this._player.getSteps() > 0) {
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(this._buttonPlayPause, "pause");
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.removeClass(this._buttonPlayPause, "play");
      } else {
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.removeClass(this._buttonPlayPause, "pause");
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(this._buttonPlayPause, "play");
      }
      if (this._player.isWaiting() && this._player.getSteps() > 0) {
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(this._buttonPlayPause, "loading");
      } else {
        this._buttonPlayPause.innerHTML = "";
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.removeClass(this._buttonPlayPause, "loading");
      }
    }
    if (this._buttonPlayReversePause) {
      if (this._player.isPlaying() && this._player.getSteps() < 0) {
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(this._buttonPlayReversePause, "pause");
      } else {
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.removeClass(this._buttonPlayReversePause, "pause");
      }
      if (this._player.isWaiting() && this._player.getSteps() < 0) {
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(this._buttonPlayReversePause, "loading");
      } else {
        this._buttonPlayReversePause.innerHTML = "";
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.removeClass(this._buttonPlayReversePause, "loading");
      }
    }
    if (this._buttonLoop) {
      if (this._player.isLooped()) {
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(this._buttonLoop, "looped");
      } else {
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.removeClass(this._buttonLoop, "looped");
      }
    }
    if (this._sliderSpeed && !this._draggingSpeed) {
      var speed = this._player.getTransitionTime() || 1e3;
      speed = Math.round(1e4 / speed) / 10;
      this._sliderSpeed.setValue(speed);
    }
  },
  _update: function() {
    if (!this._timeDimension) {
      return;
    }
    if (this._timeDimension.getCurrentTimeIndex() >= 0) {
      var date = new Date(this._timeDimension.getCurrentTime());
      if (this._displayDate) {
        L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.removeClass(this._displayDate, "loading");
        this._displayDate.innerHTML = this._getDisplayDateFormat(date);
      }
      if (this._sliderTime && !this._slidingTimeSlider) {
        this._sliderTime.setValue(this._timeDimension.getCurrentTimeIndex());
      }
    } else {
      if (this._displayDate) {
        this._displayDate.innerHTML = this._getDisplayNoTimeError();
      }
    }
  },
  _createButton: function(title, container) {
    var link = L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.create("a", this.options.styleNS + " timecontrol-" + title.toLowerCase(), container);
    link.href = "#";
    link.title = title;
    L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995812.addListener(link, "click", L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995812.stopPropagation).addListener(link, "click", L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995812.preventDefault).addListener(link, "click", this["_button" + title.replace(/ /i, "") + "Clicked"], this);
    return link;
  },
  _createSliderTime: function(className, container) {
    var sliderContainer, sliderbar, max, knob, limits;
    sliderContainer = L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.create("div", className, container);
    sliderbar = L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.create("div", "slider", sliderContainer);
    max = this._timeDimension.getAvailableTimes().length - 1;
    if (this.options.limitSliders) {
      limits = this._limitKnobs = this._createLimitKnobs(sliderbar);
    }
    knob = newL_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be.Knob(sliderbar, {
      className: "knob main",
      rangeMin: 0,
      rangeMax: max
    });
    knob.on("dragend", function(e) {
      var value = e.target.getValue();
      this._sliderTimeValueChanged(value);
      this._slidingTimeSlider = false;
    }, this);
    knob.on("drag", function(e) {
      this._slidingTimeSlider = true;
      var time = this._timeDimension.getAvailableTimes()[e.target.getValue()];
      if (time) {
        var date = new Date(time);
        if (this._displayDate) {
          this._displayDate.innerHTML = this._getDisplayDateFormat(date);
        }
        if (this.options.timeSliderDragUpdate) {
          this._sliderTimeValueChanged(e.target.getValue());
        }
      }
    }, this);
    knob.on("predrag", function() {
      var minPosition, maxPosition;
      if (limits) {
        minPosition = limits[0].getPosition();
        maxPosition = limits[1].getPosition();
        if (this._newPos.x < minPosition) {
          this._newPos.x = minPosition;
        }
        if (this._newPos.x > maxPosition) {
          this._newPos.x = maxPosition;
        }
      }
    }, knob);
    L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995812.on(sliderbar, "click", function(e) {
      if (L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.hasClass(e.target, "knob")) {
        return;
      }
      var first = e.touches && e.touches.length === 1 ? e.touches[0] : e, x = L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995812.getMousePosition(first, sliderbar).x;
      if (limits) {
        if (limits[0].getPosition() <= x && x <= limits[1].getPosition()) {
          knob.setPosition(x);
          this._sliderTimeValueChanged(knob.getValue());
        }
      } else {
        knob.setPosition(x);
        this._sliderTimeValueChanged(knob.getValue());
      }
    }, this);
    knob.setPosition(0);
    return knob;
  },
  _createLimitKnobs: function(sliderbar) {
    L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(sliderbar, "has-limits");
    var max = this._timeDimension.getAvailableTimes().length - 1;
    var rangeBar = L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.create("div", "range", sliderbar);
    var lknob = newL_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be.Knob(sliderbar, {
      className: "knob lower",
      rangeMin: 0,
      rangeMax: max
    });
    var uknob = newL_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be.Knob(sliderbar, {
      className: "knob upper",
      rangeMin: 0,
      rangeMax: max
    });
    L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.setPosition(rangeBar, 0);
    lknob.setPosition(0);
    uknob.setPosition(max);
    lknob.on("dragend", function(e) {
      var value = e.target.getValue();
      this._sliderLimitsValueChanged(value, uknob.getValue());
    }, this);
    uknob.on("dragend", function(e) {
      var value = e.target.getValue();
      this._sliderLimitsValueChanged(lknob.getValue(), value);
    }, this);
    lknob.on("drag positionchanged", function() {
      L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.setPosition(rangeBar, L_9d474a0f7fe07343485f2372060a8eeb15adf0d3fc02491a7c577a842(lknob.getPosition(), 0));
      rangeBar.style.width = uknob.getPosition() - lknob.getPosition() + "px";
    }, this);
    uknob.on("drag positionchanged", function() {
      rangeBar.style.width = uknob.getPosition() - lknob.getPosition() + "px";
    }, this);
    uknob.on("predrag", function() {
      var lowerPosition = lknob._toX(lknob.getValue() + this.options.limitMinimumRange);
      if (uknob._newPos.x <= lowerPosition) {
        uknob._newPos.x = lowerPosition;
      }
    }, this);
    lknob.on("predrag", function() {
      var upperPosition = uknob._toX(uknob.getValue() - this.options.limitMinimumRange);
      if (lknob._newPos.x >= upperPosition) {
        lknob._newPos.x = upperPosition;
      }
    }, this);
    lknob.on("dblclick", function() {
      this._timeDimension.setLowerLimitIndex(0);
    }, this);
    uknob.on("dblclick", function() {
      this._timeDimension.setUpperLimitIndex(this._timeDimension.getAvailableTimes().length - 1);
    }, this);
    return [lknob, uknob];
  },
  _createSliderSpeed: function(className, container) {
    var sliderContainer = L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.create("div", className, container);
    var speedLabel = L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.create("span", "speed", sliderContainer);
    var sliderbar = L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.create("div", "slider", sliderContainer);
    var initialSpeed = Math.round(1e4 / (this._player.getTransitionTime() || 1e3)) / 10;
    speedLabel.innerHTML = this._getDisplaySpeed(initialSpeed);
    var knob = newL_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be.Knob(sliderbar, {
      step: this.options.speedStep,
      rangeMin: this.options.minSpeed,
      rangeMax: this.options.maxSpeed
    });
    knob.on("dragend", function(e) {
      var value = e.target.getValue();
      this._draggingSpeed = false;
      speedLabel.innerHTML = this._getDisplaySpeed(value);
      this._sliderSpeedValueChanged(value);
    }, this);
    knob.on("drag", function(e) {
      this._draggingSpeed = true;
      speedLabel.innerHTML = this._getDisplaySpeed(e.target.getValue());
    }, this);
    knob.on("positionchanged", function(e) {
      speedLabel.innerHTML = this._getDisplaySpeed(e.target.getValue());
    }, this);
    L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995812.on(sliderbar, "click", function(e) {
      if (e.target === knob._element) {
        return;
      }
      var first = e.touches && e.touches.length === 1 ? e.touches[0] : e, x = L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995812.getMousePosition(first, sliderbar).x;
      knob.setPosition(x);
      speedLabel.innerHTML = this._getDisplaySpeed(knob.getValue());
      this._sliderSpeedValueChanged(knob.getValue());
    }, this);
    return knob;
  },
  _buttonBackwardClicked: function() {
    this._timeDimension.previousTime(this._steps);
  },
  _buttonForwardClicked: function() {
    this._timeDimension.nextTime(this._steps);
  },
  _buttonLoopClicked: function() {
    this._player.setLooped(!this._player.isLooped());
  },
  _buttonPlayClicked: function() {
    if (this._player.isPlaying()) {
      this._player.stop();
    } else {
      this._player.start(this._steps);
    }
  },
  _buttonPlayReverseClicked: function() {
    if (this._player.isPlaying()) {
      this._player.stop();
    } else {
      this._player.start(this._steps * -1);
    }
  },
  _buttonDateClicked: function() {
    this._switchTimeZone();
  },
  _sliderTimeValueChanged: function(newValue) {
    this._timeDimension.setCurrentTimeIndex(newValue);
  },
  _sliderLimitsValueChanged: function(lowerLimit, upperLimit) {
    this._timeDimension.setLowerLimitIndex(lowerLimit);
    this._timeDimension.setUpperLimitIndex(upperLimit);
  },
  _sliderSpeedValueChanged: function(newValue) {
    this._player.setTransitionTime(1e3 / newValue);
  },
  _getCurrentTimeZone: function() {
    return this.options.timeZones[this._timeZoneIndex];
  },
  _switchTimeZone: function() {
    if (this._getCurrentTimeZone().toLowerCase() == "utc") {
      L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.removeClass(this._displayDate, "utc");
    }
    this._timeZoneIndex = (this._timeZoneIndex + 1) % this.options.timeZones.length;
    var timeZone = this._getCurrentTimeZone();
    if (timeZone.toLowerCase() == "utc") {
      L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d2.addClass(this._displayDate, "utc");
      this._displayDate.title = "UTC Time";
    } else if (timeZone.toLowerCase() == "local") {
      this._displayDate.title = "Local Time";
    } else {
      this._displayDate.title = timeZone;
    }
    this._update();
  },
  _getDisplayDateFormat: function(date) {
    var timeZone = this._getCurrentTimeZone();
    if (timeZone.toLowerCase() == "utc") {
      return date.toISOString();
    }
    if (timeZone.toLowerCase() == "local") {
      return date.toLocaleString();
    }
    return date.toLocaleString([], { timeZone, timeZoneName: "short" });
  },
  _getDisplaySpeed: function(fps) {
    return fps + "fps";
  },
  _getDisplayLoadingText: function(available, buffer) {
    return "<span>" + Math.floor(available / buffer * 100) + "%</span>";
  },
  _getDisplayNoTimeError: function() {
    return "Time not available";
  }
});
L_d10d0aae5197be376bc45de611fa3a47fcff41585936639651a003862.addInitHook(function() {
  if (this.options.timeDimensionControl) {
    this.timeDimensionControl = L_bcb990d7e2300a10dd151103bc92f4a2ed4ef48e7d0e033504da8cff2.timeDimension(this.options.timeDimensionControlOptions || {});
    this.addControl(this.timeDimensionControl);
  }
});
L_bcb990d7e2300a10dd151103bc92f4a2ed4ef48e7d0e033504da8cff2.timeDimension = function(options) {
  return newL_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe.TimeDimension(options);
};

// plugins/Leaflet.TimeDimension/src/leaflet.timedimension.util.js
import { Transformation as L_ebd0dafab7c0066d99b114f8fccf5a8ace1456826c65cc32013b25223, transformation as L_0293ef77f15cd9eb053f73aa3b075e5ffd965ac6a703f1a25086f0943, LineUtil as L_266f9147ed443d2edabfdf796926552bf002a2388416eae6084499e13, PolyUtil as L_efef47e3821bccf34ac69951fb64896e23557f14c88fa29a8651e30a3, DomUtil as L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d3, CRS as L_85cd7f8ce301010e22d8224defa25c4d75e48d642d030cba811437473, Projection as L_d8778464af87a645c56302d5525521a2d05ec51be4aafa32531d6da13, LatLng as L_d52b298b451f5520d94fc2e7147c5440944b61d073e465a693369b823, latLng as L_0b56ce4c72e3d6c2f979f6ee370722ee0b456b57372a5cb53dd08a813, LatLngBounds as L_0cbac6d81422a00e2d87eb1ca87081daef2cbf7abb095dec040d16043, latLngBounds as L_0a155777958de74c0e686a888e75fa65b36a7a39929e3e10911b6e5a3, Point as L_c899fa22bd0d675250768a745766be3ba081f8c95a0aab5f31ea549d3, point as L_9d474a0f7fe07343485f2372060a8eeb15adf0d3fc02491a7c577a843, Bounds as L_47f109572aca9aa3b6f67c82276076e7fdb49b06dcd8527e8fbc6b073, bounds as L_ccb506dadd117f17c12bd50e69cbccde659ab004377a5608814ce39d3, Evented as L_eae2154ddb91569f009fbac25b09e1f739c7a7045f40e4dc6e4a174e3, Draggable as L_3c1eb89d427952697b697cb582fb7790b92682bb8da406459b8c5e923, Layer as L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b3, GridLayer as L_38fc076b7b329e6d352621cd95ea4f9fd7e59f649e26c416615dfc8c3, gridLayer as L_d06f44961865bff1911683a51edd32095bf0fdf72a83f26ee64f97323, TileLayer as L_0b1b41a278636456630b44b44676cfcdfc967420129ff80221ae51523, tileLayer as L_1bd4e460f8121a05ea42068d815e6b9078b4a85db871337cc53cfcbb3, ImageOverlay as L_3e7ca3d5e10541b730b051537c743510ed7239a740ac371d33e600213, imageOverlay as L_850159928c8e489de8ebe4a836ac090f7a3a8f61cf56088205bf70163, SVGOverlay as L_7d8ac7c9fbfff1e7c089f0111927f7fd02cfdbb5e33ddeb4a18105233, svgOverlay as L_b389633aac5bf25c98aef3ddcb13bbdcd4b473a6b5ebc7403a8b77e23, VideoOverlay as L_0c8a9f1de4fb7b9da6ec7ac5f142d9178e94f7fb5889db3a800002523, videoOverlay as L_568b5fb300bf40bc260890fc0c969f38ac068f10ec39def59cfd7f993, Path as L_27ab70c442349adc82ee5beec2b48676f78a6c916ef3895ab560d7e73, Polyline as L_fadcbf49b43503e6a04af89998e6469f19f2e4e496735536681f39993, polyline as L_467ddd954f8e511523920796a6df23a82b60bd18cb11e2e7d4d48d563, Polygon as L_64238a40bb66ab22a1df0db2bf90d94df0457cd31127e6bce50673303, polygon as L_bd8a20a1cfb4cdc02b83e1bb8fe720d98b722c0fb92f5a9da76395b53, Rectangle as L_5553aee4e6a692071f00d3af9e3b0012b174d5a53d68b6a28035519f3, rectangle as L_7c3ff5cd48d8a51152161b2f94853f2f0cf5f9f2b725644266af62e53, CircleMarker as L_c1a7b49f62e9e9052833f38cc11a50d4f36142798f3edd0b038203c63, circleMarker as L_3c5f0e992eeb0f31cc13697f60f3f3457221e8c2b7f68492a79f345f3, Class as L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e787356113153, Mixin as L_32af09c03bb0eec2eb529af247f7c7769c029aaeca539eebf7b6448c3, Map as L_d10d0aae5197be376bc45de611fa3a47fcff41585936639651a003863, setOptions as L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e33113, UI as L_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be3, Control as L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe3, control as L_bcb990d7e2300a10dd151103bc92f4a2ed4ef48e7d0e033504da8cff3, DomEvent as L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995813, geoJson as L_5df34d4e45745909e0e7726d5780e16434c2f013b80eb484be7e7a7c3, bind as L_832c078372a67773b87420e48708d10a3f9d3ed373dbf33778ce78b13, extend as L_164aa3682f870cec8843bd5d0811b06b6ec857efcabbdffb3cb6224b3, Util as L_956477de3174c5bcdb8de3b006776efe154801b3b201ba2575a41ae43 } from "leaflet";
L.TimeDimension.Util = {
  getTimeDuration: function(ISODuration) {
    if (typeof nezasa === "undefined") {
      throw "iso8601-js-period library is required for Leatlet.TimeDimension: https://github.com/nezasa/iso8601-js-period";
    }
    return nezasa.iso8601.Period.parse(ISODuration, true);
  },
  addTimeDuration: function(date, duration, utc) {
    if (typeof utc === "undefined") {
      utc = true;
    }
    if (typeof duration == "string" || duration instanceof String) {
      duration = this.getTimeDuration(duration);
    }
    var l = duration.length;
    var get = utc ? "getUTC" : "get";
    var set = utc ? "setUTC" : "set";
    if (l > 0 && duration[0] != 0) {
      date[set + "FullYear"](date[get + "FullYear"]() + duration[0]);
    }
    if (l > 1 && duration[1] != 0) {
      date[set + "Month"](date[get + "Month"]() + duration[1]);
    }
    if (l > 2 && duration[2] != 0) {
      date[set + "Date"](date[get + "Date"]() + duration[2] * 7);
    }
    if (l > 3 && duration[3] != 0) {
      date[set + "Date"](date[get + "Date"]() + duration[3]);
    }
    if (l > 4 && duration[4] != 0) {
      date[set + "Hours"](date[get + "Hours"]() + duration[4]);
    }
    if (l > 5 && duration[5] != 0) {
      date[set + "Minutes"](date[get + "Minutes"]() + duration[5]);
    }
    if (l > 6 && duration[6] != 0) {
      date[set + "Seconds"](date[get + "Seconds"]() + duration[6]);
    }
  },
  subtractTimeDuration: function(date, duration, utc) {
    if (typeof duration == "string" || duration instanceof String) {
      duration = this.getTimeDuration(duration);
    }
    var subDuration = [];
    for (var i = 0, l = duration.length; i < l; i++) {
      subDuration.push(-duration[i]);
    }
    this.addTimeDuration(date, subDuration, utc);
  },
  parseAndExplodeTimeRange: function(timeRange, overwritePeriod) {
    var tr = timeRange.split("/");
    var startTime = new Date(Date.parse(tr[0]));
    var endTime = new Date(Date.parse(tr[1]));
    var period = tr.length > 2 && tr[2].length ? tr[2] : "P1D";
    if (overwritePeriod !== void 0 && overwritePeriod !== null) {
      period = overwritePeriod;
    }
    return this.explodeTimeRange(startTime, endTime, period);
  },
  explodeTimeRange: function(startTime, endTime, ISODuration, validTimeRange) {
    var duration = this.getTimeDuration(ISODuration);
    var result = [];
    var currentTime = new Date(startTime.getTime());
    var minHour = null, minMinutes = null, maxHour = null, maxMinutes = null;
    if (validTimeRange !== void 0) {
      var validTimeRangeArray = validTimeRange.split("/");
      minHour = validTimeRangeArray[0].split(":")[0];
      minMinutes = validTimeRangeArray[0].split(":")[1];
      maxHour = validTimeRangeArray[1].split(":")[0];
      maxMinutes = validTimeRangeArray[1].split(":")[1];
    }
    while (currentTime < endTime) {
      if (validTimeRange === void 0 || currentTime.getUTCHours() >= minHour && currentTime.getUTCHours() <= maxHour) {
        if ((currentTime.getUTCHours() != minHour || currentTime.getUTCMinutes() >= minMinutes) && (currentTime.getUTCHours() != maxHour || currentTime.getUTCMinutes() <= maxMinutes)) {
          result.push(currentTime.getTime());
        }
      }
      this.addTimeDuration(currentTime, duration);
    }
    if (currentTime >= endTime) {
      result.push(endTime.getTime());
    }
    return result;
  },
  parseTimeInterval: function(timeInterval) {
    var parts = timeInterval.split("/");
    if (parts.length != 2) {
      throw "Incorrect ISO9601 TimeInterval: " + timeInterval;
    }
    var startTime = Date.parse(parts[0]);
    var endTime = null;
    var duration = null;
    if (isNaN(startTime)) {
      duration = this.getTimeDuration(parts[0]);
      endTime = Date.parse(parts[1]);
      startTime = new Date(endTime);
      this.subtractTimeDuration(startTime, duration, true);
      endTime = new Date(endTime);
    } else {
      endTime = Date.parse(parts[1]);
      if (isNaN(endTime)) {
        duration = this.getTimeDuration(parts[1]);
        endTime = new Date(startTime);
        this.addTimeDuration(endTime, duration, true);
      } else {
        endTime = new Date(endTime);
      }
      startTime = new Date(startTime);
    }
    return [startTime, endTime];
  },
  parseTimesExpression: function(times, overwritePeriod) {
    var result = [];
    if (!times) {
      return result;
    }
    if (typeof times == "string" || times instanceof String) {
      var timeRanges = times.split(",");
      var timeRange;
      var timeValue;
      for (var i = 0, l = timeRanges.length; i < l; i++) {
        timeRange = timeRanges[i];
        if (timeRange.split("/").length == 3) {
          result = result.concat(this.parseAndExplodeTimeRange(timeRange, overwritePeriod));
        } else {
          timeValue = Date.parse(timeRange);
          if (!isNaN(timeValue)) {
            result.push(timeValue);
          }
        }
      }
    } else {
      result = times;
    }
    return result.sort(function(a, b) {
      return a - b;
    });
  },
  intersect_arrays: function(arrayA, arrayB) {
    var a = arrayA.slice(0);
    var b = arrayB.slice(0);
    var result = [];
    while (a.length > 0 && b.length > 0) {
      if (a[0] < b[0]) {
        a.shift();
      } else if (a[0] > b[0]) {
        b.shift();
      } else {
        result.push(a.shift());
        b.shift();
      }
    }
    return result;
  },
  union_arrays: function(arrayA, arrayB) {
    var a = arrayA.slice(0);
    var b = arrayB.slice(0);
    var result = [];
    while (a.length > 0 && b.length > 0) {
      if (a[0] < b[0]) {
        result.push(a.shift());
      } else if (a[0] > b[0]) {
        result.push(b.shift());
      } else {
        result.push(a.shift());
        b.shift();
      }
    }
    if (a.length > 0) {
      result = result.concat(a);
    } else if (b.length > 0) {
      result = result.concat(b);
    }
    return result;
  },
  sort_and_deduplicate: function(arr) {
    arr = arr.slice(0).sort(function(a, b) {
      return a - b;
    });
    var result = [];
    var last = null;
    for (var i = 0, l = arr.length; i < l; i++) {
      if (arr[i] !== last) {
        result.push(arr[i]);
        last = arr[i];
      }
    }
    return result;
  }
};

// plugins/Leaflet.TimeDimension/src/leaflet.timedimension.layer.js
import { Transformation as L_ebd0dafab7c0066d99b114f8fccf5a8ace1456826c65cc32013b25224, transformation as L_0293ef77f15cd9eb053f73aa3b075e5ffd965ac6a703f1a25086f0944, LineUtil as L_266f9147ed443d2edabfdf796926552bf002a2388416eae6084499e14, PolyUtil as L_efef47e3821bccf34ac69951fb64896e23557f14c88fa29a8651e30a4, DomUtil as L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d4, CRS as L_85cd7f8ce301010e22d8224defa25c4d75e48d642d030cba811437474, Projection as L_d8778464af87a645c56302d5525521a2d05ec51be4aafa32531d6da14, LatLng as L_d52b298b451f5520d94fc2e7147c5440944b61d073e465a693369b824, latLng as L_0b56ce4c72e3d6c2f979f6ee370722ee0b456b57372a5cb53dd08a814, LatLngBounds as L_0cbac6d81422a00e2d87eb1ca87081daef2cbf7abb095dec040d16044, latLngBounds as L_0a155777958de74c0e686a888e75fa65b36a7a39929e3e10911b6e5a4, Point as L_c899fa22bd0d675250768a745766be3ba081f8c95a0aab5f31ea549d4, point as L_9d474a0f7fe07343485f2372060a8eeb15adf0d3fc02491a7c577a844, Bounds as L_47f109572aca9aa3b6f67c82276076e7fdb49b06dcd8527e8fbc6b074, bounds as L_ccb506dadd117f17c12bd50e69cbccde659ab004377a5608814ce39d4, Evented as L_eae2154ddb91569f009fbac25b09e1f739c7a7045f40e4dc6e4a174e4, Draggable as L_3c1eb89d427952697b697cb582fb7790b92682bb8da406459b8c5e924, Layer as L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b4, GridLayer as L_38fc076b7b329e6d352621cd95ea4f9fd7e59f649e26c416615dfc8c4, gridLayer as L_d06f44961865bff1911683a51edd32095bf0fdf72a83f26ee64f97324, TileLayer as L_0b1b41a278636456630b44b44676cfcdfc967420129ff80221ae51524, tileLayer as L_1bd4e460f8121a05ea42068d815e6b9078b4a85db871337cc53cfcbb4, ImageOverlay as L_3e7ca3d5e10541b730b051537c743510ed7239a740ac371d33e600214, imageOverlay as L_850159928c8e489de8ebe4a836ac090f7a3a8f61cf56088205bf70164, SVGOverlay as L_7d8ac7c9fbfff1e7c089f0111927f7fd02cfdbb5e33ddeb4a18105234, svgOverlay as L_b389633aac5bf25c98aef3ddcb13bbdcd4b473a6b5ebc7403a8b77e24, VideoOverlay as L_0c8a9f1de4fb7b9da6ec7ac5f142d9178e94f7fb5889db3a800002524, videoOverlay as L_568b5fb300bf40bc260890fc0c969f38ac068f10ec39def59cfd7f994, Path as L_27ab70c442349adc82ee5beec2b48676f78a6c916ef3895ab560d7e74, Polyline as L_fadcbf49b43503e6a04af89998e6469f19f2e4e496735536681f39994, polyline as L_467ddd954f8e511523920796a6df23a82b60bd18cb11e2e7d4d48d564, Polygon as L_64238a40bb66ab22a1df0db2bf90d94df0457cd31127e6bce50673304, polygon as L_bd8a20a1cfb4cdc02b83e1bb8fe720d98b722c0fb92f5a9da76395b54, Rectangle as L_5553aee4e6a692071f00d3af9e3b0012b174d5a53d68b6a28035519f4, rectangle as L_7c3ff5cd48d8a51152161b2f94853f2f0cf5f9f2b725644266af62e54, CircleMarker as L_c1a7b49f62e9e9052833f38cc11a50d4f36142798f3edd0b038203c64, circleMarker as L_3c5f0e992eeb0f31cc13697f60f3f3457221e8c2b7f68492a79f345f4, Class as L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e787356113154, Mixin as L_32af09c03bb0eec2eb529af247f7c7769c029aaeca539eebf7b6448c4, Map as L_d10d0aae5197be376bc45de611fa3a47fcff41585936639651a003864, setOptions as L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e33114, UI as L_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be4, Control as L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe4, control as L_bcb990d7e2300a10dd151103bc92f4a2ed4ef48e7d0e033504da8cff4, DomEvent as L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995814, geoJson as L_5df34d4e45745909e0e7726d5780e16434c2f013b80eb484be7e7a7c4, bind as L_832c078372a67773b87420e48708d10a3f9d3ed373dbf33778ce78b14, extend as L_164aa3682f870cec8843bd5d0811b06b6ec857efcabbdffb3cb6224b4, Util as L_956477de3174c5bcdb8de3b006776efe154801b3b201ba2575a41ae44 } from "leaflet";
L.TimeDimension.Layer = (L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b4 || L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e787356113154).extend({
  includes: L_eae2154ddb91569f009fbac25b09e1f739c7a7045f40e4dc6e4a174e4 || L_32af09c03bb0eec2eb529af247f7c7769c029aaeca539eebf7b6448c4.Events,
  options: {
    opacity: 1,
    zIndex: 1
  },
  initialize: function(layer, options) {
    L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e33114(this, options || {});
    this._map = null;
    this._baseLayer = layer;
    this._currentLayer = null;
    this._timeDimension = this.options.timeDimension || null;
  },
  addTo: function(map) {
    map.addLayer(this);
    return this;
  },
  onAdd: function(map) {
    this._map = map;
    if (!this._timeDimension && map.timeDimension) {
      this._timeDimension = map.timeDimension;
    }
    this._timeDimension.on("timeloading", this._onNewTimeLoading, this);
    this._timeDimension.on("timeload", this._update, this);
    this._timeDimension.registerSyncedLayer(this);
    this._update();
  },
  onRemove: function(map) {
    this._timeDimension.unregisterSyncedLayer(this);
    this._timeDimension.off("timeloading", this._onNewTimeLoading, this);
    this._timeDimension.off("timeload", this._update, this);
    this.eachLayer(map.removeLayer, map);
    this._map = null;
  },
  eachLayer: function(method, context) {
    method.call(context, this._baseLayer);
    return this;
  },
  setZIndex: function(zIndex) {
    this.options.zIndex = zIndex;
    if (this._baseLayer.setZIndex) {
      this._baseLayer.setZIndex(zIndex);
    }
    if (this._currentLayer && this._currentLayer.setZIndex) {
      this._currentLayer.setZIndex(zIndex);
    }
    return this;
  },
  setOpacity: function(opacity) {
    this.options.opacity = opacity;
    if (this._baseLayer.setOpacity) {
      this._baseLayer.setOpacity(opacity);
    }
    if (this._currentLayer && this._currentLayer.setOpacity) {
      this._currentLayer.setOpacity(opacity);
    }
    return this;
  },
  bringToBack: function() {
    if (!this._currentLayer) {
      return;
    }
    this._currentLayer.bringToBack();
    return this;
  },
  bringToFront: function() {
    if (!this._currentLayer) {
      return;
    }
    this._currentLayer.bringToFront();
    return this;
  },
  _onNewTimeLoading: function(ev) {
    this.fire("timeload", {
      time: ev.time
    });
    return;
  },
  isReady: function(time) {
    return true;
  },
  _update: function() {
    return true;
  },
  getBaseLayer: function() {
    return this._baseLayer;
  },
  getBounds: function() {
    var bounds = newL_0cbac6d81422a00e2d87eb1ca87081daef2cbf7abb095dec040d1604();
    if (this._currentLayer) {
      bounds.extend(this._currentLayer.getBounds ? this._currentLayer.getBounds() : this._currentLayer.getLatLng());
    }
    return bounds;
  }
});
L.timeDimension.layer = function(layer, options) {
  return new L.TimeDimension.Layer(layer, options);
};

// plugins/Leaflet.TimeDimension/src/leaflet.timedimension.layer.geojson.js
import { Transformation as L_ebd0dafab7c0066d99b114f8fccf5a8ace1456826c65cc32013b25225, transformation as L_0293ef77f15cd9eb053f73aa3b075e5ffd965ac6a703f1a25086f0945, LineUtil as L_266f9147ed443d2edabfdf796926552bf002a2388416eae6084499e15, PolyUtil as L_efef47e3821bccf34ac69951fb64896e23557f14c88fa29a8651e30a5, DomUtil as L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d5, CRS as L_85cd7f8ce301010e22d8224defa25c4d75e48d642d030cba811437475, Projection as L_d8778464af87a645c56302d5525521a2d05ec51be4aafa32531d6da15, LatLng as L_d52b298b451f5520d94fc2e7147c5440944b61d073e465a693369b825, latLng as L_0b56ce4c72e3d6c2f979f6ee370722ee0b456b57372a5cb53dd08a815, LatLngBounds as L_0cbac6d81422a00e2d87eb1ca87081daef2cbf7abb095dec040d16045, latLngBounds as L_0a155777958de74c0e686a888e75fa65b36a7a39929e3e10911b6e5a5, Point as L_c899fa22bd0d675250768a745766be3ba081f8c95a0aab5f31ea549d5, point as L_9d474a0f7fe07343485f2372060a8eeb15adf0d3fc02491a7c577a845, Bounds as L_47f109572aca9aa3b6f67c82276076e7fdb49b06dcd8527e8fbc6b075, bounds as L_ccb506dadd117f17c12bd50e69cbccde659ab004377a5608814ce39d5, Evented as L_eae2154ddb91569f009fbac25b09e1f739c7a7045f40e4dc6e4a174e5, Draggable as L_3c1eb89d427952697b697cb582fb7790b92682bb8da406459b8c5e925, Layer as L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b5, GridLayer as L_38fc076b7b329e6d352621cd95ea4f9fd7e59f649e26c416615dfc8c5, gridLayer as L_d06f44961865bff1911683a51edd32095bf0fdf72a83f26ee64f97325, TileLayer as L_0b1b41a278636456630b44b44676cfcdfc967420129ff80221ae51525, tileLayer as L_1bd4e460f8121a05ea42068d815e6b9078b4a85db871337cc53cfcbb5, ImageOverlay as L_3e7ca3d5e10541b730b051537c743510ed7239a740ac371d33e600215, imageOverlay as L_850159928c8e489de8ebe4a836ac090f7a3a8f61cf56088205bf70165, SVGOverlay as L_7d8ac7c9fbfff1e7c089f0111927f7fd02cfdbb5e33ddeb4a18105235, svgOverlay as L_b389633aac5bf25c98aef3ddcb13bbdcd4b473a6b5ebc7403a8b77e25, VideoOverlay as L_0c8a9f1de4fb7b9da6ec7ac5f142d9178e94f7fb5889db3a800002525, videoOverlay as L_568b5fb300bf40bc260890fc0c969f38ac068f10ec39def59cfd7f995, Path as L_27ab70c442349adc82ee5beec2b48676f78a6c916ef3895ab560d7e75, Polyline as L_fadcbf49b43503e6a04af89998e6469f19f2e4e496735536681f39995, polyline as L_467ddd954f8e511523920796a6df23a82b60bd18cb11e2e7d4d48d565, Polygon as L_64238a40bb66ab22a1df0db2bf90d94df0457cd31127e6bce50673305, polygon as L_bd8a20a1cfb4cdc02b83e1bb8fe720d98b722c0fb92f5a9da76395b55, Rectangle as L_5553aee4e6a692071f00d3af9e3b0012b174d5a53d68b6a28035519f5, rectangle as L_7c3ff5cd48d8a51152161b2f94853f2f0cf5f9f2b725644266af62e55, CircleMarker as L_c1a7b49f62e9e9052833f38cc11a50d4f36142798f3edd0b038203c65, circleMarker as L_3c5f0e992eeb0f31cc13697f60f3f3457221e8c2b7f68492a79f345f5, Class as L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e787356113155, Mixin as L_32af09c03bb0eec2eb529af247f7c7769c029aaeca539eebf7b6448c5, Map as L_d10d0aae5197be376bc45de611fa3a47fcff41585936639651a003865, setOptions as L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e33115, UI as L_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be5, Control as L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe5, control as L_bcb990d7e2300a10dd151103bc92f4a2ed4ef48e7d0e033504da8cff5, DomEvent as L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995815, geoJson as L_5df34d4e45745909e0e7726d5780e16434c2f013b80eb484be7e7a7c5, bind as L_832c078372a67773b87420e48708d10a3f9d3ed373dbf33778ce78b15, extend as L_164aa3682f870cec8843bd5d0811b06b6ec857efcabbdffb3cb6224b5, Util as L_956477de3174c5bcdb8de3b006776efe154801b3b201ba2575a41ae45 } from "leaflet";
L.TimeDimension.Layer.GeoJson = L.TimeDimension.Layer.extend({
  initialize: function(layer, options) {
    L.TimeDimension.Layer.prototype.initialize.call(this, layer, options);
    this._updateTimeDimension = this.options.updateTimeDimension || false;
    this._updateTimeDimensionMode = this.options.updateTimeDimensionMode || "extremes";
    this._duration = this.options.duration || null;
    this._addlastPoint = this.options.addlastPoint || false;
    this._waitForReady = this.options.waitForReady || false;
    this._updateCurrentTime = this.options.updateCurrentTime || this._updateTimeDimension;
    this._availableTimes = [];
    this._loaded = false;
    if (this._baseLayer.getLayers().length == 0) {
      if (this._waitForReady) {
        this._baseLayer.on("ready", this._onReadyBaseLayer, this);
      } else {
        this._loaded = true;
      }
    } else {
      this._loaded = true;
      this._setAvailableTimes();
    }
    this._baseLayer.on("layeradd", function() {
      if (this._loaded) {
        this._setAvailableTimes();
      }
    }.bind(this));
  },
  onAdd: function(map) {
    L.TimeDimension.Layer.prototype.onAdd.call(this, map);
    if (this._loaded) {
      this._setAvailableTimes();
    }
  },
  eachLayer: function(method, context) {
    if (this._currentLayer) {
      method.call(context, this._currentLayer);
    }
    return L.TimeDimension.Layer.prototype.eachLayer.call(this, method, context);
  },
  isReady: function(time) {
    return this._loaded;
  },
  _update: function() {
    if (!this._map)
      return;
    if (!this._loaded) {
      return;
    }
    var time = this._timeDimension.getCurrentTime();
    var maxTime = this._timeDimension.getCurrentTime(), minTime = 0;
    if (this._duration) {
      var date = new Date(maxTime);
      L.TimeDimension.Util.subtractTimeDuration(date, this._duration, true);
      minTime = date.getTime();
    }
    var layer = L_5df34d4e45745909e0e7726d5780e16434c2f013b80eb484be7e7a7c5(null, this._baseLayer.options);
    var layers = this._baseLayer.getLayers();
    for (var i = 0, l = layers.length; i < l; i++) {
      var feature = this._getFeatureBetweenDates(layers[i].feature, minTime, maxTime);
      if (feature) {
        layer.addData(feature);
        if (this._addlastPoint && feature.geometry.type == "LineString") {
          if (feature.geometry.coordinates.length > 0) {
            var properties = feature.properties;
            properties.last = true;
            layer.addData({
              type: "Feature",
              properties,
              geometry: {
                type: "Point",
                coordinates: feature.geometry.coordinates[feature.geometry.coordinates.length - 1]
              }
            });
          }
        }
      }
    }
    if (this._currentLayer) {
      this._map.removeLayer(this._currentLayer);
    }
    if (layer.getLayers().length) {
      layer.addTo(this._map);
      this._currentLayer = layer;
    }
  },
  _setAvailableTimes: function() {
    var times = [];
    var layers = this._baseLayer.getLayers();
    for (var i = 0, l = layers.length; i < l; i++) {
      if (layers[i].feature) {
        var featureTimes = this._getFeatureTimes(layers[i].feature);
        for (var j = 0, m = featureTimes.length; j < m; j++) {
          times.push(featureTimes[j]);
        }
      }
    }
    this._availableTimes = L.TimeDimension.Util.sort_and_deduplicate(times);
    this._updateCurrentTime = this._updateCurrentTime || this._timeDimension && this._timeDimension.getAvailableTimes().length == 0;
    if (this._timeDimension && (this._updateTimeDimension || this._timeDimension.getAvailableTimes().length == 0)) {
      this._timeDimension.setAvailableTimes(this._availableTimes, this._updateTimeDimensionMode);
    }
    if (this._updateCurrentTime && this._timeDimension && this._availableTimes.length) {
      this._timeDimension.setCurrentTime(this._availableTimes[0]);
    }
  },
  _getFeatureTimes: function(feature) {
    if (!feature.featureTimes) {
      if (!feature.properties) {
        feature.featureTimes = [];
      } else if (feature.properties.hasOwnProperty("coordTimes")) {
        feature.featureTimes = feature.properties.coordTimes;
      } else if (feature.properties.hasOwnProperty("times")) {
        feature.featureTimes = feature.properties.times;
      } else if (feature.properties.hasOwnProperty("linestringTimestamps")) {
        feature.featureTimes = feature.properties.linestringTimestamps;
      } else if (feature.properties.hasOwnProperty("time")) {
        feature.featureTimes = [feature.properties.time];
      } else {
        feature.featureTimes = [];
      }
      for (var i = 0, l = feature.featureTimes.length; i < l; i++) {
        var time = feature.featureTimes[i];
        if (typeof time == "string" || time instanceof String) {
          time = Date.parse(time.trim());
          feature.featureTimes[i] = time;
        }
      }
    }
    return feature.featureTimes;
  },
  _getFeatureBetweenDates: function(feature, minTime, maxTime) {
    var featureTimes = this._getFeatureTimes(feature);
    if (featureTimes.length == 0) {
      return feature;
    }
    var index_min = null, index_max = null, l = featureTimes.length;
    if (featureTimes[0] > maxTime || featureTimes[l - 1] < minTime) {
      return null;
    }
    if (featureTimes[l - 1] > minTime) {
      for (var i = 0; i < l; i++) {
        if (index_min === null && featureTimes[i] > minTime) {
          index_min = i;
        }
        if (featureTimes[i] > maxTime) {
          index_max = i;
          break;
        }
      }
    }
    if (index_min === null) {
      index_min = 0;
    }
    if (index_max === null) {
      index_max = l;
    }
    var new_coordinates = [];
    if (feature.geometry.coordinates[0].length) {
      new_coordinates = feature.geometry.coordinates.slice(index_min, index_max);
    } else {
      new_coordinates = feature.geometry.coordinates;
    }
    return {
      type: "Feature",
      properties: feature.properties,
      geometry: {
        type: feature.geometry.type,
        coordinates: new_coordinates
      }
    };
  },
  _onReadyBaseLayer: function() {
    this._loaded = true;
    this._setAvailableTimes();
    this._update();
  }
});
L.timeDimension.layer.geoJson = function(layer, options) {
  return new L.TimeDimension.Layer.GeoJson(layer, options);
};

// plugins/Leaflet.TimeDimension/src/leaflet.timedimension.layer.wms.js
import { Transformation as L_ebd0dafab7c0066d99b114f8fccf5a8ace1456826c65cc32013b25226, transformation as L_0293ef77f15cd9eb053f73aa3b075e5ffd965ac6a703f1a25086f0946, LineUtil as L_266f9147ed443d2edabfdf796926552bf002a2388416eae6084499e16, PolyUtil as L_efef47e3821bccf34ac69951fb64896e23557f14c88fa29a8651e30a6, DomUtil as L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d6, CRS as L_85cd7f8ce301010e22d8224defa25c4d75e48d642d030cba811437476, Projection as L_d8778464af87a645c56302d5525521a2d05ec51be4aafa32531d6da16, LatLng as L_d52b298b451f5520d94fc2e7147c5440944b61d073e465a693369b826, latLng as L_0b56ce4c72e3d6c2f979f6ee370722ee0b456b57372a5cb53dd08a816, LatLngBounds as L_0cbac6d81422a00e2d87eb1ca87081daef2cbf7abb095dec040d16046, latLngBounds as L_0a155777958de74c0e686a888e75fa65b36a7a39929e3e10911b6e5a6, Point as L_c899fa22bd0d675250768a745766be3ba081f8c95a0aab5f31ea549d6, point as L_9d474a0f7fe07343485f2372060a8eeb15adf0d3fc02491a7c577a846, Bounds as L_47f109572aca9aa3b6f67c82276076e7fdb49b06dcd8527e8fbc6b076, bounds as L_ccb506dadd117f17c12bd50e69cbccde659ab004377a5608814ce39d6, Evented as L_eae2154ddb91569f009fbac25b09e1f739c7a7045f40e4dc6e4a174e6, Draggable as L_3c1eb89d427952697b697cb582fb7790b92682bb8da406459b8c5e926, Layer as L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b6, GridLayer as L_38fc076b7b329e6d352621cd95ea4f9fd7e59f649e26c416615dfc8c6, gridLayer as L_d06f44961865bff1911683a51edd32095bf0fdf72a83f26ee64f97326, TileLayer as L_0b1b41a278636456630b44b44676cfcdfc967420129ff80221ae51526, tileLayer as L_1bd4e460f8121a05ea42068d815e6b9078b4a85db871337cc53cfcbb6, ImageOverlay as L_3e7ca3d5e10541b730b051537c743510ed7239a740ac371d33e600216, imageOverlay as L_850159928c8e489de8ebe4a836ac090f7a3a8f61cf56088205bf70166, SVGOverlay as L_7d8ac7c9fbfff1e7c089f0111927f7fd02cfdbb5e33ddeb4a18105236, svgOverlay as L_b389633aac5bf25c98aef3ddcb13bbdcd4b473a6b5ebc7403a8b77e26, VideoOverlay as L_0c8a9f1de4fb7b9da6ec7ac5f142d9178e94f7fb5889db3a800002526, videoOverlay as L_568b5fb300bf40bc260890fc0c969f38ac068f10ec39def59cfd7f996, Path as L_27ab70c442349adc82ee5beec2b48676f78a6c916ef3895ab560d7e76, Polyline as L_fadcbf49b43503e6a04af89998e6469f19f2e4e496735536681f39996, polyline as L_467ddd954f8e511523920796a6df23a82b60bd18cb11e2e7d4d48d566, Polygon as L_64238a40bb66ab22a1df0db2bf90d94df0457cd31127e6bce50673306, polygon as L_bd8a20a1cfb4cdc02b83e1bb8fe720d98b722c0fb92f5a9da76395b56, Rectangle as L_5553aee4e6a692071f00d3af9e3b0012b174d5a53d68b6a28035519f6, rectangle as L_7c3ff5cd48d8a51152161b2f94853f2f0cf5f9f2b725644266af62e56, CircleMarker as L_c1a7b49f62e9e9052833f38cc11a50d4f36142798f3edd0b038203c66, circleMarker as L_3c5f0e992eeb0f31cc13697f60f3f3457221e8c2b7f68492a79f345f6, Class as L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e787356113156, Mixin as L_32af09c03bb0eec2eb529af247f7c7769c029aaeca539eebf7b6448c6, Map as L_d10d0aae5197be376bc45de611fa3a47fcff41585936639651a003866, setOptions as L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e33116, UI as L_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be6, Control as L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe6, control as L_bcb990d7e2300a10dd151103bc92f4a2ed4ef48e7d0e033504da8cff6, DomEvent as L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995816, geoJson as L_5df34d4e45745909e0e7726d5780e16434c2f013b80eb484be7e7a7c6, bind as L_832c078372a67773b87420e48708d10a3f9d3ed373dbf33778ce78b16, extend as L_164aa3682f870cec8843bd5d0811b06b6ec857efcabbdffb3cb6224b6, Util as L_956477de3174c5bcdb8de3b006776efe154801b3b201ba2575a41ae46 } from "leaflet";
L.TimeDimension.Layer.WMS = L.TimeDimension.Layer.extend({
  initialize: function(layer, options) {
    L.TimeDimension.Layer.prototype.initialize.call(this, layer, options);
    this._timeCacheBackward = this.options.cacheBackward || this.options.cache || 0;
    this._timeCacheForward = this.options.cacheForward || this.options.cache || 0;
    this._wmsVersion = this.options.wmsVersion || this.options.version || layer.options.version || "1.1.1";
    this._getCapabilitiesParams = this.options.getCapabilitiesParams || {};
    this._getCapabilitiesAlternateUrl = this.options.getCapabilitiesUrl || null;
    this._getCapabilitiesAlternateLayerName = this.options.getCapabilitiesLayerName || null;
    this._proxy = this.options.proxy || null;
    this._updateTimeDimension = this.options.updateTimeDimension || false;
    this._setDefaultTime = this.options.setDefaultTime || false;
    this._updateTimeDimensionMode = this.options.updateTimeDimensionMode || "intersect";
    this._period = this.options.period || null;
    this._layers = {};
    this._defaultTime = 0;
    this._availableTimes = [];
    this._capabilitiesRequested = false;
    if (this._updateTimeDimension || this.options.requestTimeFromCapabilities) {
      this._requestTimeDimensionFromCapabilities();
    }
    this._baseLayer.on("load", function() {
      this._baseLayer.setLoaded(true);
      this.fire("timeload", {
        time: this._defaultTime
      });
    }.bind(this));
  },
  getEvents: function() {
    var clearCache = L_832c078372a67773b87420e48708d10a3f9d3ed373dbf33778ce78b16(this._unvalidateCache, this);
    return {
      moveend: clearCache,
      zoomend: clearCache
    };
  },
  eachLayer: function(method, context) {
    for (var prop in this._layers) {
      if (this._layers.hasOwnProperty(prop)) {
        method.call(context, this._layers[prop]);
      }
    }
    return L.TimeDimension.Layer.prototype.eachLayer.call(this, method, context);
  },
  _onNewTimeLoading: function(ev) {
    var layer = this._getLayerForTime(ev.time);
    if (!this._map.hasLayer(layer)) {
      this._map.addLayer(layer);
    }
  },
  isReady: function(time) {
    var layer = this._getLayerForTime(time);
    if (this.options.bounds && this._map) {
      if (!this._map.getBounds().contains(this.options.bounds))
        return true;
    }
    return layer.isLoaded();
  },
  onAdd: function(map) {
    L.TimeDimension.Layer.prototype.onAdd.call(this, map);
    if (this._availableTimes.length == 0) {
      this._requestTimeDimensionFromCapabilities();
    } else {
      this._updateTimeDimensionAvailableTimes();
    }
  },
  _update: function() {
    if (!this._map)
      return;
    var time = this._timeDimension.getCurrentTime();
    var layer = this._getLayerForTime(time);
    if (this._currentLayer == null) {
      this._currentLayer = layer;
    }
    if (!this._map.hasLayer(layer)) {
      this._map.addLayer(layer);
    } else {
      this._showLayer(layer, time);
    }
  },
  setOpacity: function(opacity) {
    L.TimeDimension.Layer.prototype.setOpacity.apply(this, arguments);
    for (var prop in this._layers) {
      if (this._layers.hasOwnProperty(prop) && this._layers[prop].setOpacity) {
        this._layers[prop].setOpacity(opacity);
      }
    }
  },
  setZIndex: function(zIndex) {
    L.TimeDimension.Layer.prototype.setZIndex.apply(this, arguments);
    for (var prop in this._layers) {
      if (this._layers.hasOwnProperty(prop) && this._layers[prop].setZIndex) {
        this._layers[prop].setZIndex(zIndex);
      }
    }
  },
  setParams: function(params, noRedraw) {
    L_164aa3682f870cec8843bd5d0811b06b6ec857efcabbdffb3cb6224b6(this._baseLayer.options, params);
    if (this._baseLayer.setParams) {
      this._baseLayer.setParams(params, noRedraw);
    }
    for (var prop in this._layers) {
      if (this._layers.hasOwnProperty(prop) && this._layers[prop].setParams) {
        this._layers[prop].setLoaded(false);
        this._layers[prop].setParams(params, noRedraw);
      }
    }
    return this;
  },
  _unvalidateCache: function() {
    var time = this._timeDimension.getCurrentTime();
    for (var prop in this._layers) {
      if (time != prop && this._layers.hasOwnProperty(prop)) {
        this._layers[prop].setLoaded(false);
        this._layers[prop].redraw();
      }
    }
  },
  _evictCachedTimes: function(keepforward, keepbackward) {
    var times = this._getLoadedTimes();
    var strTime = String(this._currentTime);
    var index = times.indexOf(strTime);
    var remove = [];
    if (keepbackward > -1) {
      var objectsToRemove = index - keepbackward;
      if (objectsToRemove > 0) {
        remove = times.splice(0, objectsToRemove);
        this._removeLayers(remove);
      }
    }
    if (keepforward > -1) {
      index = times.indexOf(strTime);
      var objectsToRemove = times.length - index - keepforward - 1;
      if (objectsToRemove > 0) {
        remove = times.splice(index + keepforward + 1, objectsToRemove);
        this._removeLayers(remove);
      }
    }
  },
  _showLayer: function(layer, time) {
    if (this._currentLayer && this._currentLayer !== layer) {
      this._currentLayer.hide();
    }
    layer.show();
    if (this._currentLayer && this._currentLayer === layer) {
      return;
    }
    this._currentLayer = layer;
    this._currentTime = time;
    console.log("Show layer " + layer.wmsParams.layers + " with time: " + new Date(time).toISOString());
    this._evictCachedTimes(this._timeCacheForward, this._timeCacheBackward);
  },
  _getLayerForTime: function(time) {
    if (time == 0 || time == this._defaultTime || time == null) {
      return this._baseLayer;
    }
    if (this._layers.hasOwnProperty(time)) {
      return this._layers[time];
    }
    var nearestTime = this._getNearestTime(time);
    if (this._layers.hasOwnProperty(nearestTime)) {
      return this._layers[nearestTime];
    }
    var newLayer = this._createLayerForTime(nearestTime);
    this._layers[time] = newLayer;
    newLayer.on("load", function(layer, time2) {
      layer.setLoaded(true);
      if (!this._layers[time2]) {
        this._layers[time2] = layer;
      }
      if (this._timeDimension && time2 == this._timeDimension.getCurrentTime() && !this._timeDimension.isLoading()) {
        this._showLayer(layer, time2);
      }
      this.fire("timeload", {
        time: time2
      });
    }.bind(this, newLayer, time));
    newLayer.onAdd = function(map) {
      Object.getPrototypeOf(this).onAdd.call(this, map);
      this.hide();
    }.bind(newLayer);
    return newLayer;
  },
  _createLayerForTime: function(time) {
    var wmsParams = this._baseLayer.options;
    wmsParams.time = new Date(time).toISOString();
    return new this._baseLayer.constructor(this._baseLayer.getURL(), wmsParams);
  },
  _getLoadedTimes: function() {
    var result = [];
    for (var prop in this._layers) {
      if (this._layers.hasOwnProperty(prop)) {
        result.push(prop);
      }
    }
    return result.sort(function(a, b) {
      return a - b;
    });
  },
  _removeLayers: function(times) {
    for (var i = 0, l = times.length; i < l; i++) {
      if (this._map)
        this._map.removeLayer(this._layers[times[i]]);
      delete this._layers[times[i]];
    }
  },
  setMinimumForwardCache: function(value) {
    if (value > this._timeCacheForward) {
      this._timeCacheForward = value;
    }
  },
  _requestTimeDimensionFromCapabilities: function() {
    if (this._capabilitiesRequested) {
      return;
    }
    this._capabilitiesRequested = true;
    var url = this._getCapabilitiesUrl();
    if (this._proxy) {
      url = this._proxy + "?url=" + encodeURIComponent(url);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function(xhr) {
      var data = xhr.currentTarget.responseXML;
      if (data !== null) {
        this._defaultTime = Date.parse(this._getDefaultTimeFromCapabilities(data));
        this._setDefaultTime = this._setDefaultTime || this._timeDimension && this._timeDimension.getAvailableTimes().length == 0;
        this.setAvailableTimes(this._parseTimeDimensionFromCapabilities(data));
        if (this._setDefaultTime && this._timeDimension) {
          this._timeDimension.setCurrentTime(this._defaultTime);
        }
      }
    }.bind(this));
    oReq.overrideMimeType("application/xml");
    oReq.open("GET", url);
    oReq.send();
  },
  _getCapabilitiesUrl: function() {
    var url = this._baseLayer.getURL();
    if (this._getCapabilitiesAlternateUrl)
      url = this._getCapabilitiesAlternateUrl;
    var params = L_164aa3682f870cec8843bd5d0811b06b6ec857efcabbdffb3cb6224b6({}, this._getCapabilitiesParams, {
      "request": "GetCapabilities",
      "service": "WMS",
      "version": this._wmsVersion
    });
    url = url + L_956477de3174c5bcdb8de3b006776efe154801b3b201ba2575a41ae46.getParamString(params, url, params.uppercase);
    return url;
  },
  _parseTimeDimensionFromCapabilities: function(xml) {
    var layers = xml.querySelectorAll('Layer[queryable="1"]');
    var layerName = this._baseLayer.wmsParams.layers;
    var layer = null;
    var times = null;
    layers.forEach(function(current) {
      if (current.querySelector("Name").innerHTML === layerName) {
        layer = current;
      }
    });
    if (layer) {
      times = this._getTimesFromLayerCapabilities(layer);
      if (!times) {
        times = this._getTimesFromLayerCapabilities(layer.parentNode);
      }
    }
    return times;
  },
  _getTimesFromLayerCapabilities: function(layer) {
    var times = null;
    var nodes = layer.children;
    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeName !== "Extent" && nodes[i].nodeName !== "Dimension")
        continue;
      if (nodes[i].getAttribute("name") !== "time")
        continue;
      if (!nodes[i].textContent.length)
        continue;
      times = nodes[i].textContent.trim();
      break;
    }
    return times;
  },
  _getDefaultTimeFromCapabilities: function(xml) {
    var layers = xml.querySelectorAll('Layer[queryable="1"]');
    var layerName = this._baseLayer.wmsParams.layers;
    var layer = null;
    layers.forEach(function(current) {
      if (current.querySelector("Name").innerHTML === layerName) {
        layer = current;
      }
    });
    var defaultTime = 0;
    if (layer) {
      defaultTime = this._getDefaultTimeFromLayerCapabilities(layer);
      if (defaultTime == 0) {
        defaultTime = this._getDefaultTimeFromLayerCapabilities(layer.parentNode);
      }
    }
    return defaultTime;
  },
  _getDefaultTimeFromLayerCapabilities: function(layer) {
    var defaultTime = 0;
    var nodes = layer.children;
    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeName !== "Extent" && nodes[i].nodeName !== "Dimension")
        continue;
      if (nodes[i].getAttribute("name") !== "time")
        continue;
      if (!nodes[i].attributes.default)
        continue;
      if (!nodes[i].attributes.default.textContent.length)
        continue;
      defaultTime = nodes[i].attributes.default.textContent.trim();
      break;
    }
    return defaultTime;
  },
  setAvailableTimes: function(times) {
    this._availableTimes = L.TimeDimension.Util.parseTimesExpression(times, this._period);
    this._updateTimeDimensionAvailableTimes();
  },
  _updateTimeDimensionAvailableTimes: function() {
    if (this._timeDimension && this._updateTimeDimension || this._timeDimension && this._timeDimension.getAvailableTimes().length == 0) {
      this._timeDimension.setAvailableTimes(this._availableTimes, this._updateTimeDimensionMode);
      if (this._setDefaultTime && this._defaultTime > 0) {
        this._timeDimension.setCurrentTime(this._defaultTime);
      }
    }
  },
  _getNearestTime: function(time) {
    if (this._layers.hasOwnProperty(time)) {
      return time;
    }
    if (this._availableTimes.length == 0) {
      return time;
    }
    var index = 0;
    var len = this._availableTimes.length;
    for (; index < len; index++) {
      if (time < this._availableTimes[index]) {
        break;
      }
    }
    if (index > 0) {
      index--;
    }
    if (time != this._availableTimes[index]) {
      console.log("Search layer time: " + new Date(time).toISOString());
      console.log("Return layer time: " + new Date(this._availableTimes[index]).toISOString());
    }
    return this._availableTimes[index];
  }
});
if (!L.NonTiledLayer) {
  L.NonTiledLayer = (L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b6 || L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e787356113156).extend({});
}
L.NonTiledLayer.include({
  _visible: true,
  _loaded: false,
  _originalUpdate: L.NonTiledLayer.prototype._update,
  _originalOnRemove: L.NonTiledLayer.prototype.onRemove,
  _update: function() {
    if (!this._visible && this._loaded) {
      return;
    }
    this._originalUpdate();
  },
  onRemove: function(map) {
    this._loaded = false;
    this._originalOnRemove(map);
  },
  setLoaded: function(loaded) {
    this._loaded = loaded;
  },
  isLoaded: function() {
    return this._loaded;
  },
  hide: function() {
    this._visible = false;
    this._div.style.display = "none";
  },
  show: function() {
    this._visible = true;
    this._div.style.display = "block";
  },
  getURL: function() {
    return this._wmsUrl;
  }
});
L_0b1b41a278636456630b44b44676cfcdfc967420129ff80221ae51526.include({
  _visible: true,
  _loaded: false,
  _originalUpdate: L_0b1b41a278636456630b44b44676cfcdfc967420129ff80221ae51526.prototype._update,
  _update: function() {
    if (!this._visible && this._loaded) {
      return;
    }
    this._originalUpdate();
  },
  setLoaded: function(loaded) {
    this._loaded = loaded;
  },
  isLoaded: function() {
    return this._loaded;
  },
  hide: function() {
    this._visible = false;
    if (this._container) {
      this._container.style.display = "none";
    }
  },
  show: function() {
    this._visible = true;
    if (this._container) {
      this._container.style.display = "block";
    }
  },
  getURL: function() {
    return this._url;
  }
});
L.timeDimension.layer.wms = function(layer, options) {
  return new L.TimeDimension.Layer.WMS(layer, options);
};

// plugins/Leaflet.TimeDimension/src/leaflet.timedimension.player.js
import { Transformation as L_ebd0dafab7c0066d99b114f8fccf5a8ace1456826c65cc32013b25227, transformation as L_0293ef77f15cd9eb053f73aa3b075e5ffd965ac6a703f1a25086f0947, LineUtil as L_266f9147ed443d2edabfdf796926552bf002a2388416eae6084499e17, PolyUtil as L_efef47e3821bccf34ac69951fb64896e23557f14c88fa29a8651e30a7, DomUtil as L_e328f0248fc98820e935ea9a362367c895b83e634456ed09bc8f878d7, CRS as L_85cd7f8ce301010e22d8224defa25c4d75e48d642d030cba811437477, Projection as L_d8778464af87a645c56302d5525521a2d05ec51be4aafa32531d6da17, LatLng as L_d52b298b451f5520d94fc2e7147c5440944b61d073e465a693369b827, latLng as L_0b56ce4c72e3d6c2f979f6ee370722ee0b456b57372a5cb53dd08a817, LatLngBounds as L_0cbac6d81422a00e2d87eb1ca87081daef2cbf7abb095dec040d16047, latLngBounds as L_0a155777958de74c0e686a888e75fa65b36a7a39929e3e10911b6e5a7, Point as L_c899fa22bd0d675250768a745766be3ba081f8c95a0aab5f31ea549d7, point as L_9d474a0f7fe07343485f2372060a8eeb15adf0d3fc02491a7c577a847, Bounds as L_47f109572aca9aa3b6f67c82276076e7fdb49b06dcd8527e8fbc6b077, bounds as L_ccb506dadd117f17c12bd50e69cbccde659ab004377a5608814ce39d7, Evented as L_eae2154ddb91569f009fbac25b09e1f739c7a7045f40e4dc6e4a174e7, Draggable as L_3c1eb89d427952697b697cb582fb7790b92682bb8da406459b8c5e927, Layer as L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b7, GridLayer as L_38fc076b7b329e6d352621cd95ea4f9fd7e59f649e26c416615dfc8c7, gridLayer as L_d06f44961865bff1911683a51edd32095bf0fdf72a83f26ee64f97327, TileLayer as L_0b1b41a278636456630b44b44676cfcdfc967420129ff80221ae51527, tileLayer as L_1bd4e460f8121a05ea42068d815e6b9078b4a85db871337cc53cfcbb7, ImageOverlay as L_3e7ca3d5e10541b730b051537c743510ed7239a740ac371d33e600217, imageOverlay as L_850159928c8e489de8ebe4a836ac090f7a3a8f61cf56088205bf70167, SVGOverlay as L_7d8ac7c9fbfff1e7c089f0111927f7fd02cfdbb5e33ddeb4a18105237, svgOverlay as L_b389633aac5bf25c98aef3ddcb13bbdcd4b473a6b5ebc7403a8b77e27, VideoOverlay as L_0c8a9f1de4fb7b9da6ec7ac5f142d9178e94f7fb5889db3a800002527, videoOverlay as L_568b5fb300bf40bc260890fc0c969f38ac068f10ec39def59cfd7f997, Path as L_27ab70c442349adc82ee5beec2b48676f78a6c916ef3895ab560d7e77, Polyline as L_fadcbf49b43503e6a04af89998e6469f19f2e4e496735536681f39997, polyline as L_467ddd954f8e511523920796a6df23a82b60bd18cb11e2e7d4d48d567, Polygon as L_64238a40bb66ab22a1df0db2bf90d94df0457cd31127e6bce50673307, polygon as L_bd8a20a1cfb4cdc02b83e1bb8fe720d98b722c0fb92f5a9da76395b57, Rectangle as L_5553aee4e6a692071f00d3af9e3b0012b174d5a53d68b6a28035519f7, rectangle as L_7c3ff5cd48d8a51152161b2f94853f2f0cf5f9f2b725644266af62e57, CircleMarker as L_c1a7b49f62e9e9052833f38cc11a50d4f36142798f3edd0b038203c67, circleMarker as L_3c5f0e992eeb0f31cc13697f60f3f3457221e8c2b7f68492a79f345f7, Class as L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e787356113157, Mixin as L_32af09c03bb0eec2eb529af247f7c7769c029aaeca539eebf7b6448c7, Map as L_d10d0aae5197be376bc45de611fa3a47fcff41585936639651a003867, setOptions as L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e33117, UI as L_dc324d54d0f8474cb2ebaf0f48e7cf4db9e424174379baa9766352be7, Control as L_b29887ea3be5d24df2ce5b4eb85251e7d4f95874f16bbfbf945ae0fe7, control as L_bcb990d7e2300a10dd151103bc92f4a2ed4ef48e7d0e033504da8cff7, DomEvent as L_772522412cd421e88ee91c1c494c1206f2df97db1f4f9ec991d995817, geoJson as L_5df34d4e45745909e0e7726d5780e16434c2f013b80eb484be7e7a7c7, bind as L_832c078372a67773b87420e48708d10a3f9d3ed373dbf33778ce78b17, extend as L_164aa3682f870cec8843bd5d0811b06b6ec857efcabbdffb3cb6224b7, Util as L_956477de3174c5bcdb8de3b006776efe154801b3b201ba2575a41ae47 } from "leaflet";
L.TimeDimension.Player = (L_0ea7b3b03902298831f6e1273f6119bde68da2ec47bf72dc18f7f90b7 || L_1109b7e5676a8d44978ee10201fb320d2033cdeb7ac7e787356113157).extend({
  includes: L_eae2154ddb91569f009fbac25b09e1f739c7a7045f40e4dc6e4a174e7 || L_32af09c03bb0eec2eb529af247f7c7769c029aaeca539eebf7b6448c7.Events,
  initialize: function(options, timeDimension) {
    L_2483f4d3c94a95ef918bcb65b0f6102b309193d882863b5d3e3e33117(this, options);
    this._timeDimension = timeDimension;
    this._paused = false;
    this._buffer = this.options.buffer || 5;
    this._minBufferReady = this.options.minBufferReady || 1;
    this._waitingForBuffer = false;
    this._loop = this.options.loop || false;
    this._steps = 1;
    this._timeDimension.on("timeload", function(data) {
      this.release();
      this._waitingForBuffer = false;
    }.bind(this));
    this.setTransitionTime(this.options.transitionTime || 1e3);
    this._timeDimension.on("limitschanged availabletimeschanged timeload", function(data) {
      this._timeDimension.prepareNextTimes(this._steps, this._minBufferReady, this._loop);
    }.bind(this));
  },
  _tick: function() {
    var maxIndex = this._getMaxIndex();
    var maxForward = this._timeDimension.getCurrentTimeIndex() >= maxIndex && this._steps > 0;
    var maxBackward = this._timeDimension.getCurrentTimeIndex() == 0 && this._steps < 0;
    if (maxForward || maxBackward) {
      if (!this._loop) {
        this.pause();
        this.stop();
        this.fire("animationfinished");
        return;
      }
    }
    if (this._paused) {
      return;
    }
    var numberNextTimesReady = 0, buffer = this._bufferSize;
    if (this._minBufferReady > 0) {
      numberNextTimesReady = this._timeDimension.getNumberNextTimesReady(this._steps, buffer, this._loop);
      if (this._waitingForBuffer) {
        if (numberNextTimesReady < buffer) {
          console.log("Waiting until buffer is loaded. " + numberNextTimesReady + " of " + buffer + " loaded");
          this.fire("waiting", {
            buffer,
            available: numberNextTimesReady
          });
          return;
        } else {
          console.log("Buffer is fully loaded!");
          this.fire("running");
          this._waitingForBuffer = false;
        }
      } else {
        if (numberNextTimesReady < this._minBufferReady) {
          console.log("Force wait for load buffer. " + numberNextTimesReady + " of " + buffer + " loaded");
          this._waitingForBuffer = true;
          this._timeDimension.prepareNextTimes(this._steps, buffer, this._loop);
          this.fire("waiting", {
            buffer,
            available: numberNextTimesReady
          });
          return;
        }
      }
    }
    this.pause();
    this._timeDimension.nextTime(this._steps, this._loop);
    if (buffer > 0) {
      this._timeDimension.prepareNextTimes(this._steps, buffer, this._loop);
    }
  },
  _getMaxIndex: function() {
    return Math.min(this._timeDimension.getAvailableTimes().length - 1, this._timeDimension.getUpperLimitIndex() || Infinity);
  },
  start: function(numSteps) {
    if (this._intervalID)
      return;
    this._steps = numSteps || 1;
    this._waitingForBuffer = false;
    var startedOver = false;
    if (this.options.startOver) {
      if (this._timeDimension.getCurrentTimeIndex() === this._getMaxIndex()) {
        this._timeDimension.setCurrentTimeIndex(this._timeDimension.getLowerLimitIndex() || 0);
        startedOver = true;
      }
    }
    this.release();
    this._intervalID = window.setInterval(L_832c078372a67773b87420e48708d10a3f9d3ed373dbf33778ce78b17(this._tick, this), this._transitionTime);
    if (!startedOver)
      this._tick();
    this.fire("play");
    this.fire("running");
  },
  stop: function() {
    if (!this._intervalID)
      return;
    clearInterval(this._intervalID);
    this._intervalID = null;
    this._waitingForBuffer = false;
    this.fire("stop");
  },
  pause: function() {
    this._paused = true;
  },
  release: function() {
    this._paused = false;
  },
  getTransitionTime: function() {
    return this._transitionTime;
  },
  isPlaying: function() {
    return this._intervalID ? true : false;
  },
  isWaiting: function() {
    return this._waitingForBuffer;
  },
  isLooped: function() {
    return this._loop;
  },
  setLooped: function(looped) {
    this._loop = looped;
    this.fire("loopchange", {
      loop: looped
    });
  },
  setTransitionTime: function(transitionTime) {
    this._transitionTime = transitionTime;
    if (typeof this._buffer === "function") {
      this._bufferSize = this._buffer.call(this, this._transitionTime, this._minBufferReady, this._loop);
      console.log("Buffer size changed to " + this._bufferSize);
    } else {
      this._bufferSize = this._buffer;
    }
    if (this._intervalID) {
      this.stop();
      this.start(this._steps);
    }
    this.fire("speedchange", {
      transitionTime,
      buffer: this._bufferSize
    });
  },
  getSteps: function() {
    return this._steps;
  }
});
