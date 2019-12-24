import React, { Component } from 'react';

// TODO: Add API Settings section
const apiProtocol = "http";
const apiServer = "localhost";
const apiPort = 5555;
const apiPath = "api/v1"


// Leo la configuracion
const getConfigs = async() => {
  let url=`${apiProtocol}://${apiServer}:${apiPort}/${apiPath}/configs`;

  let configs = await fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      return myJson
    });
  // Options es un Objeto
  configs.options = JSON.stringify(configs.options);
  return configs;
}

// Salvo la configuracion
const saveConfigs = async(configs) => {
  let url=`${apiProtocol}://${apiServer}:${apiPort}/${apiPath}/configs`;

  let res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(configs),
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      headers:{ 'Content-Type': 'application/json'   }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      return myJson;
    })
    .catch( (error) => {
      console.log('Hubo un problema con la petición Fetch:' + error.message)
    });

  if (res.status === "success") {
    console.log("Config saved!")
    checkConfigs();
  } else {
    alert("Algo salio mal")
  }
}

// ejecuto el check
const checkConfigs = async() => {
  let url=`${apiProtocol}://${apiServer}:${apiPort}/${apiPath}/configs/check`;

  await fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      return myJson;
    });
}

class Configs extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    getConfigs().then(
      (cfg) => this.setState({ configs: cfg })
    );
  }

  state = {
    configs : {
      user: '',
      password: '',
      server: '',
      database: '',
      options: ''
    }
  }

  handleChange = (event) => {
    // Update state
    this.setState({
      configs : {
        // copia de states
        ...this.state.configs,
        [event.target.name]: event.target.value
      }
    })
    this.forceUpdate();
    this.render();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    // Enviar los datos al backend

    await saveConfigs(this.state.configs);

    // Ejecutar el check
    // si el check devuelve "status": "Hello, world!"
    // mostrar modal.

  }

  render() {
    return(
      <div className="mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
      <div className="mdl-cell mdl-cell--12-col ">
      <h3>SQL server settings</h3>
      </div>

        <form
          onSubmit={this.handleSubmit}
        >

          <div className="mdl-cell mdl-cell--6-col mdl-textfield">
            <input
              className="mdl-textfield__input"
              type="text"
              id="user"
              name="user"
              required
              value= {this.state.configs.user}
              onChange={this.handleChange}
            />
            <label className="" htmlFor="user">Username</label>
          </div>

          <div className="mdl-cell mdl-cell--6-col mdl-textfield">
            <input
              className="mdl-textfield__input"
              type="password" id="password"
              name="password"
              required
              value= {this.state.configs.password}
              onChange={this.handleChange}
            />
            <label className="" htmlFor="password">Password</label>
          </div>

          <div className="mdl-cell mdl-cell--6-col mdl-textfield">
            <input
              className="mdl-textfield__input"
              type="text"
              id="server"
              name="server"
              required
              value= {this.state.configs.server}
              onChange={this.handleChange}
            />
            <label className="" htmlFor="server">Hostname or IP</label>
          </div>


          <div className="mdl-cell mdl-cell--6-col mdl-textfield">
            <input
              className="mdl-textfield__input"
              type="text"
              id="database"
              name="database"
              required
              value= {this.state.configs.database}
              onChange={this.handleChange}
            />
            <label className="" htmlFor="database">Database</label>
          </div>


          <div className="mdl-cell mdl-cell--12-col mdl-textfield">
            <input
              className="mdl-textfield__input"
              type="text"
              id="options"
              name="options"
              value= {this.state.configs.options}
              onChange={this.handleChange}
            />
            <label className="" htmlFor="options">Options</label>
          </div>

          <div className="mdl-grid">
            <div className="mdl-layout-spacer"></div>
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
              <i className="material-icons">save</i>
            </button>

          </div>

        </form>
      </div>
    )
  }
}

export default Configs;
