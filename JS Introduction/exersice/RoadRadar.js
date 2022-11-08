function solve(speed, road) {

    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;

    let diff = 0;
    let status;
    switch(road) {
        case 'motorway':

            if(speed <= motorway) {
                console.log(`Driving ${speed} km/h in a ${motorway} zone`);
            } else {
                diff = speed - motorway;
                if(diff <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorway} - ${status}`);
                } else if(diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorway} - ${status}`);
                } else if(diff > 40) {
                    status = 'reckless driving';
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorway} - ${status}`);
                }
            }
        break;

        case 'interstate':

            if(speed <= interstate) {
                console.log(`Driving ${speed} km/h in a ${interstate} zone`);
            } else {
                diff = speed - interstate;
                if(diff <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstate} - ${status}`);
                } else if(diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstate} - ${status}`);
                } else if(diff > 40) {
                    status = 'reckless driving';
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstate} - ${status}`);
                } else {
                    console.log(`Driving ${speed} km/h in a ${interstate} zone`);
                }
            }
        break;

        case 'city':
            if(speed <= city) {
                console.log(`Driving ${speed} km/h in a ${city} zone`);
            } else {
                diff = speed - city;
                if(diff <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${city} - ${status}`);
                } else if(diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${city} - ${status}`);
                } else if(diff > 40) {
                    status = 'reckless driving';
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${city} - ${status}`);
                } else {
                    console.log(`Driving ${speed} km/h in a ${city} zone`);
                }
            }
        break;

        case 'residential':

            if(speed <= residential) {
                console.log(`Driving ${speed} km/h in a ${residential} zone`);
            } else {
                diff = speed - residential;
                if(diff <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residential} - ${status}`);
                } else if(diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residential} - ${status}`);
                } else if(diff > 40) {
                    status = 'reckless driving';
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residential} - ${status}`);
                } else {
                    console.log(`Driving ${speed} km/h in a ${residential} zone`);
                }
            }
        break;
    }
}

solve(120, 'interstate');