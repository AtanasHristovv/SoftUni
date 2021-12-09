function isExellent([n]){
    let grade = Number(n);
    if (grade >=5.5){
        console.log('Excellent!');
    }else{
        console.log('Not excellent.');
    }
}

isExellent(['3']);
isExellent(['8']);