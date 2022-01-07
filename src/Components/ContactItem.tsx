
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

interface IContactItemProps {
    name: string,
    icon: IconName,
}

export const ContactItem:FC<IContactItemProps> = (props) => {
    return (
        <div className={`contact__{props.name}`}>
        <FontAwesomeIcon icon={props.icon} />
         {/* {props.name} */}
            <div className="text-secondary">{props.children}</div>
    </div>
    )
}
