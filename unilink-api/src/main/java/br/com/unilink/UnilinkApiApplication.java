package br.com.unilink;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "br.com.unilink")
public class UnilinkApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(UnilinkApiApplication.class, args);
	}

}
