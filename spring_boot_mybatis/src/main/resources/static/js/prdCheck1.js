/**
   	 prdCheck1.js
   	 상품번호 중복 확인 get방식
 */
 
 $(document).ready(function() {
 	$('#prdNoCheckBtn').on('click', function() {
 	
 		event.preventDefault();
 		
 		let prdNo = $('#prdNo').val();
 		
 		if(prdNo == ""){
 			alert("prdCheck1 : 상품번호를 입력하세요");
 			return false;
 			
 		} else{
 		
	 		$.ajax({
	 			type:"get",
	 			url:"/product/prdNoCheck1/" + prdNo,
	 			dataType:'text',
	 			success:function(result) {
	 				if(result == "available") {
	 					alert("prdCheck1 : 사용가능한 상품번호입니다.");
	 				} else {
	 					alert("prdCheck1 : 사용할 수 없는 상품번호 입니다.");
	 				}
	 			},
	 			error:function() {
	 				alert("prdCheck1 : 실패");
	 			}
	 		});
 		
 		}	// else 끝
 	
 	}); // click 끝
 
 });