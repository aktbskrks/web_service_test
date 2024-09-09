<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>hello 페이지</title>
	</head>
	<body>
		hello.js 페이지<br>
		${ message }<br>
		
		<img src="/image/apple.png"> <!--  "/"가 static 폴더 찾음 -->
		<br>
		<img src="<c:url value='/image/apple.png'/>">
	</body>
</html>