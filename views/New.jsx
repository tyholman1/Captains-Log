const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Log</h1>
        <form action="/log" method="POST">
            Title: <input type="text" value="title" />
            Entry: <input type="textarea" value="entry" />
            Ship Broken: <input type="checkbox" value="shipIsBroken" />
            <input type="submit" value="Submit" />


        </form>
        <nav>
          <a href="/fruits">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New