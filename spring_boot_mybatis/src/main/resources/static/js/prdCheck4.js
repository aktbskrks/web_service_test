/**
   	 prdCheck4.js
   	 상품번호 중복 확인 axios 사용 get방식
 */
 
 $(document).ready(function() {
 	$('#prdNoCheckBtn').on('click', function() {
 	
 		event.preventDefault();
 		
 		let prdNo = $('#prdNo').val();
 		
 		if(prdNo == ""){
 			alert("prdCheck4 : 상품번호를 입력하세요");
 			return false;
 			
 		} else{

			axios.get("/product/prdNoCheck4/" + prdNo)
			.then(function(response){
			
				console.log(response);
				
				if(response.data == "available") {
	 					alert("prdCheck4 : 사용가능한 상품번호입니다.");
	 			} else {
	 					alert("prdCheck4 : 사용할 수 없는 상품번호 입니다.");
	 			}
	 			
			})
			.catch((error) => {
				console.log(error.response)
			})
 		
 		}	// else 끝
 	
 	}); // click 끝
 
 });