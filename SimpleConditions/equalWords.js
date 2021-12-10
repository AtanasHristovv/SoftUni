function equalWords([arg1, arg2]){
    let word = (arg1);
    let word2 = (arg2);
    
    if (arg1 == arg2.toLowerCase()){
        console.log('yes');
    }else if (arg2 == arg1){
        console.log('yes');
    }else{
        console.log('no');
    }
}

equalWords(['Hello', 'hello']);

