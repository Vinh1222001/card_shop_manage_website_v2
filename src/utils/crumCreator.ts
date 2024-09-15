    
export const crumbCreator=()=>{
    return {

        crumb: (routeSeg: string, pageName: string) => {
            return {
                routeSegment: routeSeg,
                routeName: pageName
            }
        }
    }
}