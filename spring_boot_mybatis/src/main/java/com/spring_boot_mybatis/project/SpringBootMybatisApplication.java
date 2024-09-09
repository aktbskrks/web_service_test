package com.spring_boot_mybatis.project;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

@SpringBootApplication
@ComponentScan(basePackages = { "com.spring_boot_mybatis.project" })
@MapperScan(basePackages = { "com.spring_boot_mybatis.project" })
@PropertySources({ @PropertySource(value = { "file:D:/springWorkspace/configure.properties",
		"file:/usr/local/project/properties/configure.properties", }, ignoreResourceNotFound = true) })

//@MapperScan(basePackageClasses=IProductDAO.class)
public class SpringBootMybatisApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootMybatisApplication.class, args);
	}

}
