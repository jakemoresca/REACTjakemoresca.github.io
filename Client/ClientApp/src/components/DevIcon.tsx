import * as React from "react";

interface IDevIconProps
{
    tooltip?: string;
    icon: string;
    colored?: boolean;
}

export const DevIcon: React.FunctionComponent<IDevIconProps> = ({ icon, colored, tooltip }) =>
{
    return (<i className={`${icon} ${colored === true ? "colored" : ""}`} title={tooltip}></i>);
}