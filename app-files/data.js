var APP_DATA = {
  "scenes": [
    {
      "id": "0-12sharpen",
      "name": "1.2(sharpen)",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.6847067302225014,
        "pitch": 0.10860832745150972,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": 0.08419117698027634,
          "pitch": 0.16221393295364095,
          "rotation": 0,
          "target": "1-22-sharpen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-22-sharpen",
      "name": "2.2 (sharpen)",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 3.1137586436439175,
        "pitch": 0.06415644943261967,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": 0.032926680190721314,
          "pitch": 0.12013491363491369,
          "rotation": 0,
          "target": "2-32sharpen"
        },
        {
          "yaw": -3.1133767380073163,
          "pitch": -0.03471620541401066,
          "rotation": 0,
          "target": "0-12sharpen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-32sharpen",
      "name": "3.2(sharpen)",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": -3.1195922504501734,
          "pitch": 0.10562089237851247,
          "rotation": 0,
          "target": "1-22-sharpen"
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
