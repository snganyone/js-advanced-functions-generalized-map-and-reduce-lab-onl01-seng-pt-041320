// Add your functions here
function map(src, call){
    return src.map(call);
}

function reduce(src, call, start){
    if (start){
        src.reduce(call, start);
    } else{
        src.reduce(call);
    }
}