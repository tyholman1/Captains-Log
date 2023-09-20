const React = require("react")

class Index extends React.Component {
  render() {
    const { log } = this.props
    return(
      <div>
        <ul>
                {log.map((logs,i) =>{
                    return (
                        <li key={i}>
                          <a href={`/logs/${logs._id}`}>{logs.title} </a>
                          <a href={`/logs/${logs._id}/edit`}>Edit This Ship</a>
                          <form action={`/logs/${logs._id}?_method=DELETE`} method="POST">
                          <input type="submit" value='Delete' />
                          </form>
                        </li>
                    )
                })}
        </ul>
        <a href="/logs/new">Create a New Log</a>
    </div>
    )
  }
}

module.exports = Index