[
    {
        "id": "4edc78ef3bcebd57",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "fddc9e1e97aa5611",
        "type": "inject",
        "z": "4edc78ef3bcebd57",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 200,
        "y": 120,
        "wires": [
            [
                "b6da6465f38eef7f"
            ]
        ]
    },
    {
        "id": "b6da6465f38eef7f",
        "type": "debug",
        "z": "4edc78ef3bcebd57",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 460,
        "y": 120,
        "wires": []
    }
]