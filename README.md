# eQuery
Interface para realizar consultas a MSSQL y exportarlas en distintos formatos

## Electron
[electron](https://electronjs.org/)

To run the aplication you need:
1. In the *frontend* folder run `yarn build`. This command generate *build* folder
2. In the root folder run `electron .`

If you want to package and build a ready for distribution Electron app for macOS, Windows and Linux, yuo can use *electron-builder*

## electron-builder
[electron-builder](https://www.electron.build/)

```
electron-builder build  --windows dir
```

...chrome-sandbox is owned by root and has mode 4755.<br>
sudo sysctl kernel.unprivileged_userns_clone=1<br>

## Front-encoded
The front-end is a single-page application build with [React](https://es.reactjs.org/)

## Back-end
The back-end is a API Rest build with [Node.js](https://nodejs.org/)

## config.json

```json
{
  "node_port": 5555,
  "json_indentation": 4,
  "mssql": {
    "user": "your_user",
    "password": "your_passwoed",
    "server": "your_server_ip",
    "database": "your_database"
  }
}
```

If you use Microsoft SQL Server 2005 append this lines in "mssql" section
```json
"options": {
  "encrypt": false,
  "instanceName": "intance"
}
```
