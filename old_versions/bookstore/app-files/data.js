var APP_DATA = {
  "scenes": [
    {
      "id": "0-pano_11",
      "name": "pano_1.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.048331732677262096,
        "pitch": 0.044664755719438176,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.03423311869318013,
          "pitch": 0.08224313655870219,
          "rotation": 0,
          "target": "1-pano_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pano_2",
      "name": "pano_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 0.0349103514472997,
        "pitch": 0.12959959163178247,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "0-pano_11"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
