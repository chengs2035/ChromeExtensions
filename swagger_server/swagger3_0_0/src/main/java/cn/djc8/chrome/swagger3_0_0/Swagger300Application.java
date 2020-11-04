package cn.djc8.chrome.swagger3_0_0;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.oas.annotations.EnableOpenApi;

@SpringBootApplication
@EnableOpenApi
public class Swagger300Application {

	public static void main(String[] args) {
		SpringApplication.run(Swagger300Application.class, args);
	}

}
