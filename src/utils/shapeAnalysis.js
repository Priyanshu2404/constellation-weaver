export const describeshape = (points)=>{
    if(!points || points.length<2)
        return 'a simple dot';
    return `${points.length} stars are connected in a unique pattern`;

};