function printReversedTriangle(num) {
  var result = ''
  // 함수를 완성하세요
  for ( var i = num; i > 0; i-- ) { 
    for ( var j = 0; j < i; j++ ) { 
      result += "*" 
    } 
    result += "\n" 
  }
  return result
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " +'\n'+ printReversedTriangle(3));