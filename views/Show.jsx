const React = require('react')

class Show extends React.Component {
   render () {
    const log = this.props.log
    return (
        <div>
            <h1>Show Page</h1>
            {/* title: {type: String, required: true },
  entry: {type: String, required: true},
  shipIsBroken: {  */}
                Title: {log.title}
                Entry: {log.entry}
                Ship Is Broken: {log.shipIsBroken ? "The ship has been compromised" : "This ship is ready"}
        </div>
     );
    }
 }
 module.exports  = Show;