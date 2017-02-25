const React = require('react')
const ReactDOM = require('react-dom')

const Password = require('./password.jsx')

class PasswordPanel extends React.Component {
    render() {
        return (
            <Password upperCase={true} lowerCase={true} special={true} number={true} over6={true}/>
        )
    }
}
module.exports = PasswordPanel