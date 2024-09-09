/**
   	 prdCheck2.js
   	 상품번호 중복 확인 fetch 사용 get방식
 */
 
 $(document).ready(function() {
 	$('#prdNoCheckBtn').on('click', function() {
 	
 		event.preventDefault();
 		
 		let prdNo = $('#prdNo').val();
 		
 		if(prdNo == ""){
 			alert("prdCheck2 : 상품번호를 입력하세요");
 			return false;
 			
 		} else{

 			fetch("/product/prdNoCheck2/" + prdNo)
 			.then(response => response.text())	// 응답 객체를 text로 파싱
 			.then(result => {
	 				if(result == "available") {
	 					alert("prdCheck2 : 사용가능한 상품번호입니다.");
	 				} else {
	 					alert("prdCheck2 : 사용할 수 없는 상품번호 입니다.");
	 				}
 			})
 			. catch(err=> console.log(err));
 		
 		}	// else 끝
 	
 	}); // click 끝
 
 });