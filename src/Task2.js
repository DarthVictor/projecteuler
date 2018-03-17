function getSumBelow(N, a){
    const count = Math.trunc((N - 1) / a);
    return (2*a + a*(count - 1))*count/2;
}

function getSumThreeorFive(N){
    if(N < 1) return 0;
    return getSumBelow(N, 5) + getSumBelow(N, 3) - getSumBelow(N, 15);
}
