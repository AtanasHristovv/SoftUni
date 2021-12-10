function scoreCalculator([arg1]){
    let num = Number(arg1);
    let bonusScore = 0;  
    if (num <= 100){
        bonusScore=5;
    }else if (num > 1000){
        bonusScore=num * 0.10;
    }else if (num > 100){
        bonusScore=num * 0.20;
    }
    if(num % 2 ==0){
        bonusScore = bonusScore + 1;
    }else if (num % 10 == 5){
        bonusScore = bonusScore + 2;
    }
    console.log(bonusScore);
    console.log(bonusScore + num);
}

scoreCalculator([2703]);