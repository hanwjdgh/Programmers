function sumMatrix(A,B){
  for(var a in A){
      for(var b in A[a]){
      	A[a][b]+=B[a][b];
      }
  }
  return A 
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]])) 