import React from "react";

type Props = {
    name:string
}

const HelloWorld: React.FC<Props> = ({name}) => {
    return <h2> Hello {name}</h2>

}

export default HelloWorld;