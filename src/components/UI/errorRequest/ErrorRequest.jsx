import React from 'react';
import cl from "./ErrorRequest.module.scss";

export const ErrorRequest = ({ children }) => {
    return (
        <div className={cl.error__request}>
            <p className={cl.error__request_message}>{children}</p>
        </div>
    )
}
