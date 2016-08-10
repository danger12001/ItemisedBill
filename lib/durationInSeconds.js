exports.durationInSeconds = function(duration){
var seconds = 0;
var split = duration.replace(/h/g, "").replace(/m/g, "").replace(/s/g, "").split("");
seconds += (Number(split[5]) + Number(split[4] + 0) + (60 * (Number(split[2] + 0) + Number(split[3]))) + ((60 * 60) * (Number(split[0] + 0) + Number(split[1]))));
return seconds;
};
