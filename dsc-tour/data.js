var APP_DATA = {
  "scenes": [
    {
      "id": "0-3rd-floor-entrance",
      "name": "3rd Floor Entrance",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.3406429872335899,
        "pitch": -0.09967688851259737,
        "fov": 1.4776425881868616
      },
      "linkHotspots": [
        {
          "yaw": -0.5444119617164702,
          "pitch": 0.12706418656887664,
          "rotation": 6.283185307179586,
          "target": "1-bookshelves"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bookshelves",
      "name": "Bookshelves",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.090821308428474,
        "pitch": -0.06227262838976699,
        "fov": 1.4776425881868616
      },
      "linkHotspots": [
        {
          "yaw": -3.113667341359495,
          "pitch": 0.13769579927584097,
          "rotation": 0,
          "target": "2-dsc-entrance"
        },
        {
          "yaw": -0.0007664275965417744,
          "pitch": 0.16642298494599572,
          "rotation": 0,
          "target": "0-3rd-floor-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dsc-entrance",
      "name": "DSC Entrance",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.8707473918531408,
        "pitch": -0.0424738073094737,
        "fov": 1.4776425881868616
      },
      "linkHotspots": [
        {
          "yaw": 2.1804528581118445,
          "pitch": 0.21227322732120868,
          "rotation": 6.283185307179586,
          "target": "3-hallway"
        },
        {
          "yaw": -2.68492254872562,
          "pitch": 0.2289104252977019,
          "rotation": 5.497787143782138,
          "target": "6-dsc-classroom-entrance"
        },
        {
          "yaw": 0.5927953923535156,
          "pitch": 0.1903388495736138,
          "rotation": 0,
          "target": "1-bookshelves"
        },
        {
          "yaw": -2.5539825578533772,
          "pitch": 0.07884490530931565,
          "rotation": 0.7853981633974483,
          "target": "11-study-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway",
      "name": "Hallway",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.02070878387806,
        "pitch": 0.02289305418317511,
        "fov": 1.4776425881868616
      },
      "linkHotspots": [
        {
          "yaw": -0.02420615667532111,
          "pitch": 0.23432753369713843,
          "rotation": 0,
          "target": "2-dsc-entrance"
        },
        {
          "yaw": 3.101699749229936,
          "pitch": 0.1485838704232556,
          "rotation": 0,
          "target": "4-3d-printer-room-entrance"
        },
        {
          "yaw": -2.915541726994636,
          "pitch": 0.15469651753925717,
          "rotation": 1.5707963267948966,
          "target": "7-dsc-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-3d-printer-room-entrance",
      "name": "3D Printer Room Entrance",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0009976429642142,
        "pitch": -0.03879295537560701,
        "fov": 1.4748343143892102
      },
      "linkHotspots": [
        {
          "yaw": -3.1010067710560616,
          "pitch": 0.49502184323650766,
          "rotation": 5.497787143782138,
          "target": "5-3d-printer-room"
        },
        {
          "yaw": -1.9475145648826668,
          "pitch": 0.22690416870128516,
          "rotation": 0.7853981633974483,
          "target": "8-laser-cutting-room-entrance"
        },
        {
          "yaw": 1.218481881531833,
          "pitch": 0.19377824440282154,
          "rotation": 0,
          "target": "2-dsc-entrance"
        },
        {
          "yaw": -0.027433273265593527,
          "pitch": 0.36536484550049053,
          "rotation": 0.7853981633974483,
          "target": "7-dsc-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-3d-printer-room",
      "name": "3D Printer Room",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.28080408409863367,
        "pitch": 0.16456484581460806,
        "fov": 1.4748343143892102
      },
      "linkHotspots": [
        {
          "yaw": -1.741854553334278,
          "pitch": 0.2834030816415307,
          "rotation": 0,
          "target": "4-3d-printer-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dsc-classroom-entrance",
      "name": "DSC Classroom Entrance",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.125447623286848,
        "pitch": -0.02033273163198146,
        "fov": 1.4748343143892102
      },
      "linkHotspots": [
        {
          "yaw": -3.135981835799564,
          "pitch": 0.31431063013765836,
          "rotation": 0,
          "target": "7-dsc-classroom"
        },
        {
          "yaw": -1.691423407849772,
          "pitch": 0.19324445353720066,
          "rotation": 0.7853981633974483,
          "target": "11-study-lounge"
        },
        {
          "yaw": 1.4926158966920644,
          "pitch": 0.1854356739233456,
          "rotation": 0,
          "target": "2-dsc-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3019793754827296,
          "pitch": -0.28554191345371827,
          "title": "Room Number: A308",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-dsc-classroom",
      "name": "DSC Classroom",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.527606881767639,
        "pitch": 0.07167264485909364,
        "fov": 1.4748343143892102
      },
      "linkHotspots": [
        {
          "yaw": 0.07633694580712991,
          "pitch": 0.1372783336609995,
          "rotation": 0,
          "target": "10-printing-and-study-area"
        },
        {
          "yaw": 1.5455524622197645,
          "pitch": 0.02840515100983687,
          "rotation": 0,
          "target": "6-dsc-classroom-entrance"
        },
        {
          "yaw": -2.5751271701125518,
          "pitch": 0.0631083945837041,
          "rotation": 0,
          "target": "4-3d-printer-room-entrance"
        },
        {
          "yaw": -2.422449235354165,
          "pitch": -0.010037061045863993,
          "rotation": 0.7853981633974483,
          "target": "8-laser-cutting-room-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4381288059120152,
          "pitch": 0.03390213414851395,
          "title": "DSC Offices",
          "text": "Behind this door is where our hardworking staff work their magic!"
        },
        {
          "yaw": 2.82,
          "pitch": -0.36,
          "title": "Intro Video",
          "text": "",
          "video": "https://www.youtube.com/embed/G51MmepmAQA"
        }
      ]
    },
    {
      "id": "8-laser-cutting-room-entrance",
      "name": "Laser Cutting Room Entrance",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.9816570275888843,
        "pitch": -0.013824204539085727,
        "fov": 1.4748343143892102
      },
      "linkHotspots": [
        {
          "yaw": 2.991255227420682,
          "pitch": 0.5150639460187563,
          "rotation": 0,
          "target": "9-laser-cutting-room"
        },
        {
          "yaw": -1.392939591966476,
          "pitch": 0.2641962515340257,
          "rotation": 0.7853981633974483,
          "target": "4-3d-printer-room-entrance"
        },
        {
          "yaw": -1.7231234948066536,
          "pitch": 0.23679462480944835,
          "rotation": 5.497787143782138,
          "target": "7-dsc-classroom"
        },
        {
          "yaw": -1.550766248850211,
          "pitch": 0.09276970976957877,
          "rotation": 0,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-laser-cutting-room",
      "name": "Laser Cutting Room",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.736817303834325,
        "pitch": 0.3526119020791647,
        "fov": 1.4748343143892102
      },
      "linkHotspots": [
        {
          "yaw": -1.4269817407252638,
          "pitch": 0.39834924742199007,
          "rotation": 0,
          "target": "8-laser-cutting-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-printing-and-study-area",
      "name": "Printing and Study Area",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.8324026931173876,
        "pitch": -0.11263891682899008,
        "fov": 1.4748343143892102
      },
      "linkHotspots": [
        {
          "yaw": -0.011005645411660936,
          "pitch": 0.30497624334292084,
          "rotation": 0,
          "target": "7-dsc-classroom"
        },
        {
          "yaw": -0.4910709020017503,
          "pitch": 0.17209111878665695,
          "rotation": 5.497787143782138,
          "target": "6-dsc-classroom-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.533140893968797,
          "pitch": -0.15890828136255486,
          "title": "Large Format Printer",
          "text": "Students can print large-format posters for academic or personal projects. These affordable prints are ideal for drafts, test prints, or temporary displays, with customizable lengths at 36\" wide."
        },
        {
          "yaw": 0.9934449730267296,
          "pitch": -0.15726756713796064,
          "title": "3D Printer Filament Drop-Off",
          "text": "3D printer filament drop-off boxes are available for UVic and community members who would like to recycle used or leftover 3D printing filament.&nbsp;"
        }
      ]
    },
    {
      "id": "11-study-lounge",
      "name": "Study Lounge",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.747821274963534,
        "pitch": 0.0674639012000906,
        "fov": 1.4748343143892102
      },
      "linkHotspots": [
        {
          "yaw": -0.848433450242954,
          "pitch": 0.29743988992885306,
          "rotation": 5.497787143782138,
          "target": "6-dsc-classroom-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};

