/**
   	 prdCheck4.js
   	 상품번호 중복 확인 axios 사용 post방식
 */
 
 $(document).ready(function() {
 	$('#prdNoCheckBtn').on('click', function() {
 	
 		event.preventDefault();
 		
 		let prdNo = $('#prdNo').val();
 		
 		if(prdNo == ""){
 			alert("prdCheck5 : 상품번호를 입력하세요");
 			return false;
 			
 		} else{

			const data = {prdNo : prdNo}
			axios.post("/product/prdNoCheck5", data)
			.then(function(response){
			
				console.log(response);
				
				if(response.data == "available") {
	 					alert("prdCheck5 : 사용가능한 상품번호입니다.");
	 			} else {
	 					alert("prdCheck5 : 사용할 수 없는 상품번호 입니다.");
	 			}
	 			
			})
			.catch((error) => {
				console.log(error.response)
			})
 		
 		}	// else 끝
 	
 	}); // click 끝
 
 });