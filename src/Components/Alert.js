import React from 'react'



function Alert(props) {
    return (
        props.alert &&
        <div>
            <div className="alert alert-warning alert-dismissible fade show" fill ="currentcolor" role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.message}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>
    )
}

export default Alert