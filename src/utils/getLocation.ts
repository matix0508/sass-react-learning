import { Location } from "react-router-dom"

export function getLocation(loc: Location) {
    return loc.pathname.split('/')[1]
}
